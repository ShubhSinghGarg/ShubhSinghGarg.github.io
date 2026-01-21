#!/bin/bash

# Create public directory structure if it doesn't exist
mkdir -p public/css
mkdir -p public/img
mkdir -p public/js
mkdir -p public/videos
mkdir -p public/fonts
mkdir -p public/css/fonts

# Copy CSS files
echo "Copying CSS files..."
cp ../css/*.css public/css/
cp -r ../css/fonts/* public/css/fonts/

# Copy image files
echo "Copying image files..."
cp -r ../img/* public/img/

# Copy JavaScript files
echo "Copying JavaScript files..."
cp -r ../js/* public/js/

# Copy video files
echo "Copying video files..."
cp -r ../videos/* public/videos/

# Copy font files
echo "Copying font files..."
cp -r ../fonts/* public/fonts/

echo "All static assets copied successfully!"
