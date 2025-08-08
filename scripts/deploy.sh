#!/bin/bash

echo "🚀 Deploying Handei Zimbabwe Website to Render..."

# Check if render.yaml exists
if [ ! -f "render.yaml" ]; then
    echo "❌ render.yaml not found!"
    exit 1
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  Creating .env from .env.example"
    cp .env.example .env
fi

# Install dependencies
echo "📦 Installing dependencies..."
composer install --no-dev --optimize-autoloader --no-interaction
npm ci --only=production

# Build Laravel assets
echo "🔨 Building Laravel assets..."
npm run build

# Build Next.js app
echo "⚛️  Building Next.js app..."
cd resources/js/landing
npm ci --only=production
npm run build
cd ../../../

echo "✅ Build complete! Ready for Render deployment."
echo ""
echo "📋 Next steps:"
echo "1. Push to GitHub: git add . && git commit -m 'Fix deployment' && git push"
echo "2. Go to Render Dashboard and redeploy"
echo "3. Check logs for any issues"
echo ""
echo "🔗 Useful links:"
echo "- Repository: https://github.com/TapiwanasheTrevor/handei-website"
echo "- Render Dashboard: https://dashboard.render.com"
echo "- Health Check: https://handei-website.onrender.com/health"