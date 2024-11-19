
const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.getElementById('mobile-menu');


burgerIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('show-menu');
});


mobileMenu.classList.toggle('show-menu');
