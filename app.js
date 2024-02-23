const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const menuItems = document.querySelectorAll('.navbar__item a');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Cerrar el menú móvil
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});