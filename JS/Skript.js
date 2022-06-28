const menu = document.querySelector('.menu__list');
const burger = document.querySelector('.header__burger');
    burger.addEventListener('click', function() {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('active');
});
//----------------- OOP Sliders CLASS ES6 -------------------------------
window.onload = function() {
    const componentsMainSlider = {
        btnNext: document.querySelector('.slider-button-next'),
        btnPrev: document.querySelector('.slider-button-prev'),
        images: document.querySelectorAll('.vsbl'),
        inputs: document.querySelectorAll('.radio_input'),
        containerDots: document.querySelector('.container-dots')
    };
    const sectionGamesSliderComponents = {
        slideArrow: document.querySelector('.games-section-arrow'),
        cards: document.querySelectorAll('.games-section__cards-item'),
        sliderLine: document.querySelector('.games-section__cards'),
    };
    class MainSlider {
        constructor(data) {
            this.btnNext = data.btnNext;
            this.btnPrev = data.btnPrev;
            this.images = data.images;
            this.inputs = data.inputs;
            this.containerDots = data.containerDots;
            this.counter = 0;
            this.btnNext.addEventListener('click', this.nextImg.bind(this));
            this.btnPrev.addEventListener('click', this.prevImg.bind(this));
            this.containerDots.addEventListener('click', this.dotsSlide.bind(this));
        };
        nextImg() {
            this.counter++;
            this.counter===this.images.length ? this.counter=0 : this.counter;
            this.setImage();
        };
        prevImg() {
            this.counter--;
            this.counter < 0 ? this.counter=this.images.length-1 : this.counter;
            this.setImage();
        };
        setImage() {
            for (let i=0; i<this.images.length; i++) {
                this.images[i].classList.remove('-active');
                this.inputs[i].removeAttribute("checked");
            }
            this.images[this.counter].classList.add('-active');
            this.inputs[this.counter].setAttribute("checked", "true");
        }
        dotsSlide(e) {
            e.preventDefault();
            let arr = Array.from(this.inputs);
            e.target.className =='radio_label' ? this.setImage(this.counter = arr.findIndex(item => item === e.target.previousElementSibling)) : null;
        }
    };

    class GamesSectionSlider {
        constructor(data) {
            this.slideArrow = data.slideArrow;
            this.cards = data.cards;
            this.sliderLine = data.sliderLine;
            this.width = this.cards[0].offsetWidth + parseFloat(getComputedStyle(this.cards[0])['margin-left']) + parseFloat(getComputedStyle(this.cards[0])['margin-right']);
            this.slideArrow.addEventListener('click', this.goSlide.bind(this));
            this.count = 1;
        };
        goSlide() {
            if (this.sliderLine.getBoundingClientRect().x + this.sliderLine.offsetWidth < document.documentElement.clientWidth) {
                this.count = 0;
            }
            if (this.sliderLine.offsetWidth > document.documentElement.clientWidth) {
                this.sliderLine.style.transform = `translateX(-${this.width*this.count}px)`;
                this.count++;
            }
        };
    };
    new MainSlider(componentsMainSlider);
    new GamesSectionSlider(sectionGamesSliderComponents);
};
//---------- end OOP Sliders CLASS ES6 ---------------------

function list (menu) {
let parentMenu = menu.parentNode;
parentMenu.classList.toggle('-down');
}