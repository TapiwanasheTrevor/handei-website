# Multi-stage build for Laravel + Next.js application

# Stage 1: Build Next.js application
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy Next.js app files
COPY resources/js/landing/package*.json ./
RUN npm ci --only=production

COPY resources/js/landing/ ./
RUN npm run build

# Stage 2: Build Laravel application
FROM php:8.2-fpm-alpine AS backend

# Install system dependencies
RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    libxpm-dev \
    freetype-dev \
    libzip-dev \
    zip \
    unzip \
    nginx \
    supervisor \
    nodejs \
    npm \
    postgresql-dev \
    mysql-client

# Install PHP extensions
RUN docker-php-ext-configure gd \
    --with-jpeg \
    --with-webp \
    --with-xpm \
    --with-freetype

RUN docker-php-ext-install \
    pdo \
    pdo_mysql \
    pdo_pgsql \
    gd \
    zip \
    pcntl \
    opcache

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy Laravel application files
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist

COPY . .

# Copy built Next.js files from frontend-builder stage
COPY --from=frontend-builder /app/frontend/.next ./resources/js/landing/.next
COPY --from=frontend-builder /app/frontend/public ./resources/js/landing/public
COPY --from=frontend-builder /app/frontend/node_modules ./resources/js/landing/node_modules

# Generate optimized autoload files
RUN composer dump-autoload --optimize

# Install Node dependencies for Laravel Mix/Vite
RUN npm ci --only=production

# Set up storage and cache directories
RUN mkdir -p storage/framework/cache \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage \
    /var/www/html/bootstrap/cache

# Copy Nginx configuration
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/site.conf /etc/nginx/conf.d/default.conf

# Copy Supervisor configuration
COPY docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy startup script
COPY docker/scripts/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Copy PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini
COPY docker/php/www.conf /usr/local/etc/php-fpm.d/www.conf

# Expose port
EXPOSE 80

# Start services
CMD ["/usr/local/bin/start.sh"]