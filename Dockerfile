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

# Create .env file from example if it doesn't exist
RUN if [ ! -f .env ]; then cp .env.example .env; fi

# Generate application key if not set
RUN php artisan key:generate --force || true

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# Run composer scripts after install
RUN composer dump-autoload --optimize

# Install Node dependencies including dev dependencies for build
RUN npm ci

# Build Laravel assets
RUN npm run build

# Remove dev dependencies after build to reduce image size
RUN npm prune --omit=dev

# Install and build Next.js application
WORKDIR /var/www/html/resources/js/landing
RUN npm ci
RUN npm run build

# Copy Next.js static files to Laravel public directory for easier serving
RUN if [ -d ".next/static" ]; then \
    mkdir -p /var/www/html/public/_next && \
    cp -r .next/static /var/www/html/public/_next/ && \
    cp -r .next/server /var/www/html/public/_next/ 2>/dev/null || true; \
fi

# Remove dev dependencies for Next.js too
RUN npm prune --omit=dev

# Go back to main directory
WORKDIR /var/www/html

# Create necessary directories and set permissions
RUN mkdir -p storage/framework/{cache,sessions,views} \
    && mkdir -p storage/logs \
    && mkdir -p bootstrap/cache \
    && mkdir -p /var/run/php \
    && chown -R www-data:www-data /var/www/html/storage \
    && chown -R www-data:www-data /var/www/html/bootstrap/cache \
    && chown -R www-data:www-data /var/run/php \
    && chmod -R 775 storage bootstrap/cache

# Configure PHP-FPM to use TCP instead of Unix socket
RUN echo '[www]' > /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'listen = 127.0.0.1:9000' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'listen.owner = www-data' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'listen.group = www-data' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'user = www-data' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'group = www-data' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'pm = dynamic' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'pm.max_children = 50' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'pm.start_servers = 5' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'pm.min_spare_servers = 5' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'pm.max_spare_servers = 35' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'clear_env = no' >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo 'catch_workers_output = yes' >> /usr/local/etc/php-fpm.d/zz-docker.conf

# Configure PHP for production
RUN echo 'display_errors = Off' > /usr/local/etc/php/conf.d/production.ini \
    && echo 'display_startup_errors = Off' >> /usr/local/etc/php/conf.d/production.ini \
    && echo 'error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT' >> /usr/local/etc/php/conf.d/production.ini \
    && echo 'log_errors = On' >> /usr/local/etc/php/conf.d/production.ini \
    && echo 'error_log = /dev/stderr' >> /usr/local/etc/php/conf.d/production.ini \
    && echo 'memory_limit = 256M' >> /usr/local/etc/php/conf.d/production.ini \
    && echo 'upload_max_filesize = 100M' >> /usr/local/etc/php/conf.d/production.ini \
    && echo 'post_max_size = 100M' >> /usr/local/etc/php/conf.d/production.ini \
    && echo 'max_execution_time = 60' >> /usr/local/etc/php/conf.d/production.ini

# Copy configuration files
COPY docker/nginx/site.conf /etc/nginx/sites-available/default
COPY docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create startup script
RUN echo '#!/bin/bash\n\
set -e\n\
\n\
echo "Starting Handei Zimbabwe application..."\n\
\n\
# Ensure APP_KEY is set\n\
if [ -z "$APP_KEY" ]; then\n\
    echo "APP_KEY not found in environment, generating..."\n\
    php artisan key:generate --force\n\
fi\n\
\n\
# Update .env with environment variables from Render\n\
if [ ! -z "$APP_KEY" ]; then\n\
    sed -i "s|APP_KEY=.*|APP_KEY=$APP_KEY|g" .env\n\
fi\n\
if [ ! -z "$APP_URL" ]; then\n\
    sed -i "s|APP_URL=.*|APP_URL=$APP_URL|g" .env\n\
fi\n\
if [ ! -z "$DB_CONNECTION" ]; then\n\
    sed -i "s|DB_CONNECTION=.*|DB_CONNECTION=$DB_CONNECTION|g" .env\n\
fi\n\
if [ ! -z "$DB_HOST" ]; then\n\
    sed -i "s|DB_HOST=.*|DB_HOST=$DB_HOST|g" .env\n\
fi\n\
if [ ! -z "$DB_PORT" ]; then\n\
    sed -i "s|DB_PORT=.*|DB_PORT=$DB_PORT|g" .env\n\
fi\n\
if [ ! -z "$DB_DATABASE" ]; then\n\
    sed -i "s|DB_DATABASE=.*|DB_DATABASE=$DB_DATABASE|g" .env\n\
fi\n\
if [ ! -z "$DB_USERNAME" ]; then\n\
    sed -i "s|DB_USERNAME=.*|DB_USERNAME=$DB_USERNAME|g" .env\n\
fi\n\
if [ ! -z "$DB_PASSWORD" ]; then\n\
    sed -i "s|DB_PASSWORD=.*|DB_PASSWORD=$DB_PASSWORD|g" .env\n\
fi\n\
\n\
# Ensure PHP-FPM directory exists\n\
mkdir -p /var/run/php\n\
chown www-data:www-data /var/run/php\n\
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
php artisan config:clear\n\
php artisan config:cache\n\
php artisan route:clear\n\
php artisan route:cache\n\
php artisan view:clear\n\
php artisan view:cache\n\
\n\
# Create storage link\n\
php artisan storage:link || true\n\
\n\
# Show current environment for debugging\n\
echo "Environment Configuration:"\n\
echo "APP_ENV: ${APP_ENV:-not set}"\n\
echo "APP_DEBUG: ${APP_DEBUG:-not set}"\n\
echo "APP_KEY: ${APP_KEY:0:20}... (truncated)"\n\
echo "DB_CONNECTION: ${DB_CONNECTION:-not set}"\n\
echo "DB_HOST: ${DB_HOST:-not set}"\n\
\n\
# Start supervisord\n\
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf\n\
' > /start.sh && chmod +x /start.sh

# Expose port
EXPOSE 80

# Start the application
CMD ["/start.sh"]