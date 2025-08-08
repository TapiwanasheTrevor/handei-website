# Deployment Guide for Handei Zimbabwe Website

This guide explains how to deploy the Handei Zimbabwe website using Docker on Render.

## Prerequisites

- Docker installed locally for testing
- Render account (https://render.com)
- Git repository with your code

## Project Structure

The application consists of:
- **Laravel Backend**: PHP API and admin panel
- **Next.js Frontend**: React-based frontend at `/resources/js/landing`
- **MySQL/PostgreSQL Database**: Data storage
- **Redis**: Caching and sessions (optional)

## Local Development with Docker

### 1. Setup Environment

```bash
# Copy environment file
cp .env.example .env

# Generate application key
docker-compose run --rm app php artisan key:generate
```

### 2. Build and Run

```bash
# Build Docker images
docker-compose build

# Start services
docker-compose up -d

# Run migrations
docker-compose exec app php artisan migrate

# Seed database (optional)
docker-compose exec app php artisan db:seed
```

### 3. Access the Application

- Main website: http://localhost:8080
- phpMyAdmin: http://localhost:8081

## Deployment on Render

### 1. Prepare Your Repository

1. Push your code to GitHub/GitLab
2. Ensure all Docker configuration files are committed:
   - `Dockerfile`
   - `render.yaml`
   - `docker/` directory with all configs
   - `.dockerignore`

### 2. Database Setup on Render

Render will automatically create a PostgreSQL database based on the `render.yaml` configuration.

### 3. Deploy to Render

#### Option A: Using Render Dashboard

1. Log in to Render Dashboard
2. Click "New +" → "Blueprint"
3. Connect your Git repository
4. Render will detect the `render.yaml` file
5. Review the services and click "Apply"

#### Option B: Manual Setup

1. Create a new Web Service on Render
2. Connect your repository
3. Configure:
   - **Environment**: Docker
   - **Docker Command**: Leave blank (uses Dockerfile)
   - **Instance Type**: Starter ($7/month) or higher
   - **Region**: Oregon (US West)

### 4. Environment Variables

Add these environment variables in Render dashboard:

```env
APP_NAME=Handei Zimbabwe
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:your-generated-key-here
APP_URL=https://your-app.onrender.com

# Database (auto-configured by Render)
DB_CONNECTION=pgsql

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USERNAME=your-username
MAIL_PASSWORD=your-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=info@handeizimbabwe.com

# Contact Information
CONTACT_ADDRESS=72 West Road, Avondale, Harare, Zimbabwe
CONTACT_PHONE_1=+263 719 050 207
CONTACT_PHONE_2=+263 785 995 280
```

### 5. Post-Deployment Steps

After deployment, run these commands via Render Shell:

```bash
# Generate application key if not set
php artisan key:generate

# Run migrations
php artisan migrate --force

# Create storage link
php artisan storage:link

# Clear caches
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Custom Domain Setup

1. In Render Dashboard, go to your service
2. Click "Settings" → "Custom Domains"
3. Add your domain (e.g., handeizimbabwe.com)
4. Update your DNS records:
   - Type: CNAME
   - Name: @ or www
   - Value: your-app.onrender.com

## SSL Certificate

Render provides free SSL certificates automatically for all services.

## Monitoring and Logs

- View logs in Render Dashboard → Your Service → "Logs"
- Set up health checks in `render.yaml` or dashboard
- Monitor performance metrics in the dashboard

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Docker build logs
   - Ensure all dependencies are in `composer.json` and `package.json`
   - Verify file permissions in Dockerfile

2. **Database Connection Issues**
   - Verify DATABASE_URL is correctly set
   - Check if migrations ran successfully
   - Ensure PostgreSQL extension is enabled in PHP

3. **Next.js Not Loading**
   - Check if Next.js build completed
   - Verify nginx proxy configuration
   - Check port 3000 is correctly configured

4. **Storage Issues**
   - Run `php artisan storage:link`
   - Check file permissions on storage directory
   - Consider using S3 for production file storage

### Debug Commands

```bash
# Check PHP configuration
docker-compose exec app php -i

# Check Laravel configuration
docker-compose exec app php artisan config:show

# Test database connection
docker-compose exec app php artisan db:show

# View nginx logs
docker-compose exec app tail -f /var/log/nginx/error.log

# View Laravel logs
docker-compose exec app tail -f /var/www/html/storage/logs/laravel.log
```

## Scaling

To scale your application:

1. **Vertical Scaling**: Upgrade to a higher Render instance type
2. **Horizontal Scaling**: Enable auto-scaling in Render (Pro plan)
3. **Database**: Upgrade database plan for better performance
4. **CDN**: Use Cloudflare for static assets
5. **Cache**: Implement Redis for better caching

## Backup Strategy

1. **Database**: Enable automatic backups in Render
2. **Files**: Store uploads in S3 with versioning
3. **Code**: Use Git tags for release versions

## Security Considerations

- Keep dependencies updated
- Use environment variables for sensitive data
- Enable HTTPS only (force redirect)
- Implement rate limiting
- Regular security audits
- Monitor for vulnerabilities

## Support

For deployment issues:
- Check Render documentation: https://render.com/docs
- Laravel deployment guide: https://laravel.com/docs/deployment
- Next.js deployment: https://nextjs.org/docs/deployment

## Contact Information

**Handei Zimbabwe**
- Address: 72 West Road, Avondale, Harare, Zimbabwe
- Phone: +263 719 050 207 / +263 785 995 280
- Email: info@handeizimbabwe.com