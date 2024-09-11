const btnsmenu = document.getElementById('menu-btn');
const menunav = document.getElementById('navbar');

btnsmenu.addEventListener('click', () => {
    menunav.classList.toggle('active');
    btnsmenu.classList.toggle('active');
})
