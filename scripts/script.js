document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.list-menu');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});