// Navigation Links Configuration
const NAVIGATION_LINKS = {
    home: '/index.html',
    hangar: '/hangar-information.html',
    contact: '/contact-us.html'
};

// Function to update all navigation links
function updateNavigationLinks() {
    // Update all home links
    document.querySelectorAll('[data-nav="home"]').forEach(link => {
        link.href = NAVIGATION_LINKS.home;
    });

    // Update all hangar links
    document.querySelectorAll('[data-nav="hangar"]').forEach(link => {
        link.href = NAVIGATION_LINKS.hangar;
    });

    // Update all contact links
    document.querySelectorAll('[data-nav="contact"]').forEach(link => {
        link.href = NAVIGATION_LINKS.contact;
    });
}

// Initialize navigation when the DOM is loaded
document.addEventListener('DOMContentLoaded', updateNavigationLinks); 