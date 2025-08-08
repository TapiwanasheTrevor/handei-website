#!/bin/sh

set -e

echo "Starting Handei Zimbabwe application..."

# Wait for database to be ready
echo "Waiting for database connection..."
until php artisan db:monitor 2>/dev/null; do
  echo "Database is unavailable - sleeping"
  sleep 3
done

echo "Database is up - executing migrations"

# Run migrations
php artisan migrate --force

# Clear and cache configs
php artisan config:clear
php artisan config:cache
php artisan route:clear
php artisan route:cache
php artisan view:clear
php artisan view:cache

# Create storage link if it doesn't exist
php artisan storage:link || true

# Set permissions
chown -R www-data:www-data /var/www/html/storage
chown -R www-data:www-data /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage
chmod -R 775 /var/www/html/bootstrap/cache

# Start Next.js server in background
echo "Starting Next.js server..."
cd /var/www/html/resources/js/landing && npm start &

# Start PHP-FPM in background
echo "Starting PHP-FPM..."
php-fpm &

# Start Nginx in foreground
echo "Starting Nginx..."
nginx -g 'daemon off;'