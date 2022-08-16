//======================task 1 ======================//
// function fillArr (value, arrLength) {
//     let arr = [];
//     arr.length = arrLength;
//     arr.fill(value);
//     console.log(arr);
// }
// fillArr('X', 5);
//======================task 2 ======================//
// function isNumberInRange(num){
// return num > 0 && num < 10;
// }
// console.log(isNumberInRange(50));
// console.log(isNumberInRange(6));
//======================task 3 ======================//
// function isEven(num) {
//     return num % 2 === 0;
// }
//
// console.log(isEven(11));
// console.log(isEven(10));
//======================task 4 ======================//
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 255, 985, 458, 444];
// function isEven(num) {
//     return num % 2 === 0;
// }
// let arrEven = arr.filter((el) => {
//     return isEven(el);
// });
// console.log(arrEven);
//======================task 5 ======================//
// function exponentiation (num,exponentiation){
//    let result = num ** exponentiation;
//     console.log('Ваш результат ' + result );
// }
// exponentiation(3,2);
//======================task 6 ======================//
// let age = +prompt(' Сколько Вам лет ? ')
// function ageControl(n) {
//     if (n >= 16) {
//         alert('Добро пожаловать');
//     } else {
//         alert('Вы еще молоды');
//     }
// }
// ageControl(age);
//======================task 7 ======================//
// let age = +prompt(' Сколько Вам лет ? ')
//
// function ageControl(n) {
//     if (n === undefined || !n ) {
//         alert('Обновите страницу и введите свой возраст');
//     } else if (n >= 16) {
//         alert('Добро пожаловать');
//     }
//     else {
//         alert('Вы еще молоды');
//     }
// }
//
// ageControl(age);
//======================task 8 ======================//
// let st = 'строка какого-то текста';
//
// function ucFirst(string) {
//     return string[0].toUpperCase() + st.slice(1);
// }
//
// console.log(ucFirst(st));
//======================task 9 ======================//
// let st = 'var_text_hello';
//
// function functionString(string) {
//     return string.split('_').map((el, idx) => {
//         if (idx === 0) {
//             return el;
//         } else {
//             return el[0].toUpperCase() + el.slice(1);
//         }
//
//     }).join('');
// }
//
// console.log(functionString(st));
//======================task 10 ======================//
// let arr = ['Arestovich', 'Zelenskiy', 'Huilo', 'Dgonson'];
//
// function inArray(string, array) {
//     return array.includes(string);
// }
//
// console.log(inArray('Zelenskiy', arr));