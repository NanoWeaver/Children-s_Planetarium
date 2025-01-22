let accordions = document.querySelectorAll('.accordion');

for (const accordion of accordions) {
    accordion.addEventListener('click', () => {
        const content = accordion.querySelector('.accordion__content');
        const indicator = accordion.querySelector('.accordion__indicator');
        
        if (!accordion.classList.contains('accordion--visible')) {
            accordion.classList.add('accordion--visible');
            
            // Установка высоты контента
            content.style.height = content.scrollHeight + 'px'; // Поставим высоту контента

            // Вращение индикатора
            indicator.classList.add('accordion--rotation');
        } else {
            // Скрытие аккордеона
            content.style.height = 0; // Возврат к нулевой высоте
            content.style.paddingBottom = 0; // Сброс нижнего паддинга, ибо если этого не сделать, то закрывется не до конца (не знаю как сделать иначе)
            setTimeout(() => {// Возвращаем скрытие для переполнения с задержкой ,чтоб анимация закрытия работала
                accordion.classList.remove('accordion--visible');
            }, 300)
            
            // Вращение индикатора
            indicator.classList.remove('accordion--rotation');
        }
    });
}