let menu = document.querySelector('.menu__list');
let burger = document.querySelector('.header__burger');
let navi = document.querySelector('.navigation__search');
let Elinput = document.querySelector('.navigation-input');
let Elbutton = document.querySelector('.search-icon');
    burger.addEventListener('click', function() {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('active');
        navi.classList.toggle('navigation_active');
        Elinput.classList.toggle('input_active');
        Elbutton.classList.toggle('icon_active');
});


let images = document.querySelectorAll('.wrapper__slider img');
let inptCheck =document.getElementsByClassName('radio_input');
let current = 0;
function slider() {
    for (let i=0; i<images.length; i++) {
        images[i].classList.remove('-active');
        inptCheck[i].removeAttribute("checked");
    }
    images[current].classList.add('-active');
    inptCheck[current].setAttribute("checked", "true");
};


document.querySelector('.slider-button-next .slider__arrow').onclick = function () {
    if (current+1 == images.length) {
        current=0;
    }
    else {
        current++;
    }
    slider();
};
document.querySelector('.slider-button-prev .slider__arrow').onclick = function () {
    if (current-1 == -1) {
        current = images.length -1;
    }
    else {
        current--;
    }
    slider();
};

let offset =0;
const line = document.querySelector('.games-section__cards');
document.querySelector('.games-section-arrow').addEventListener('click', function() {
    offset = offset +320;
    if (offset > 2560) {
        offset = 0;
    }
    line.style.left = -offset + 'px';
});