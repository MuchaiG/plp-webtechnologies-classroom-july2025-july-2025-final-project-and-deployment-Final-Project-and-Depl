// Mobile menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Example: Contact form validation (contact.html)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;

      if (!email || !message) {
        alert('Please fill out all fields.');
        e.preventDefault();
      }
    });
  }
});
