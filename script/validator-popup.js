let inputTelPopup = document.querySelector('.popup__input--valid-tel');
let inputTextPopup = document.querySelector('.popup__input--valid-text')
let buttonPopup = document.querySelector('.popup__button');

function validationTelPopupCheck(input) {
    if (input.value) { // Проверям есть ли вообще текст в инпуте
        let valid = true;

        //Если инпут не пуст, то перебираем его 

        for (let i = 0; i < input.value.length; i++) { 
            if (input.value[i] === '_') { // Ищём в строке _
                valid = false;
            };
        };

        if (!valid) { // Если нашли _
            input.classList.remove('popup__input--valid');
            input.parentNode.classList.remove('popup__input-shell--valid')

            input.classList.add('popup__input--invalid');
            input.parentNode.classList.add('popup__input-shell--invalid')

            console.log('Поле не заполненно до конца');
            console.log(input.value)
        } else { // Хороший вариант ,когда всё ок
            input.classList.remove('popup__input--invalid');
            input.parentNode.classList.remove('popup__input-shell--invalid')

            input.classList.add('popup__input--valid');
            input.parentNode.classList.add('popup__input-shell--valid')

            return true
        }

    } else { // Если инпут пуст, то выводим ошибку с рекомендацией
        input.classList.remove('popup__input--valid');
        input.parentNode.classList.remove('popup__input-shell--valid')

        input.classList.add('popup__input--invalid');
        input.parentNode.classList.add('popup__input-shell--invalid')

        console.log('Поле обязательно для заполнения');
        console.log(input.value)
    }
}

function validationTextPopupCheck(input) {
    if (input.value) { // Проверям есть ли вообще текст в инпуте
        let valid = true;

        //Если инпут не пуст, то перебираем его 

        for (let i = 0; i < input.value.length; i++) { 
            if (!(/\p{L}/u.test(input.value[i]))) { // Используем регулярное выражение для проверки символа
                valid = false;
            };
        };

        if (!valid) { // Если нашли не букву , то ошибка
            input.classList.remove('popup__input--valid');
            input.parentNode.classList.remove('popup__input-shell--valid')
            
            input.classList.add('popup__input--invalid');
            input.parentNode.classList.add('popup__input-shell--invalid')

            console.log('Разрешены только буквенные символы');
            console.log(input.value)
        } else { // Хороший вариант ,когда всё ок
            input.classList.remove('popup__input--invalid');
            input.parentNode.classList.remove('popup__input-shell--invalid')

            input.classList.add('popup__input--valid');
            input.parentNode.classList.add('popup__input-shell--valid')

            return true
        }

    } else { // Если инпут пуст, то выводим ошибку с рекомендацией
        input.classList.remove('popup__input--valid');
        input.parentNode.classList.remove('popup__input-shell--valid')

        input.classList.add('popup__input--invalid');
        input.parentNode.classList.add('popup__input-shell--invalid')

        console.log('Поле обязательно для заполнения');
        console.log(input.value)
    }
}

function checkingButtonPopupLock(button, inputText, inputTel) { // Функция блокировки кнопки пока нужные инпуты не валидны
    if (validationTextPopupCheck(inputText) === true && validationTelPopupCheck(inputTel) === true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

inputTelPopup.addEventListener('blur', () => { // Вешаем обработку снятия фокуса с инпута
    validationTelPopupCheck(inputTelPopup);
    checkingButtonPopupLock(buttonPopup, inputTextPopup, inputTelPopup);
})

inputTextPopup.addEventListener('blur', () => { // Вешаем обработку снятия фокуса с инпута
    validationTextPopupCheck(inputTextPopup);
    checkingButtonPopupLock(buttonPopup, inputTextPopup, inputTelPopup);
}) 

buttonPopup.addEventListener('click', () => { // Убираем галочки после клика на кнопку
    let inputShells = document.querySelectorAll('.popup__input-shell');

    for (const inputShell of inputShells) {
        inputShell.classList.remove('popup__input-shell--valid');
    }
})