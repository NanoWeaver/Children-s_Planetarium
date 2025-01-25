const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.gallery__swiper-pagination',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
    },
});
const paginationCurrent = document.querySelector('.swiper-pagination-current');
const paginationTotal = document.querySelector('.swiper-pagination-total');
const buttonNext = document.querySelector('.gallery__button--next')
const buttonPrev = document.querySelector('.gallery__button--prev')
let cooldown = false

// Это для реализации количества слайдов в галлереи ,что было 01 ,а не просто 1

function paginationTransform() { // Добавление нуля перед числом 
    if (paginationTotal.textContent < 10 && paginationTotal.textContent[0] != 0) {
        paginationTotal.textContent = '0' + paginationTotal.textContent;
    }
    if (paginationCurrent.textContent < 10  && paginationCurrent.textContent[0] != 0) {
        paginationCurrent.textContent = '0' + paginationCurrent.textContent;
    }
}

window.addEventListener('load', function () {
    setTimeout(function () {
        paginationTransform(buttonNext)
    } , 0)
})

buttonNext.addEventListener('click' , () => {
    paginationTransform(buttonNext)
})

buttonPrev.addEventListener('click' , () => {
    paginationTransform(buttonPrev)
})