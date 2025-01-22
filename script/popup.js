let open = document.querySelector('.page-header__button');
let close = document.querySelector('.popup__close');
let send = document.querySelector('.popup__button');
let popup = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');

open.addEventListener('click', () => { // Обработка клика на кнопку Заказать
    popup.classList.add('popup--open');
    overlay.classList.add('popup--open');
})

close.addEventListener('click', () => { // Обработка клика на крестик закрытия
    popup.classList.remove('popup--open');
    overlay.classList.remove('popup--open');
})

send.addEventListener('click', () => { // Обработка клика на кнопку Отправить 
    let header = popup.querySelector('.popup__heading');
    let subtitle = popup.querySelector('.popup__subtitle');
    let inputs =document.querySelectorAll('.popup__input')
    //Я решил не делать второе окно для показа успешной отправки, мне стало интересно сгенерировать
    //Добавляем SVG внутрь модального окна с проверкой ,чтоб избежать спама картинками
    if (!document.getElementById('SVG')) {
        console.log(document.getElementById('SVG'))
        let svg = creatingSvg();
        svg.id = 'SVG';
        popup.prepend(svg);
    }

    //Дальше переделываем содержимое окна и стили
    popup.style.padding = 60 + 'px ' + 80 + 'px';
    for (const input of inputs) {
        input.remove();
    };
    // Меняем заголовок
    header.textContent = 'Сообщение успешно отправлено!';
    header.style.marginBottom = 10 + 'px';
    // Меняем подзаголовок
    subtitle.style.marginBottom = 30 + 'px';
    subtitle.textContent = 'Мы обязательно свяжемся с вами в ближайшее время и подробно ответим на ваш вопрос, будьте на связи!';
    // Меняем кнопку
    send.style.padding = 9 + 'px ' + 35.39 + 'px ' + 8 + 'px ' + 34.61 + 'px';
    send.textContent = 'ОК';

    send.addEventListener('click', () => {
        popup.classList.remove('popup--open');
        overlay.classList.remove('popup--open');
    })
})

function creatingSvg() { // Создание SVG
    //Создаем само SVG
    let successSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    successSVG.setAttribute('width', '64');
    successSVG.setAttribute('height', '60');
    successSVG.setAttribute('viewBox', '0 0 64 60');
    successSVG.setAttribute('fill', 'none');

    // Создаем круг
    let circleSVG = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleSVG.setAttribute('opacity', '0.1');
    circleSVG.setAttribute('cx', '32'); // Убедитесь, что координаты находятся в пределах viewBox
    circleSVG.setAttribute('cy', '30');
    circleSVG.setAttribute('r', '28');
    circleSVG.setAttribute('stroke', '#1C1C1C');
    circleSVG.setAttribute('stroke-width', '4');

    // Создаем галочку
    let pathSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathSVG.setAttribute('d', 'M15 28.0769L29.6546 44L60 9');
    pathSVG.setAttribute('stroke', '#1DC04B');
    pathSVG.setAttribute('stroke-width', '8');
    pathSVG.setAttribute('stroke-linecap', 'round');
    pathSVG.setAttribute('stroke-linejoin', 'round');

    //Грузим фигуры внутрь SVG
    successSVG.appendChild(circleSVG);
    successSVG.appendChild(pathSVG);
    successSVG.style.marginBottom = 20 + 'px';
    successSVG.classList.add('successSVG');

    return successSVG
}