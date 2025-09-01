#!/bin/bash

# Luisa Portfolio Deployment Script
# This script prepares the site for deployment to Netlify

set -e  # Exit on any error

echo "🚀 Building Luisa's Portfolio for deployment..."

# Clean any previous builds
if [ -d "public" ]; then
    echo "🧹 Cleaning previous build..."
    rm -rf public
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build CSS with Tailwind
echo "🎨 Building CSS with Tailwind..."
npm run build:css

# Build Hugo site with minification
echo "🏗️  Building Hugo site..."
hugo --minify --environment production

# Display build information
echo "✅ Build completed successfully!"
echo ""
echo "📊 Build Summary:"
echo "   Site URL: https://luisabressan.netlify.app/"
echo "   Build directory: $(pwd)/public"
echo "   Files generated: $(find public -type f | wc -l)"
echo ""
echo "🌐 Ready for deployment to Netlify!"
echo ""
echo "📋 Next steps:"
echo "   1. Push this repository to GitHub/GitLab"
echo "   2. Connect your repository to Netlify"
echo "   3. Set site name to: luisabressan"
echo "   4. Deploy automatically!"