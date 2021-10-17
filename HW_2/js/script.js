//Task 1
/* Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.». 
*/ 
// let name = prompt('Введите ваше имя');
// let age = prompt('Введите ваш возраст');
// let city = prompt('Введите город проживания');
// let phone = prompt('Введите номер телефона');
// let email = prompt('Введите ваш email');
// let company = prompt('Введите название вашей компании');

// document.write(`<h2>Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city}  и работаю в компании "${company}". Мои контактные данные: телефон ${phone} , почта ${email}</h2>`);

// //Task 2
/* Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.». 
 */
// let year = 2021 - age;

// document.write(`<h3> ${name} родился в  ${year} году</h3`);

// Task 3
/* Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
*/
let number = '345543';

let sum1 = parseInt(number.charAt(0)) + parseInt(number.charAt(1)) + parseInt(number.charAt(2));
let sum2 = parseInt(number.charAt(3)) + parseInt(number.charAt(4)) + parseInt(number.charAt(5));

(sum1 == sum2) ? console.log('Sums are equal') : console.log('Sums are not equal');

//Task 4
/* Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3. 
 */
let a = -3;

if(a > 0){
    console.log('Верно');
} else {
    console.log('Неверно')
}

//Task 5
/* Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат. 
*/
a = 10;
let b = 10;

let sum = a + b;
let diff = a - b;
let prod = a * b;
let quot = a / b;

console.log('Sum is ' + sum);
console.log('Difference is ' + diff);
console.log('Product is ' + prod);
console.log('Quotient is ' + quot);

if(sum > 1){

    let sqr = Math.pow(sum, 2);
    console.log(sqr);
}

//Task 6
/* Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
'Неверно'.
 */
if((a > 2 && a < 11) || (b >= 6 && b < 14)){

    console.log('Верно');

} else {

    console.log('Неверно')

   }

//Task 7
/*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую). 
 */
   let n = Math.floor(Math.random() * (59 - 0 + 1) + 0);

   if(n < 15){

       console.log(n + ' This is the first quarter');

   } else if(n >= 15 && n < 30){

        console.log(n + ' This is the second quarter');

   } else if(n >= 30 && n < 45){

        console.log(n + ' This is the third quarter');

   } else {

         console.log(n + ' This is the forth quarter');

   }

//Task 8
/*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью). 
 */
   let day = Math.floor(Math.random() * (31 - 1 + 1) + 1);

   if(day < 11){

       console.log(day + ' This is the first decade');

   } else if(day >= 11 && day < 21){

        console.log(day + ' This is the second decade');

   } else {

         console.log(day + ' This is the third decade');

   }

//Task 9
/* Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно. 
*/
   let daysForCalculate = 256;

   let yearResult = Math.floor(daysForCalculate / 365);
   let monthResult = Math.floor(daysForCalculate / 31);
   let weekResult = Math.floor(daysForCalculate / 7);
   let hourResult = daysForCalculate * 24;
   let minuteResult = hourResult * 60;
   let secondResult = minuteResult * 60;

   (yearResult < 1) ? console.log('Less than a year') : console.log(yearResult + ' years');
   (monthResult < 1) ? console.log('Less than a month') : console.log(monthResult + ' months');
   (weekResult < 1) ? console.log('Less than a week') : console.log(weekResult + ' weeks');
        
   console.log(hourResult + ' hours');
   console.log(minuteResult + ' minutes');
   console.log(secondResult + ' seconds');

//Task 10
/* Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch. 
*/
   let days=302;
   let month = null;

   if(days / 365 >= 1){

       days -=364;
       
   } else if(days / 365 >= 2){

       console.log('Calculate by yourself')
   }

   console.log(days);
   
   if (days <= 31) {

       month = 'January'
       
   } else if(days > 31 && days <=59 ){

        month = 'February'
       
   } else if(days > 59 && days <= 90 ){

        month = 'March'
        
    } else if(days > 90 && days <= 120 ){
    
        month = 'April'
       
    } else if(days > 120 && days <= 151 ){

        month = 'May'
       
    } else if(days > 151 && days <= 181 ){

        month = 'June'
       
    } else if(days > 181 && days <= 212 ){

        month = 'July'
       
    } else if(days > 212 && days <= 243 ){

        month = 'August'
       
    } else if(days > 243 && days <= 273 ){

        month = 'September'
       
    } else if(days > 273 && days <= 304 ){

        month = 'October'
       
    } else if(days > 304 && days <= 334 ){

        month = 'November' 
       
    } else {

        month = 'December'
    }

    console.log(month)

    switch(month){
        case 'January':
        case 'February':
        case 'December':
            console.log('Winter');
            break;

        case 'March':
        case 'April':
        case 'May':
            console.log('Spring');
            break;

        case 'June':
        case 'July':
        case 'August':
            console.log('Summer');
            break;

        case 'September':
        case 'October':
        case 'November':
            console.log('Autumn');
            break;

        default:
            console.log('Some new season!');
    }



