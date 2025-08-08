# Production Dockerfile for Laravel + Next.js on Render
FROM php:8.3-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    libzip-dev \
    libicu-dev \
    zip \
    unzip \
    nginx \
    supervisor \
    nodejs \
    npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions including intl
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-configure intl \
    && docker-php-ext-install \
        pdo \
        pdo_mysql \
        pdo_pgsql \
        mbstring \
        exif \
        pcntl \
        bcmath \
        gd \
        zip \
        opcache \
        intl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy all application files first
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# Run composer scripts after install
RUN composer dump-autoload --optimize

# Install Node dependencies for Laravel
RUN npm ci --only=production

# Build Laravel assets
RUN npm run build

# Install and build Next.js application
WORKDIR /var/www/html/resources/js/landing
RUN npm ci --only=production
RUN npm run build

# Go back to main directory
WORKDIR /var/www/html

# Create necessary directories and set permissions
RUN mkdir -p storage/framework/{cache,sessions,views} \
    && mkdir -p storage/logs \
    && mkdir -p bootstrap/cache \
    && chown -R www-data:www-data /var/www/html/storage \
    && chown -R www-data:www-data /var/www/html/bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Copy configuration files
COPY docker/nginx/site.conf /etc/nginx/sites-available/default
COPY docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create startup script
RUN echo '#!/bin/bash\n\
set -e\n\
\n\
echo "Starting Handei Zimbabwe application..."\n\
\n\
# Wait for database with timeout\n\
echo "Checking database connection..."\n\
for i in {1..30}; do\n\
  if php artisan migrate:status > /dev/null 2>&1; then\n\
    echo "Database is ready!"\n\
    php artisan migrate --force\n\
    break\n\
  else\n\
    echo "Database not ready, waiting... ($i/30)"\n\
    sleep 2\n\
  fi\n\
  if [ $i -eq 30 ]; then\n\
    echo "Database timeout, continuing without migrations..."\n\
  fi\n\
done\n\
\n\
# Run Laravel post-install commands\n\
php artisan package:discover --ansi || true\n\
php artisan config:cache\n\
php artisan route:cache\n\
php artisan view:cache\n\
\n\
# Create storage link\n\
php artisan storage:link || true\n\
\n\
# Start supervisord\n\
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf\n\
' > /start.sh && chmod +x /start.sh

# Expose port
EXPOSE 80

# Start the application
CMD ["/start.sh"]