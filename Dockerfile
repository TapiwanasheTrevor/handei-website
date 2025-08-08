# Production Dockerfile for Laravel + Next.js on Render
FROM php:8.2-fpm

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
    zip \
    unzip \
    nginx \
    supervisor \
    nodejs \
    npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql mbstring exif pcntl bcmath gd zip opcache

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

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
echo "Starting application..."\n\
\n\
# Run migrations if database is available\n\
if php artisan migrate:status > /dev/null 2>&1; then\n\
    php artisan migrate --force\n\
else\n\
    echo "Database not ready, skipping migrations"\n\
fi\n\
\n\
# Clear and optimize\n\
php artisan config:cache\n\
php artisan route:cache\n\
php artisan view:cache\n\
\n\
# Create storage link\n\
php artisan storage:link || true\n\
\n\
# Start supervisord\n\
/usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf\n\
' > /start.sh && chmod +x /start.sh

# Expose port
EXPOSE 80

# Start the application
CMD ["/start.sh"]