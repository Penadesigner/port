const btnsmenu = document.getElementById('menu-btn');
const menunav = document.getElementById('navigation');

btnsmenu.addEventListener('click', () => {
    btnsmenu.classList.toggle('active')
    menunav.classList.toggle('active')
})
