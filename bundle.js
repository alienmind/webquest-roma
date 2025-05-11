#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mime = require('mime-types'); // npm install mime-types

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf-8');

// Base path for images
const imgPath = 'img/';

// Find all image references
const imgRegex = /src=["'](img\/[^"']+)["']/g;
let match;

// Replace each image with base64 encoded data
while ((match = imgRegex.exec(html)) !== null) {
  const imgFile = match[1];
  const imgFullPath = path.join(__dirname, imgFile);
  
  if (fs.existsSync(imgFullPath)) {
    const imgData = fs.readFileSync(imgFullPath);
    const base64data = imgData.toString('base64');
    const mimeType = mime.lookup(imgFullPath) || 'image/png';
    const dataURI = `data:${mimeType};base64,${base64data}`;
    
    // Replace the image reference with data URI
    html = html.replace(new RegExp(`src=["']${imgFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g'), 
                       `src="${dataURI}"`);
  }
}

// Find and replace CDN resources
const cdnRegex = /<link rel="stylesheet" href="https:\/\/cdnjs.cloudflare.com[^>]+>/g;
while ((match = cdnRegex.exec(html)) !== null) {
  const linkTag = match[0];
  const hrefMatch = /href="([^"]+)"/.exec(linkTag);
  if (hrefMatch) {
    // Download and inline the CSS
    // ... code to fetch and inline ...
  }
}

// Similar approach for script tags
// ... code to handle scripts ...

// Write the self-contained HTML
fs.writeFileSync('webquest-standalone.html', html);
