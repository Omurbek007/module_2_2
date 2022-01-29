//SECOND HOMEWORK 2.1
let string1 = "ddd@bbb@ccc";
final_string = string1.replace(/@/gi, "!");
document.write(final_string + "<br>");

//SECOND HOMEWORK 2.2
//Дана строка 'js'. Сделайте из нее строку 'JS'.

let str = "js";
document.write(str.toLocaleUpperCase() + "<br>");

//THIRD HOMEWORK 2.3
//Дана строка 'JS'. Сделайте из нее строку 'js'

let upperStr = "JS";
document.write(upperStr.toLocaleLowerCase() + "<br>")

//FOURTH HOMEWORK 2.4
//Дана строка'I am a hero!'. Выведите в консоль количество символов в этой строке

let hero = "I am a hero!";
console.log(hero.length + " Symbol bar");


//FIFTH HOMEWORK 2.5
//Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.


let userCreditCardNumber = prompt("Введите номер вашей кредитной карты мин: 12 симболов");
document.write(`Последние четыре цифра вашей карты: ********${userCreditCardNumber.slice(8,12)} <br>`);
