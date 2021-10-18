//Task 1
/* Выведите числа от 1 до 50 и от 35 до 8 
*/ 

for(let i = 1; i <= 50; i++){
    console.log(i);
}

for(let i = 35; i >=8; i--){
    console.log(i);
}

//Task 2
/* Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку. 
 */

let i = 89;

while(i >= 11){

    document.write(i + '<br/>')
    i--
}

// Task 3
/* С помощью цикла найдите сумму чисел от 0 до 100
*/

let sum = 0;

for(let i = 0; i <=100; i++){
    sum +=i;
}

console.log(sum);

//Task 4
/* Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3). 
 */

sum = 0;

for(let i = 1; i <= 5; i++){

    sum +=i;
    console.log(`Sum of numbers ${i} is ${sum}`);
}

//Task 5
/* Выведите чётные числа от 8 до 56. Решить задание через while и for
*/

for( let i = 8; i <= 56; i++){

    if(i % 2 == 0){
        console.log(i);
    }
}

let e = 8;
while(e <= 56){
    
    if(i % 2 == 0){
        console.log(e);
    }
    
    e++;
}

//Task 6
/* Необходимо вывести на экран полную таблицу умножения (от 2 до 10)
 */

for(let i = 2; i <= 10; i++){

    document.write('.......<br/>')

    for(let j = 2; j <= 10; j++){
        document.write(`${i} * ${j} = ${i*j} <br/>`)
    }
}

//Task 7
/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.
 */
let n = 1000;
let num = 0;

while( n > 50){
    n /= 2;
    num++;
} 

if(n < 50){

    n *= 2;
}

console.log('The last result is ' + n);
console.log('iterations number ' + num);
   

//Task 8
/*Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение. 
 */

let numb;
let sumResult = 0;
let average = 0;
let quotient = 0;

while( (numb != 0) ){
    
    numb = prompt("Enter your number");
    
    if(isNaN(numb)){

        alert('This is not a number!');

    } else{
        
        sumResult += +numb;
        average = sumResult / quotient;
        quotient++;
    } 
} 

console.log("sum " + sumResult + " average " + average);

//Task 9
/* Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл. 
*/

let stringOfNumbers = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let num1 = stringOfNumbers.split(' ');
let max = 0;
let min = num1[0];

for(let i = 0; i < num1.length; i++){

    if(num1[i] > max){
        max = num1[i];
    }
}

for(let i = 0; i < num1.length; i++){

    if(num1[i] < min ){
        min = num1[i];
    } 
}

console.log(max , min)

//Task 10
/*  Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный. 
*/

let arbNumber = 123457;
let reverse ='';
let districtSum = 0;
let stringNumber = arbNumber.toString();

 for(let i = 1; i <= stringNumber.length; i++){

     console.log(stringNumber.charAt(i-1));

     districtSum += +stringNumber.charAt(i-1);

     let y = stringNumber.charAt(stringNumber.length-i);

     reverse = reverse.concat(y);
 }

console.log(stringNumber.length + ' districts in a number')
console.log('sum of districts: ' + districtSum)
console.log('reverse number: ' + reverse)
 


   



