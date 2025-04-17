const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => { 
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
});