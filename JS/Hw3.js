//===================Завдання №1===================//
let q = 32;  // Number
let w = '18 строка'; // String
let e = true; //Boolean
let r = 1000000000n;//BigInt
let t;//Undefined
let y = null; // Null
let u = {
    name: 'Vit',
    age: 25,
    gender: 'Male'
};//Object
let i = Symbol('id'); //Symbol
//===================Завдання №2===================//
const a = 'Glory';
var s = 'Ukraine';
let  d = 50;

s = 'Victory';
d = 55;
//===================Завдання №3===================//
// w1 = '18'; //  String
// console.log(parseFloat(w1));//Number
// console.log((+w1));//Number
// console.log(Boolean(w1));// (Boolean)  true
//
// let q1 = 26;  // Number
// console.log(String(q1)) //  String
// console.log(typeof String(q1))
//
// let e1 = true; //Boolean
// console.log(+e1); // 1=true
// let e2 = false; // Boolean
// console.log(+e2); // 0=false
//
// let n = 9.122131; // Дисятичное число
// console.log(parseInt(n)); // Целое число
//===================Завдання №4===================//
// let result = w + q;
// console.log(result);
// let result = w + e;
// console.log(result);
// let result = w + r;
// console.log(result);
// let result = w + t;
// console.log(result);
// let result = w + y;
// console.log(result);
// let result = w + u;
// console.log(result);
// let result = w + i; // TypeError
// console.log(result); // TypeError
// let result = w + i.toString();
// console.log(result);
//======================================//
// let result = q + q;
// console.log(result);
// let result = q + w;
// console.log(result);
// let result = q + e; // true = 1 \\ 32+1=33
// console.log(result);
// let result = q + r; // Number+BigInt=TypeError
// console.log(result);
// let result = q + t; // Number+Undefined=NaN
// console.log(result); // NaN
// let result = q + y;  // Number+Null=Number
// console.log(result);
// let result = q + u;// Number+Object=numberObject
// console.log(result);
// let result = q + i; // Number+Symbol=TypeError
// console.log(result);
//===================Завдання №5===================//
// let result = q - q;
// console.log(result);
// let result = q - w; // Number-String = NaN
// console.log(result);
// let result = q - e; // Number-True = Number-1
// console.log(result);
// let result = q - r; // Number-BigInt=TypeError
// console.log(result);
// let result = q - t; // Number-Undefined=NaN
// console.log(result);
// let result = q - y; // Number-Null=Number
// console.log(result);
// let result = q - u;  // Number-Object=NaN
// console.log(result);
// let result = q - i; // Number-Symbol=TypeError
// console.log(result);
//======================================//
// let result = w - q;  // String-Number=NaN
// console.log(result);
// let result = w - e;  // String-True=NaN
// console.log(result);
// let result = w - r;  // String-BigInt=TypeError
// console.log(result);
// let result = w - t;    // String-Undefined=NaN
// console.log(result);
// let result = w - y;    // String-Null=NaN
// console.log(result);
// let result = w - u;      // String-Object=NaN
// console.log(result);
// let result = w - i;   // String-Symbol=TypeError
// console.log(result);
//===================Завдання №6===================//
// let login = prompt('Введите логин:')
// let password = prompt('Введите пароль:')
// if (login === 'kykold', password === '1234asdQQ'){
//     alert('Добро пожаловать')
// } else {
//     alert('Ошибка входа')
// };
//===================Завдання №7===================//
// let age = +prompt('Введите год вашего рождения:')
// if (2022-age >=16){
//     alert('Добро пожаловать')
// } else {
//     alert('Вход воспрещен')
// };
//===================Завдання №8===================//
// let workExperience = +prompt('Какой Ваш стаж работы?')
// if (workExperience < 1 ){
//     alert('У Вас нет надбавки за работу. Работайте дальше!')
// } else if (workExperience >=1 , workExperience <3 ) {
//     alert('Надбавка за Ваш стаж состовляет 5%');
// } else if (workExperience >=3 , workExperience <5 ) {
//     alert('Надбавка за Ваш стаж состовляет 10%');
// } else if (workExperience >=5 , workExperience <10 ) {
//     alert('Надбавка за Ваш стаж состовляет 15%');
// } else if (workExperience >=10 , workExperience <15 ) {
//     alert('Надбавка за Ваш стаж состовляет 15%');
// } else if (workExperience >=15 , workExperience <20 ) {
//     alert('Надбавка за Ваш стаж состовляет 20%');
// } else if (workExperience >=20) {
//     alert('Надбавка за Ваш стаж состовляет 30%');
// }
//===================Завдання №9===================//
let day = +prompt('Ведите порядковый номер дня недели?','1-7');
//===================Завдання №9.1===================//
// if (day === 1 ){
//     alert('Monday')
// } else if (day === 2 ){
//     alert('Tuesday')
// } else if (day === 3 ){
//     alert('Wednesday')
// } else if (day === 4 ){
//     alert('Thursday')
// } else if (day === 5 ){
//     alert('Friday')
// } else if (day === 6 ){
//     alert('Saturday')
// } else if (day === 7 ){
//     alert('Sunday')
// } else  {
//     alert('Ошибка ввода')}
//===================Завдання №9.2===================//
// switch (day){
//     case (1) :
//     alert('Monday');
//         break;
//     case (2) :
//         alert('Tuesday');
//         break;
//     case (3) :
//         alert('Wednesday');
//         break;
//     case (4) :
//         alert('Thursday');
//         break;
//     case  (5):
//         alert('Friday');
//         break;
//     case (6) :
//         alert('Saturday');
//         break;
//     case (7) :
//         alert('Sunday');
//         break;
//     default :
//         alert('Ошибка ввода');
// };
//===================Завдання №9.3===================//
// let result = (day === 1) ? 'Monday!' :
//     (day === 2) ? 'Tuesday' :
//         (day === 3) ? 'Wednesday!' :
//             (day === 4) ? 'Thursday' :
//                 (day === 5) ? 'Friday!' :
//                     (day === 6) ? 'Saturday' :
//                         (day === 7) ? 'Sunday' :
//         'Ошибка ввода';
// alert(result);
//===================Завдання №10===================//
// let numb = +prompt('Введите число')
// if (numb > 0 ){
//     alert('1')
// } else if (numb < 0 ) {
//     alert('-1');
// } else if (numb === 0 ) {
//     alert('0');}
//===================Завдання №11===================//
// let jobTitle = prompt('Введите Вашу должность','Моя должность')
// let result1 = (jobTitle === 'Сотрудник') ? 'Привет' :
//     (jobTitle === 'Директор') ? 'Здравствуйте' :
//         (jobTitle === '') ? 'Нет логина' :
//         '';
// alert(result1);
//===================Завдання №12===================//
// let room = +prompt('Введите номер квартиры')
// if (room >=1 , room <=20 ){
//     alert('Данная квартира находиться в первои подъезде')
// } else if (room >=21 , room <=48 ) {
//     alert('Данная квартира находиться во втором подъезде');
// } else if (room >=49 , room <=90 ) {
//     alert('Данная квартира находиться во третьем подъезде');
// } else  {
//     alert('Ошибка ввода')};
//===================Завдання №13===================//
// let browser = prompt('Enter the name of the browser')
// if (browser === 'Edge' ){
//     alert('You\'ve got the Edge!')
// } else if (browser === 'Chrome','Firefox','Safari','Opera' ) {
//     alert('Okay we support these browsers too');
// } else   {
//     alert('We hope that this page looks ok!');
// }
//===================Завдання №14===================//
// const number2 = +prompt('Введите число между 0 и 3', '')
// switch (number2){
//     case (0):
//     alert('Вы ввели число 0');
//         break;
//     case (1) :
//         alert('Вы ввели число 1');
//         break;
//     case (2):
//     case (3):
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     default :
//         alert('Ошибка ввода');
// };