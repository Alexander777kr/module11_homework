/*
Напишите функцию, которая принимает два натуральных числа 
x и n и возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль.
*/

const mathPow = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'a и b должны быть числами';
    }
    if (isNaN(a) || isNaN(b)) {
        return 'a и b не должны быть NaN числами';
    }
    return (Math.pow(a, b));
}
console.log(mathPow(7, 2));
