/* 
Напишите функцию, которая принимает число как аргумент 
и возвращает функцию, которая также принимает число как 
аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.
*/

function sumOfTwo(a) {
    return function (b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return 'a и b должны быть числами';
        }
        if (isNaN(a) || isNaN(b)) {
            return 'a и b не должны быть NaN числами';
        }
        return a + b;
    }
}

console.log(sumOfTwo(2)(3));