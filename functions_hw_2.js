"use strict";
/**
* Function declaration;
* Функция выполяет сложение заданных в неё параметров; 
* @param {*} numSumOne первое число для расчёта суммы;
* @param {*} numSumTwo первое число для расчёта суммы;
*/
function sumFunc(numSumOne, numSumTwo) {
    let sumRezult = null;
    if (isNaN(numSumOne) && isNaN(numSumTwo)) {
        alert("нужно вводить только числа");
    } else {
        let sumRezult = (parseFloat(numSumOne)) + (parseFloat(numSumTwo));
        return (sumRezult);
    }
}
/**
 * Function declaration;
 * Функция выполяет вычитание одного заданного парметра из другого; 
 * @param {*} numDiffOne первое число для расчёта разности;
 * @param {*} numDiffTwo первое число для расчёта разности;
 */
function diffFunc(numDiffOne, numDiffTwo) {
    let diffRezult = null;
    if (isNaN(numDiffOne) && isNaN(numDiffTwo)) {
        alert("нужно вводить только числа");
    } else {
        let diffRezult = (parseFloat(numDiffOne)) - (parseFloat(numDiffTwo));
        return (diffRezult);
    }

}
/**
 * Function expression;
 * Функция выполняет умножение заданных в неё параметров;
 * @param {*} numMultiOne первое число для расчёта произведения;
 * @param {*} numMultiTwo второе число для расчёта произведения;
 */
let multiFunc = function (numMultiOne, numMultiTwo) {
    let multiRezult = null;
    if (isNaN(numMultiOne) && isNaN(numMultiTwo)) {
        alert("нужно вводить только числа");
    } else {
        let multiRezult = (parseFloat(numMultiOne)) * (parseFloat(numMultiTwo));
        return (multiRezult);
    }
}

/**
 * Function expression;
 * Функция выполняет деление заданных в неё параметров;
 * @param {*} numDiviOne первое число для расчёта деления;
 * @param {*} numDivTwo второе число для расчёта деления;
 */
let divFunc = function (numDiviOne, numDivTwo) {
    let divRezult = null;
    if (isNaN(numDiviOne) && isNaN(numDivTwo)) {
        alert("нужно вводить только числа");
    } else {
        let divRezult = (parseFloat(numDiviOne)) / (parseFloat(numDivTwo));
        return (divRezult);
    }
}

/**
 * Function declaration;
 * Функция выполняет арифметическую операцию с двумя значениями в зависимости от того, какой тип операции выбран пользователем (задаётся в параметре "operation")
 * @param {*} arg1 первое число для орифмитической операции
 * @param {*} arg2 второе число для орифмитической операции
 * @param {*} operation вид операции (сумма, вычитание, умножение, деление)
 */
function mathOperation(arg1, arg2, operation) {
    let rezult = null;
    switch (operation) {
        case "сумма":
            rezult = sumFunc(arg1, arg2);
            break;
        case "вычитание":
            rezult = diffFunc(arg1, arg2);
            break;
        case "умножение":
            rezult = multiFunc(arg1, arg2);
            break;
        case "деление":
            rezult = divFunc(arg1, arg2);
            break;
    }
    return (rezult);
}
/**
 * Function declaration;
 * Функция определяет соответствует ли полученное значение num одному из значений массива numbers
 * @param {*} num число, которое будет сравниваться со значениями из массива 
 */
function checkFunc(num) {
    let numbers = ["1", "2", "3", "4"];
    let rezult = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (num === numbers[i]) {
            rezult = 1;
        }
    }
    return (rezult);

}
/**
 * Function declaration;
 * Функция выполняет проверку полученного числа суммы, заданной пользователем, для корректного отображения
 * слова "рубль" в тексте, отображаемом пользователю в консоли
 * @param {*} numberRub величина суммы в рублях, которую задаёт пользователь при вызове функции
 */
function currencyEnding(numberRub) {
    let numberRubStr = numberRub.toString().slice(-1);

    let result = 0;
    console.log(numberRubStr);
    if (numberRub == 1) {
        console.log(`Ваша сумма в ${numberRub} рубль успешно зачислена`);
    } else if (checkFunc(numberRubStr) == 1) {
        console.log(`Ваша сумма в ${numberRub} рубля успешно зачислена`);
    } else {
        console.log(`Ваша сумма в ${numberRub} рублей успешно зачислена`);
    }

    return;
}