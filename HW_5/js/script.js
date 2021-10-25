//Task 1
/* Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром.
*/

function calculateThreeNumbers(a, b, c) {
    return (a - b) / c;
}

console.log(calculateThreeNumbers(2, 4, 3));

//Task 2
/* Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром. 
 */

function calculateSqr(a) {
    return a * a;
}

function calculateCube(a) {
    return calculateSqr(a) * a;
}

console.log('sqrt: ' + calculateSqr(4));
console.log('cube: ' + calculateCube(4));


// Task 3
/* Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.
*/

let a = 5;
let b = 8;

function getMinValue(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function getMaxValue(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log("min: " + getMinValue(a, b) + " max: " + getMaxValue(a, b));

//Task 4
/* Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.
 */

let x = prompt('enter start');
let y = prompt('Enter end');

while ((x === "" ||  isNaN(x)) && (y === "" || isNaN(y))){
    alert('enter correct numbers')
    x = prompt('enter start');
    y = prompt('Enter end');
}


x = Number(x);
y = Number(y);

function getUserArray(x, y) {
    let userArray = [];

    if (x < y) {
        for (let i = x; i <= y; i++) {
            userArray.push(i);
        } 
    } else if (x > y) {
        for (let i = x; i >= y; i--) {
            userArray.push(i);
        } 
    } else {
            console.log('incorrect range')
        }
    return userArray;
}

function showUserArray(x, y) {
    console.log(getUserArray(x, y));
}

showUserArray(x, y);

//Task 5
/* Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.
*/
 
function isEven (a) {
    if (a % 2 === 0) {
        return true;
    } 
    return false;
};

console.log('Even ' + isEven(8));

//Task 6
/* Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.
 */

let array = [4, 5, 6, 7, 8, 9, 10];

function getEvenArray(array) {
    let evenArray = [];

    for (item of array) {
        if (isEven(item)) {
            evenArray.push(item);
        }
    }
    return evenArray; 
}

console.log(getEvenArray(array));

//Task 7
/*Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
 */

let anotherArg = prompt('another parametr');

function drawPyramid(n) {
    
    for (let i = 1; i <= n; i++) {
        let str = '';

        for ( let j = 0; j < i; j++) {
            
            if (arguments.length > 1) {
                let star = arguments[1];
                str += star;
            } else  {
                str += i;
            }
        }
        console.log(str);
    }
}

drawPyramid(9, anotherArg);

//Task 8
/*Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:
 */

let c = 0;

while (isNaN(c) || !c) {
    c = +prompt("Enter height of triangle");

    if (isNaN(c)) {
        alert("Enter a number");
    }
}

function drawTriangle(c) {
    let str = '*';
    let triangleArray =  [];
    

    for (let i = 0; i < (c + (c - 1)); i++) {
        triangleArray.push(" ");
    }

    for (let j = 0, x = 1; j < c; j++, x++) {
        triangleArray[c-1] = str;

        console.log(triangleArray.join(""));
        
        triangleArray[(c-1) + x]= str;
        triangleArray[(c-1) - x]= str;   
    } 
}

function drawReverseTriangle(c) {
    let str = ' ';
    let triangleArray =  [];
    

    for (let i = 0; i < (c + (c - 1)); i++) {
        triangleArray.push("*");
    }

    for (let j = c, x = c; j >= 0; j--, x--) {
        triangleArray[(c-1) + x]= str;
        triangleArray[(c-1) - x]= str;

        console.log(triangleArray.join(""));
    }
}

drawTriangle(c);
console.log('--------------------');
drawReverseTriangle(c);

//Task 9
/* Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000.
*/

function showFib() {
    let a = 0;
    let b = 1;
    let arr = []

    arr.push(a, b);

    while (b < 1000) {
        let c = a+b;

        arr.push(c);

        a = b;
        b = c;

        if (b > 1000) arr.pop();
    }
    return arr;
}

console.log(showFib());

//Task 10
/*  Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию.
*/

function calculateSumDistricts(num) {
    let temp = String(num);
    let sum = 0;
    
    for (let i = 0; i < x.length; i++) {
        sum += +temp[i];
    }

    if (sum <= 9) {
        return sum;
    } else {
        return  calculateSumDistricts(sum);
    }
}

console.log(calculateSumDistricts(59867975));

//Task 11
/*Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл.
 */

let recursArray = [1, 4, -10, 233, 6, 8, 89];
let index = 0;

function showArrayElements(array) {
    
    console.log(array[index]);
    index++;

    if (index < array.length) {
        showArrayElements(array);
    }
}

showArrayElements(recursArray);

//Task 12
/*Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке.
Рамку вывести в консоль.
 */

function showUserInformation() {
    let name = prompt('Enter your name');
    let surname = prompt('Enter your surname');
    let groupNumber = prompt('Enter your group');

    let theme = ' Home work: Functions ';
    let group = ` Completed: student of  group N: ${groupNumber} `;
    let inform = ` ${name}   ${surname} `;
    let starString = '';
    let countLength = 0;

    if (theme.length > group.length && theme.length > inform.length) {
        countLength = theme.length;
    } else if (group.length > inform.length) {
        countLength = group.length;
    } else countLength = inform.length;

    for (let i = 0; i < countLength; i++) {
        starString += '*';
    }

    let arrayOfString =  [theme, group, inform, starString];

    for (let i = 0; i < arrayOfString.length; i++) {
        let tempStr = arrayOfString[i].split('');
        
        tempStr[countLength] = ('*');
        tempStr.unshift('*');

        for (let i = 0; i < tempStr.length; i++) {
            if(tempStr[i] === undefined) {
                tempStr[i] = " ";
            } 
        }
        arrayOfString[i] = tempStr.join('');
    }

    theme = arrayOfString[0];
    group = arrayOfString[1];
    inform = arrayOfString[2];
    starString = arrayOfString[3];

    console.log(`${starString}\n${theme}\n${group}\n${inform}\n${starString}\n`);
}

// showUserInformation();

//Task 13
/*Напишите ф-цию, которая должна проверить правильность ввода адреса
эл. почты, неиспользуя регулярные выражения.
 */

function checkEmail(email) {
    let temp = email.split('@');
    let charArr = ['95', '46', '150', '64'];

    for (let i = 0; i < email.length; i++) {
       let char = email.charCodeAt(i);
       
       if ((char >= '1040' && char <= '1103')) {
           console.log('Russin letters');
       } else if ((char < '64' || char > '122') 
                   && (char < '48' || char > '57') 
                   && (char != '95' && char != '46' && char != '150')) {
           console.log('wrong symbol')
       } 

       charArr.forEach(c => {
           if (c == char) {
               for (symb of charArr) {
                   if (email.charCodeAt(i - 1) == symb || email.charCodeAt(i  + 1) == symb) {
                       console.log('Two symbols together');
                   }
               }
           }
       });
   }

    for (symb of charArr) {
        if (email.charCodeAt(0) == symb || email.charCodeAt(email.length - 1) == symb) {
            console.log('smth wrong');
        }
    }

    if (temp[0].length < 2) {
        console.log('Very short');
    } else if ((temp[0].charCodeAt(0) >= '48') && temp[0].charCodeAt(0) <= '57'){
        console.log('First symbol is a number');
    }

    if(temp[1].indexOf('.') < 2 || temp[1].indexOf('.') >11){
        console.log('wrong address');
    } else if(((temp[1].length -temp[1].lastIndexOf('.')) < 3) || ((temp[1].length - temp[1].lastIndexOf('.')) > 12)){
        console.log('wrong domain');
    }

}


checkEmail("jhsdhfjs@jsadjadhs.ru");
