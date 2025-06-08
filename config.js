// Global configuration for the website
const CONFIG = {
    // Base URLs
    baseUrl: window.location.origin,
    // Navigation Links
    nav: {
        home: "index.html",
        hangarInfo: "hangar-information.html",
        contact: "contact-us.html"
    },
    // Resource URLs
    resources: {
        // Wix resources
        wixBase: "https://static.wixstatic.com/",
        wixScripts: "https://static.parastorage.com/services/wix-thunderbolt/dist/",
        wixFonts: "https://static.wixstatic.com/media/",
        wixImages: "https://static.wixstatic.com/media/",
        wixFavicon: "https://www.wix.com/favicon.ico",
        // External resources
        googleMaps: "https://maps.google.com/maps?q=32.1234,-117.1234&t=m&z=15&output=embed&iwloc=near",
        // Social media
        facebook: "https://www.facebook.com/yourpage",
        twitter: "https://twitter.com/yourhandle",
        instagram: "https://www.instagram.com/yourhandle",
        // CDN resources
        sentry: "https://browser.sentry-cdn.com/7.120.3/",
        coreJs: "https://static.parastorage.com/unpkg/core-js-bundle@3.2.1/minified.js",
        focusPolyfill: "https://static.parastorage.com/unpkg/focus-within-polyfill@5.0.9/dist/focus-within-polyfill.js"
    }
};

// Function to update all links on the page
function updatePageLinks() {
    // Update navigation links with data-link attribute
    document.querySelectorAll('a[data-link]').forEach(link => {
        const linkType = link.getAttribute('data-link');
        if (CONFIG.nav[linkType]) {
            link.href = CONFIG.nav[linkType];
        }
    });

    // Update navigation links with direct href attributes
    document.querySelectorAll('a[href*="${CONFIG.baseUrl}"]').forEach(link => {
        const href = link.getAttribute('href');
        const page = href.split('/').pop();
        if (page === 'index.html' || page === '') {
            link.href = CONFIG.nav.home;
        } else if (page === 'hangar-information.html') {
            link.href = CONFIG.nav.hangarInfo;
        } else if (page === 'contact-us.html') {
            link.href = CONFIG.nav.contact;
        }
    });

    // Update resource links
    document.querySelectorAll('link[data-resource]').forEach(link => {
        const resourceType = link.getAttribute('data-resource');
        if (CONFIG.resources[resourceType]) {
            link.href = CONFIG.resources[resourceType];
        }
    });

    // Update script sources
    document.querySelectorAll('script[data-resource]').forEach(script => {
        const resourceType = script.getAttribute('data-resource');
        if (CONFIG.resources[resourceType]) {
            script.src = CONFIG.resources[resourceType];
        }
    });

    // Update image sources
    document.querySelectorAll('img[data-resource]').forEach(img => {
        const resourceType = img.getAttribute('data-resource');
        if (CONFIG.resources[resourceType]) {
            img.src = CONFIG.resources[resourceType];
        }
    });

    // Update favicon links
    document.querySelectorAll('link[rel*="icon"]').forEach(link => {
        link.href = CONFIG.resources.wixFavicon;
    });

    // Update canonical and og:url meta tags
    document.querySelectorAll('link[rel="canonical"], meta[property="og:url"]').forEach(tag => {
        tag.content = `${CONFIG.baseUrl}/${window.location.pathname.split('/').pop()}`;
    });
}

// Function to update Google Maps iframe
function updateGoogleMaps() {
    const mapIframe = document.querySelector('iframe[data-map]');
    if (mapIframe && CONFIG.resources.googleMaps) {
        mapIframe.src = CONFIG.resources.googleMaps;
    }
}

// Function to initialize all URL replacements
function initializeUrlReplacements() {
    updatePageLinks();
    updateGoogleMaps();
}

// Call the functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeUrlReplacements); 