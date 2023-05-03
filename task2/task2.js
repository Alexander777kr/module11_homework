/* 
Напишите функцию, которая принимает на входе любое число 
(но не больше 1 000), определяет, является ли оно простым, 
и выводит, простое число или нет. Если введено больше 1 000, 
то выводится сообщение, что данные неверны. Обратите внимание 
на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и 
условные операторы.
*/

function isAPrimeNumber(num) {
    if (typeof num !== 'number') {
        return 'Не число';
    }
    if (num > 1000) {
        return 'Число должно быть не больше 1000';
    } else if (num === 0 || num === 1) {
        return 'Число не простое и не составное';
    }
    if (isNaN(num)) {
        return 'num не должно быть NaN числом';
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return "Составное число";
        }
    }
    return "Простое число";
}

console.log(100, isAPrimeNumber(100));
console.log(7, isAPrimeNumber(7));
console.log(0, isAPrimeNumber(0));
console.log(23, isAPrimeNumber(23));
console.log(2, isAPrimeNumber(2));