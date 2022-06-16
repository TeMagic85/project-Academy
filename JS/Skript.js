const menu = document.querySelector('.menu__list');
const burger = document.querySelector('.header__burger');
    burger.addEventListener('click', function() {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('active');
});

const btnNext = document.querySelector('.slider-button-next .slider__arrow');
const btnPrev = document.querySelector('.slider-button-prev .slider__arrow');
const imagesArr = document.querySelectorAll('.vsbl');
const inputs = document.querySelectorAll('.radio_input');
const containerDots = document.querySelector('.container-dots');
const arrImages = [];
const arrInputs = [];
for (let i=0; i<imagesArr.length; i++) {
    arrImages.push(imagesArr[i]);
    arrInputs.push(inputs[i]);
}

btnNext.addEventListener('click', ()=>{
    let firstImage = document.querySelector('.slider img');
    let image = document.querySelector('.-active');
    image.nextElementSibling ? image.nextElementSibling.classList.add('-active') : firstImage.classList.add('-active');
    image.classList.remove('-active');
    checked(arrImages.findIndex(item => item.className=='vsbl -active'));
});

btnPrev.addEventListener('click', ()=>{
    let image = document.querySelector('.-active');
    let slider = document.querySelector('.slider');
    image.previousElementSibling ? image.previousElementSibling.classList.add('-active') : slider.lastElementChild.classList.add('-active');
    image.classList.remove('-active');
    checked(arrImages.findIndex(item => item.className=='vsbl -active'));
});

function checked(index) {
    for (item of inputs) {
        item.removeAttribute("checked");
    }
    inputs[index].setAttribute("checked", "true");
}

containerDots.addEventListener('click', (e)=>{
    e.preventDefault();
    checked(arrInputs.findIndex(item => item == e.target.previousElementSibling));
    setImage(arrInputs.findIndex(item => item == e.target.previousElementSibling));
});

function setImage(index) {
    for (item of imagesArr) {
        item.classList.remove('-active');
    }
    imagesArr[index].classList.add('-active');
}

let offset =0;
const line = document.querySelector('.games-section__cards');
const availableScreenWidth = document.documentElement.clientWidth;
document.querySelector('.games-section-arrow').addEventListener('click', function() {
    offset += 320;
    if (offset > 2560) {
        offset = 0;
    };
    line.style.left = -offset + 'px';
});

function list (menu) {
let parentMenu = menu.parentNode;
parentMenu.classList.toggle('-down');
}