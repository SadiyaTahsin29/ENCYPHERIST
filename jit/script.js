// Responsive navigation toggle
const navToggle = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-nav');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
