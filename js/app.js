

const counters = document.querySelectorAll('.skills__item-counter');
const lines = document.querySelectorAll('.skills__item-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const humburger = document.querySelector('.burger-box');
const menu = document.querySelector('.header__menu');
const closeElem = document.querySelector('.burger-box');

humburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const links = document.querySelectorAll('.header__menu-link');
const men = document.querySelector('.header__menu');

// links.forEach(link => {
//     link.addEventListener('click', () => {
//         men.classList.toggle('lock');
//     });
// });