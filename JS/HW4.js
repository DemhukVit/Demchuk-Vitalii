//==============================================Задание №1===================================//
// const firstArray = ['a', 'b', 'c'];
// const secondArray = [1, 2, 3];
// const newArray = [...firstArray, ...secondArray];
// console.log(newArray);
//==============================================Задание №2===================================//
// const firstArray = ['a', 'b', 'c'];
//  firstArray.push(1,2,3);
// console.log(firstArray);
//-------------------------------------------------------------------------------------------//
// const firstArray = ['a', 'b', 'c'];
//  firstArray.splice(3,0, 1, 2, 3);
// console.log(firstArray);
//==============================================Задание №3===================================//
// const firstArray = [1, 2, 3, 4, 5];
// firstArray.splice(1,2);
// console.log(firstArray);
//==============================================Задание №4===================================//
// const firstArray = [1, 2, 3, 4, 5];
// firstArray.splice(3, 0, 'a', 'b', 'c');
// console.log(firstArray);
//==============================================Задание №5===================================//
// const arr = [1, 2, 3, 4, 5]
// const arr1 = new Array(...arr);
// let multiplication = multiplicationNumber(arr1);
// console.log(multiplication);
// function multiplicationNumber(arr1) {
//     return arr1.map(function(num) {
//         return num * 10;
//     });
// }
//==============================================Задание №6===================================//
// for (var i = 4; i <= 400; i++) {
//     console.log(i)
// }
//==============================================Задание №7===================================//
// for (var i = 4; i <= 13; i += 3) {
//     console.log(i)
// }
//==============================================Задание №8===================================//
// for (var i = 654; i >= 0; i -= 1) {
//     console.log(i)
// }
//==============================================Задание №9===================================//
// for (var i = 1983; i <= 2017; i += 1) {
//     console.log(i)
// }
//==============================================Задание №10==================================//
//  for (var i = -4; i <= 100; i += 2) {
//      console.log(i)
//  }
//==============================================Задание №11==================================//
// const arr = [];
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// arr.push(sum);
// console.log(arr);
//==============================================Задание №12==================================//
// const arr = [];
// let str = '';
// let n = +prompt('Введите длину масива')
// for (var i=0; i < n; i++) {
//     str += 'x';
//     arr.push(str);
// }
// console.log(arr);
//==============================================Задание №13==================================//
// let n = +prompt('Введите длину масива')
// const arr = [];
// let str;
// for (var i=1; i<=n; i++) {
//     str = '';
//     for (var j=1; j<=i; j++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);
//==============================================Задание №14==================================//
// let arr = [];
// for (let i = 1; i < 11; i++) {
//     const testArray = [];
//     for (let j = 1; j < 11; j++) {
//         let el = i === j - j + 10 ? 'x' : i === i - j +10 ? 'x' : i === j - j +1 ? 'x' : i === i - j +1 ? 'x' : '0';
//
//         testArray.push(el);
//
//     }
//     arr.push(testArray);
// }
// console.log(arr, 'arr')
//==============================================Задание №15==================================//
// var output = '';
// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= 10; j++) {
//         output += ' ' + i * j;
//         if (i * j < 11) {
//             output += ' ';
//         }
//     }
//     console.log(output);
//    output = '';
// }
//============================================================================================//
// let arr = [];
// // let arrHeight = 9;
// // let arrWidth = 9;
//
// for (let i = 0; i <= 9; i++) {
//     arr[i] = [];
//     for (let j = 0; j <= 9; j++) {
//         arr[i][j] = (j + 1) * (1 + i);
//
//     }
// }
// console.log(arr);
//==============================================Задание №16==================================//
// let Nubmer = +prompt('Введите количество Ваших товаров:');
// const arrWords = [' товар', ' товара', ' товаров']
// function word(Number) {
//     let result
//     let count = Nubmer % 100;
//     if (count >= 5 && count <= 20) {
//         result = arrWords['2'];
//     } else {
//         count = count % 10;
//
//         if (count === 1) {
//             result = arrWords['0'];
//         } else if (count >= 2 && count <= 4) {
//             result = arrWords['1'];
//         } else {
//             result = arrWords['2']
//         }
//     }
//     return result;
// }
// alert(`В вашей корзине ${Nubmer}` + word());















