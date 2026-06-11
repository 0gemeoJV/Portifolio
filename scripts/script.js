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
    
    // Se a rolagem passar de 50px, adiciona a classe; se voltar ao topo, remove.
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});