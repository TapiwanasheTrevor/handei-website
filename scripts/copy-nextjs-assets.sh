#!/bin/bash

# Script to copy Next.js static assets to Laravel public directory
# This ensures CSS and JS files are accessible from the web root

echo "Copying Next.js static assets to public directory..."

# Remove conflicting _next directory from Next.js public folder first
if [ -d "resources/js/landing/public/_next" ]; then
    echo "Removing conflicting _next directory from Next.js public folder..."
    rm -rf resources/js/landing/public/_next
fi

# Remove old _next directory from Laravel public if it exists
if [ -d "public/_next" ]; then
    echo "Removing old _next directory..."
    rm -rf public/_next
fi

# Copy the new _next directory from Next.js export
if [ -d "resources/js/landing/out/_next" ]; then
    echo "Copying _next directory from Next.js export..."
    cp -r resources/js/landing/out/_next public/
    echo "Assets copied successfully!"
else
    echo "Error: Next.js export directory not found at resources/js/landing/out/_next"
    echo "Please run 'npm run export' in resources/js/landing/ first"
    exit 1
fi

# Copy HTML files to ensure correct asset references
if [ -d "resources/js/landing/out" ] && [ -d "public/app" ]; then
    echo "Copying HTML files to public/app directory..."
    cp resources/js/landing/out/*.html public/app/
    echo "HTML files copied successfully!"
fi

# Set proper permissions
chmod -R 755 public/_next
echo "Permissions set for static assets"

echo "Done! Next.js assets are now available in public/_next/"