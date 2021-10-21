//Task 1
/* Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран.
*/

let arrayNumbers = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i]);
}

//Task 2
/* Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3. 
 */

let arrayPositiveNegative = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arrayPositiveNegative.length; i++) {
    if (arrayPositiveNegative[i] > -10 && arrayPositiveNegative[i] < -3) {
        console.log(arrayPositiveNegative[i]);
    }
}

// Task 3
/* Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.
*/

let arrayForSum = [];

for (i= 23; i <= 57; i++) {
    arrayForSum.push(i);
}
console.log(arrayForSum);

arrayForSum = [];

let num = 23;
while (num <= 57) {
    arrayForSum.push(num);
    num++;
}
console.log(arrayForSum);

let result = 0;
for (item of arrayForSum) {
    result +=item;
}
console.log(result);

//Task 4
/* Дан массив числами (строчного типа), например: ['10', '20', '30', '50', '235', '3000'].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
5.
 */

let arrayStringWithNum = ['10', '20', '30', '50', '235', '3000', '555', '2', '671'];

for (let item of arrayStringWithNum) {
    if (item[0] == 1 || item[0] == 2 || item[0] == 5) {
        console.log(item);
    }
}

//Task 5
/* Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.
*/
let arrayDaysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursdsay', 'Friday', 'Saturday', 'Sunday'];

for (let day of arrayDaysOfWeek) {
    
    if (day == 'Saturday' || day == 'Sunday') {
        document.write(`<strong>${day} </strong>`);
    } else {
        document.write(day + " ");
    }
}

//Task 6
/* Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.
 */
let arbitArray = [1, 2, 5, 7, 'orange', 'yellow'];

arbitArray.push('green');

console.log(arbitArray);
console.log('Last element: ' + arbitArray[arbitArray.length - 1]);

//Task 7
/*Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до теx пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран.
 */

let userNumArray = [];
let userNum;

while (userNum != "") {
    userNum = prompt('Enter your number');

    if (isNaN(userNum)) {
        alert("this is not number");
    } else {
        userNumArray.push(userNum);
    }
}

userNumArray.pop();
console.log('Your array: ' + userNumArray);

userNumArray.sort((a, b) => a - b);
console.log('Sorted array: ' + userNumArray);

//Task 8
/*Переверните массив [12, false, 'Текст', 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.
 */

let mixedArray = [12, false, 'Текст', 4, 2, -5, 0];
let reverseArray = [];
let j = mixedArray.length -1;

while (j >= 0) {
    reverseArray.push(mixedArray[j]);
    j--
}

console.log(`Initial array: ${mixedArray}`);
console.log(`Reverse with 'while': ${reverseArray}`);
console.log(`Reverse with 'reverse': ${mixedArray.reverse()}`);

//Task 9
/* Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
*/

let arrayWithEmptyElem = [5, 9, 21, , , 9, 78, , , , 6];
let iterator = 0;

for (let element of arrayWithEmptyElem) {
    if (typeof element === 'undefined') { 
        iterator++;
    }
}

console.log(` Number of empty elements is: ${iterator}`);

//Task 10
/*  Найдите сумму элементов массива между двумя нулями (первым и последним нулями
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
[1,8,0,13,76,8,7,0,22,0,2,3,2].
*/

let zeroArray = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
let firstZero = zeroArray.indexOf(0);
let lastZero = zeroArray.lastIndexOf(0);
let sum = 0;

if (firstZero !== -1 || lastZero !== -1) {
    let arrayForCalculate = zeroArray.slice(firstZero + 1, lastZero);
    console.log(arrayForCalculate);

    for (item of arrayForCalculate) {
        sum += item;
    }
    console.log(`Sum between zeroes: ${sum}`);

} else {
    console.log(0);
}

//Task 11
/*Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
пользователь.
 */

let c = 0; 
let str = '^';
let triangleArray =  [];

while (isNaN(c) || !c) {
    c = prompt("Enter height of triangle");

    if (isNaN(c)) {
        alert("Enter a number");
    }
}

document.write('</br></br>')

for (i = 0; i < c + (c-1); i++) {
    triangleArray.push(" ");
}

for (let j = 0, x = 1; j < c; j++, x++) {
    triangleArray[c-1] = str;

    console.log(triangleArray.join(""));
    document.write(`<pre>${triangleArray.join("")}</pre> `)

    triangleArray[(c-1) + x]= str;
    triangleArray[(c-1) - x]= str;
}



    



