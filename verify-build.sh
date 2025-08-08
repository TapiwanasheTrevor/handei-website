#!/bin/bash

echo "🔍 Verifying build requirements..."

# Check if required files exist
echo "✅ Checking required files..."
files=(
    "Dockerfile"
    "composer.json"
    "composer.lock"
    "package.json"
    "render.yaml"
    "docker/nginx/site.conf"
    "docker/supervisor/supervisord.conf"
    "resources/js/landing/package.json"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file exists"
    else
        echo "  ❌ $file missing"
        exit 1
    fi
done

# Check composer.json PHP version
echo "✅ Checking PHP version requirement..."
php_version=$(grep '"php"' composer.json | grep -o '\^[0-9.]*')
echo "  PHP requirement: $php_version"

# Check if intl extension is in Dockerfile
echo "✅ Checking Dockerfile for intl extension..."
if grep -q "intl" Dockerfile; then
    echo "  ✓ intl extension found in Dockerfile"
else
    echo "  ❌ intl extension not found in Dockerfile"
    exit 1
fi

# Check if health endpoint exists
echo "✅ Checking health endpoint..."
if grep -q "/health" routes/web.php; then
    echo "  ✓ Health endpoint found"
else
    echo "  ❌ Health endpoint not found"
    exit 1
fi

echo ""
echo "🎉 All checks passed! Ready for deployment."
echo ""
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Fix PHP extensions and dependencies'"
echo "3. git push origin main"
echo "4. Redeploy on Render"