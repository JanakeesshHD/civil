// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#') && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple contact form submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset();
  });
}

// Scroll to top button functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create scroll to top button if it doesn't exist
  if (!document.querySelector('.scroll-top')) {
    const scrollTopBtn = document.createElement('a');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '&#8679;'; // Up arrow character
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.setAttribute('title', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);
  }

  const scrollTopButton = document.querySelector('.scroll-top');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopButton.classList.add('visible');
    } else {
      scrollTopButton.classList.remove('visible');
    }
  });
  
  // Scroll to top when button is clicked
  scrollTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});