// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Smooth scroll for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
