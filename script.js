// Make the navbar responsive and add toggle for mobile

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".navbar-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  // Highlight the current page link
  function setActiveNavLink() {
    const links = document.querySelectorAll(".navbar-links a");
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
    links.forEach((link) => {
      const href = link.getAttribute("href").replace(/^\/+|\/+$/g, "");
      if ((href === "" && path === "") || (href && path.startsWith(href))) {
        link.classList.add("active");
      }
    });
  }

  setActiveNavLink();
});
