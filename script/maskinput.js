let input = document.querySelector('.feedback-form-tel'); // Ловим наш импут с номером
let caretPosition = 4; // Создаем переменную для хранения текущей позиции каретки

function setCaretPosition(input,pos) { // Функция для определения места картеики и возвращения её позиции
    if (pos === -1) {
        return -1;
    }
    if (pos < 4) {
        pos = 4;
    }
    setTimeout(() => input.setSelectionRange(pos, pos), 0);
    return pos;
}

function pressingKey(event) {
        if(event.keyCode >= 48 && event.keyCode <= 57 ||  event.keyCode >= 96 && event.keyCode <= 105) { // Делаем проверку ,что нажали цифру
            if (((event.keyCode == 56 || event.keyCode == 104) && input.value.indexOf('_') == 4)
                || ((event.keyCode == 55 || event.keyCode == 103) && input.value.indexOf('_') == 4)) {
                console.log('Первая не может быть 7')
                return
            }
            let inputString = input.value.replace('_',event.key); // Меняем следующий _ на число
            input.value = inputString
            setCaretPosition(input,input.value.indexOf('_')) // Ставим каретку на первый знак _
        } else if(event.keyCode == '8' || event.keyCode == '46') { // При попытке удалить символ
            event.preventDefault(); // Отменяем удаление символа
            setCaretPosition(input,input.value.search(/\d(?!.*\d)/) + 1) // Ставим каретку на последнию цифру
            if (caretPosition != 4) { // Проверяем что каретка не ушла дальше первой _, чтоб не удалить 7 в начале
                input.value = replaceChar(input.value,input.value.search(/\d(?!.*\d)/), "_") // Вместо удаления мы меняем цифру на символ _
            }
            caretPosition = setCaretPosition(input,input.value.search(/\d(?!.*\d)/) + 1) // Ставим каретку на последнию цифру и меняем переменную 
        }
}

const replaceChar = (str, index, char) => str.substring(0, index) + char + str.substring(index + 1); // Функция для замены символа по индексу

input.addEventListener('focus', () => { // Вешаем обработчик при фокусе поля
    if (input.value === '') { // Если поле пустое , то ставим маску
        input.value = '+7 (___) ___-__-__' // Ставим маску 
    }
    setCaretPosition(input,input.value.indexOf('_')) // Ставим каретку на первый знак _ 
    
    input.addEventListener('keydown', pressingKey) // Вешаем обрабочик на нажатие клавиши
})
input.addEventListener('blur', ()=> { 
    if (input.value === '+7 (___) ___-__-__') { // Если ничего не ввели , то просле отмены фокуса маска пропадет
        input.value = '';
    }
    input.removeEventListener('keydown',pressingKey)
})