/* 

Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить числа в интервале 
от первого до второго принятого числа. 
Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. 
Каждую секунду в консоль должно печататься число, 
начиная с 5 и заканчивая 15 
(всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/

function showInterval(a, b) {
    if (a > b) {
        console.log('a должно быть меньше b');
        return;
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('a и b должны быть числами');
        return;
    }
    if (isNaN(a) || isNaN(b)) {
        console.log('a и b не должны быть NaN числами');
        return;
    }
    const intervalId = setInterval(function () {
        console.log(a);
        if (a <= b) {
            a++;
        }
    }, 1000);

    setTimeout(function () {
        clearInterval(intervalId);
    }, (b * 1000 - a * 1000) + 2000);

}

showInterval(5, 15);

