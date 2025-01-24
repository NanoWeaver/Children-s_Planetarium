let inputText = document.querySelector('.contacts__input--valid-text');
let inputEmail = document.querySelector('.contacts__input--valid-email');
let button = document.querySelector('.contacts__form-button');


inputText.addEventListener('blur', () => { // Вешаем обработку снятия фокуса с инпута
    if (inputText.value) { // Проверям есть ли вообще текст в инпуте
        let valid = true;

        //Если инпут не пуст, то перебераем его 

        for (let i = 0; i < inputText.value.length; i++) { 
            if (!(/\p{L}/u.test(inputText.value[i]))) { // Используем регулярное выражение для проверки символа
                valid = false;
            };
        };

        if (!valid) { // Если нашли не букву , то ошибка
            inputText.classList.add('contacts__input--invalid');
            console.log('Разрешены только буквенные символы');
            console.log(inputText.value)
        } else { // Хороший вариант ,когда всё ок
            inputText.classList.remove('contacts__input--invalid');
            inputText.classList.add('contacts__input--valid');
        }

    } else { // Если инпут пуст, то выводим ошибку с рекомендацией
        inputText.classList.remove('contacts__input--valid');
        inputText.classList.add('contacts__input--invalid');
        console.log('Поле обязательно для заполнения');
        console.log(inputText.value)
    }
}) 

inputEmail.addEventListener('blur', () => {
    if (inputEmail.value) { // Проверям есть ли вообще текст в инпуте
        let valid = false;
        let counter = 0; // Счётчик чтоб избежать @@@

        //Если инпут не пуст, то перебераем его 

        for (let i = 0; i < inputEmail.value.length; i++) { 
            if (inputEmail.value[i] === '@') { // Ищём @ в строке
                valid = true;
                counter++
            };
        };

        if (!valid || counter > 1) { // Если не нашли знак собаки , то ошибка
            inputEmail.classList.remove('contacts__input--valid');
            inputEmail.classList.add('contacts__input--invalid');
            console.log('Для адресса нужна @');
            console.log(inputEmail.value)
        } else { // Хороший вариант ,когда всё ок
            inputEmail.classList.remove('contacts__input--invalid');
            inputEmail.classList.add('contacts__input--valid');
        }

    } else { // Если инпут пуст, то выводим ошибку с рекомендацией
        inputEmail.classList.remove('contacts__input--valid');
        inputEmail.classList.add('contacts__input--invalid');
        console.log('Поле обязательно для заполнения');
        console.log(inputEmail.value)
    }
})