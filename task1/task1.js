/* 
Дан массив. Нужно вывести в консоль количество чётных 
и нечётных элементов в массиве. Если в массиве есть нулевой 
элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может 
содержать не только числа, но и знаки, например null и так далее.
*/

function getEvenAndOddNumbers(arr) {
    let even = 0;
    let odd = 0;
    let nulledEl = 0;
    for (let elem of arr) {
        if (!isNaN(elem) && elem !== 0 && elem != null && typeof elem !== 'string') {
            if (elem % 2 === 0) {
                console.log('even', elem);
                even++;
            } else {
                console.log('odd', elem);
                odd++;
            }
        } else if (elem === 0) {
            console.log('nulledEl', elem);
            nulledEl++;
        }
    }
    return { even, odd, null: nulledEl };
}

console.log(getEvenAndOddNumbers([0, null, '&&&&', '6', 6, 2, 3, 5, 7, 9]));


