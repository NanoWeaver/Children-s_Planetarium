// Я не сообразил куда выводить подсказки по заполнению ,по макету они должны быть под инпутом ,но места там нет. Будто макет сам себе противоречит
// Да и я не придумал ,как реализовать это без простыни кода.
let inputText = document.querySelector('.contacts__input--valid-text')
let inputEmail = document.querySelector('.contacts__input--valid-email');
let buttonContacts = document.querySelector('.contacts__form-button');

function validationTextCheck(input) {
    if (input.value) { // Проверям есть ли вообще текст в инпуте
        let valid = true;

        //Если инпут не пуст, то перебираем его 

        for (let i = 0; i < input.value.length; i++) { 
            if (!(/\p{L}/u.test(input.value[i]))) { // Используем регулярное выражение для проверки символа
                valid = false;
            };
        };

        if (!valid) { // Если нашли не букву , то ошибка
            input.classList.remove('contacts__input--valid');
            input.parentNode.classList.remove('contacts__input-shell--valid')
            
            input.classList.add('contacts__input--invalid');
            input.parentNode.classList.add('contacts__input-shell--invalid')

            console.log('Разрешены только буквенные символы');
            console.log(input.value)
        } else { // Хороший вариант ,когда всё ок
            input.classList.remove('contacts__input--invalid');
            input.parentNode.classList.remove('contacts__input-shell--invalid')

            input.classList.add('contacts__input--valid');
            input.parentNode.classList.add('contacts__input-shell--valid')

            return true
        }

    } else { // Если инпут пуст, то выводим ошибку с рекомендацией
        input.classList.remove('contacts__input--valid');
        input.parentNode.classList.remove('contacts__input-shell--valid')

        input.classList.add('contacts__input--invalid');
        input.parentNode.classList.add('contacts__input-shell--invalid')

        console.log('Поле обязательно для заполнения');
        console.log(input.value)
    }
}

function validationEmailCheck(input) {
    if (input.value) { // Проверям есть ли вообще текст в инпуте
        let valid = false;
        let counter = 0; // Счётчик чтоб избежать @@@

        //Если инпут не пуст, то перебираем его 

        for (let i = 0; i < input.value.length; i++) { 
            if (input.value[i] === '@') { // Ищём @ в строке
                valid = true;
                counter++
            };
        };

        if (!valid || counter > 1) { // Если не нашли знак собаки , то ошибка
            input.classList.remove('contacts__input--valid');
            input.parentNode.classList.remove('contacts__input-shell--valid')

            input.classList.add('contacts__input--invalid');
            input.parentNode.classList.add('contacts__input-shell--invalid')

            console.log('Для адресса нужна @');
            console.log(input.value)
        } else { // Хороший вариант ,когда всё ок
            input.classList.remove('contacts__input--invalid');
            input.parentNode.classList.remove('contacts__input-shell--invalid')

            input.classList.add('contacts__input--valid');
            input.parentNode.classList.add('contacts__input-shell--valid')

            return true
        }

    } else { // Если инпут пуст, то выводим ошибку с рекомендацией
        input.classList.remove('contacts__input--valid');
        input.parentNode.classList.remove('contacts__input-shell--valid')

        input.classList.add('contacts__input--invalid');
        input.parentNode.classList.add('contacts__input-shell--invalid')

        console.log('Поле обязательно для заполнения');
        console.log(input.value)
    }
}

function checkingButtonLock(button, inputText, inputEmail) { // Функция блокировки кнопки пока нужные инпуты не валидны
    if (validationTextCheck(inputText) === true && validationEmailCheck(inputEmail) === true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}



inputText.addEventListener('blur', () => { // Вешаем обработку снятия фокуса с инпута
    validationTextCheck(inputText);
    checkingButtonLock(buttonContacts,inputText,inputEmail);
}) 


inputEmail.addEventListener('blur', () => { // Вешаем обработку снятия фокуса с инпута
    validationEmailCheck(inputEmail);
    checkingButtonLock(buttonContacts,inputText,inputEmail);
})


