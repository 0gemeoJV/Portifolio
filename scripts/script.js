document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.list-menu');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const listMenu = document.querySelector('.list-menu');
const menuLinks = document.querySelectorAll('.list-menu a');
const menuButton = document.querySelector('.menu-button'); 

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        listMenu.classList.remove('active');
        
        if (menuButton) {
            menuButton.classList.remove('active');
        }
    });
});