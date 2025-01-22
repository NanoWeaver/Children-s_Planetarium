let accordions = document.querySelectorAll('.accordion');

for (const accordion of accordions) { // Обратобтка клика для раскрытия аккордиона и анимации крестика
    accordion.addEventListener('click', () => {
        if(!accordion.classList.contains('accordion--visible')) {
            accordion.classList.add('accordion--visible')
            let indicator = accordion.querySelector('.accordion__indicator')
            indicator.classList.add('accordion--rotation')
        } else {
            accordion.classList.remove('accordion--visible')
            let indicator = accordion.querySelector('.accordion__indicator')
            indicator.classList.remove('accordion--rotation')
        }
        
    })
}