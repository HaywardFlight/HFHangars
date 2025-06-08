// Script to replace hardcoded URLs with variables
const fs = require('fs');
const path = require('path');

// Configuration for URL replacements
const urlReplacements = {
    // Base URLs
    'http://localhost:8000': '${CONFIG.baseUrl}',
    'https://localhost:8000': '${CONFIG.baseUrl}',
    
    // Wix resources
    'https://www.wix.com/favicon.ico': '${CONFIG.resources.wixFavicon}',
    'https://static.wixstatic.com/': '${CONFIG.resources.wixBase}',
    'https://static.parastorage.com/services/wix-thunderbolt/dist/': '${CONFIG.resources.wixScripts}',
    
    // CDN resources
    'https://browser.sentry-cdn.com/7.120.3/': '${CONFIG.resources.sentry}',
    'https://static.parastorage.com/unpkg/core-js-bundle@3.2.1/minified.js': '${CONFIG.resources.coreJs}',
    'https://static.parastorage.com/unpkg/focus-within-polyfill@5.0.9/dist/focus-within-polyfill.js': '${CONFIG.resources.focusPolyfill}',
    
    // Navigation links
    'href="index.html"': 'href="${CONFIG.nav.home}"',
    'href="hangar-information.html"': 'href="${CONFIG.nav.hangarInfo}"',
    'href="contact-us.html"': 'href="${CONFIG.nav.contact}"'
};

// Function to process a file
function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Replace URLs
        for (const [oldUrl, newUrl] of Object.entries(urlReplacements)) {
            if (content.includes(oldUrl)) {
                content = content.replace(new RegExp(oldUrl, 'g'), newUrl);
                modified = true;
            }
        }

        // Add config.js script if not present
        if (!content.includes('config.js')) {
            content = content.replace('</head>', '<script src="config.js"></script>\n</head>');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        } else {
            console.log(`No changes needed in ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

// Process all HTML files in the current directory
const htmlFiles = fs.readdirSync('.')
    .filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    processFile(file);
}); 