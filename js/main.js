let hmenu = document.querySelector('.menu-hamburguesa');
let responsiveMenu = document.querySelector('.responsiveNav');
hmenu.addEventListener('click', () => {
    responsiveMenu.classList.toggle('active');
})