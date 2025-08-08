# Troubleshooting Render Deployment

## Common Issues and Solutions

### 1. Bad Gateway (502) Error

This usually means the application failed to start. Check the following:

#### Check Render Logs
1. Go to Render Dashboard → Your Service → Logs
2. Look for error messages in the build and deploy logs

#### Common Causes:

**Port Issues:**
- Ensure your app is listening on port 80 (not 8000 or 3000)
- The Dockerfile exposes port 80
- Supervisor manages nginx on port 80

**Database Connection:**
- Check if database credentials are set correctly
- Verify the health check endpoint: `/health`
- Database might still be initializing

**Build Failures:**
- Node.js dependencies missing
- PHP extensions not installed
- Composer install failed

### 2. Application Not Loading

**Check Health Endpoint:**
```
curl https://your-app.onrender.com/health
```

Should return:
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2024-01-01T00:00:00.000000Z"
}
```

**If health check fails:**
1. Database connection issue
2. Laravel configuration problem
3. Missing environment variables

### 3. Database Issues

**Connection Timeout:**
- Database might still be starting up
- Wait 2-3 minutes after first deploy

**Migration Failures:**
```bash
# In Render Shell
php artisan migrate:status
php artisan migrate --force
```

**Permission Issues:**
```bash
# In Render Shell  
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### 4. Next.js Not Working

**Check if Next.js is running:**
```bash
# In Render Shell
ps aux | grep node
```

**Restart services:**
```bash
# In Render Shell
supervisorctl restart nextjs
supervisorctl restart nginx
```

### 5. Static Assets Not Loading

**Check nginx configuration:**
```bash
# In Render Shell
nginx -t
tail -f /var/log/nginx/error.log
```

**Clear caches:**
```bash
# In Render Shell
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Step-by-Step Debugging

### 1. Check Service Status
In Render Shell:
```bash
supervisorctl status
```

Should show:
- nginx: RUNNING
- php-fpm: RUNNING  
- nextjs: RUNNING

### 2. Check Logs
```bash
# Application logs
tail -f storage/logs/laravel.log

# Nginx logs
tail -f /var/log/nginx/error.log

# PHP-FPM logs
tail -f /var/log/php8.2-fpm.log
```

### 3. Test Components Individually

**Test Laravel:**
```bash
curl http://localhost/health
```

**Test Next.js:**
```bash
curl http://localhost:3000
```

**Test nginx:**
```bash
curl http://localhost
```

### 4. Database Connection Test
```bash
php artisan tinker
> DB::connection()->getPdo();
> DB::table('migrations')->count();
```

## Environment Variables Checklist

Ensure these are set in Render:
- ✅ APP_KEY (generated)
- ✅ APP_ENV=production
- ✅ APP_DEBUG=false
- ✅ DB_* (auto-configured)
- ✅ APP_URL (your render URL)

## Manual Deployment Steps

If automatic deployment fails, try manual steps:

### 1. Redeploy Service
- Go to Render Dashboard
- Click "Manual Deploy" → "Deploy latest commit"

### 2. Force Rebuild
- Click "Manual Deploy" → "Clear build cache & deploy"

### 3. Check Resource Usage
- Ensure you're not hitting memory limits
- Free tier has limited resources

## Getting Help

### 1. Render Support
- Check Render docs: https://render.com/docs
- Community forum: https://community.render.com

### 2. Application Logs
Provide these when asking for help:
- Build logs from Render
- Application logs: `storage/logs/laravel.log`
- Health check response
- Error message screenshots

### 3. Local Testing
Test the same Docker setup locally:
```bash
# Build Docker image
docker build -t handei-website .

# Run container
docker run -p 8080:80 -e APP_KEY=your-key handei-website

# Test health
curl http://localhost:8080/health
```

## Common Error Messages

### "Connection refused"
- Service not started properly
- Port configuration issue
- Check supervisor status

### "Database connection failed"
- Database still starting up
- Wrong credentials
- Network connectivity issue

### "Permission denied"
- File permission issues
- Run chmod/chown commands

### "404 Not Found"
- Nginx routing issue
- Static files not built
- Laravel routes not cached

### "500 Internal Server Error"
- PHP error in application
- Check Laravel logs
- Missing environment variables

## Performance Tips

### 1. Optimize Docker Build
- Use multi-stage builds (already implemented)
- Minimize layer count
- Use .dockerignore

### 2. Reduce Memory Usage
- Disable debug mode
- Use file-based cache/sessions
- Optimize composer autoload

### 3. Speed Up Cold Starts
- Use health checks
- Keep services warm
- Minimize startup time

## Success Indicators

Your deployment is successful when:

1. ✅ Health check returns 200 OK
2. ✅ Homepage loads at your domain
3. ✅ Admin panel accessible at /admin
4. ✅ API endpoints work at /api/*
5. ✅ Database migrations completed
6. ✅ Static assets load properly
7. ✅ Next.js pages render correctly

## Contact

If you continue having issues:
- Email: info@handeizimbabwe.com  
- GitHub Issues: https://github.com/TapiwanasheTrevor/handei-website/issues