'use strict';

// let num = 50;
//* 1 цикл
// while (num <= 55) {
//   console.log(num);
//   num++
// }

//* 2 цикл 
// do {
//   console.log(num);
//   num++
// } 
// while(num < 55)

//* 3 цикл 
// for (let i = 1; i < 8; i++){
//   console.log(num);
//   num++
// }

// for (let i = 1; i < 10; i++){
//   if (i === 6) {
//     // break;
//     continue; //* позволяет пропустить шаг но не прерывает цыкл
//   }

//   console.log(i);
// }


//* цыкл в цыкле  
// for (i = 0; i < 3; i++){
//   console.log(i);
//   for (j = 0; j < 5; j++){
//     console.log(j);
//   }
// }

// let result = '';
// const lengths = 7;

// for (let i = 1; i < lengths; i++){
//   for (let j = 0; j < i; j++){

//     result += '*';
//   }

//   result += '\n'; //* Перенос на след строку
// }

// console.log(result);
// *
// **
// ***
// ****
  

//* цыкл в цыкле 
// start: for (i = 0; i < 3; i++){
//   console.log(`first level: ${i}`);
//   for (j = 0; j < 3; j++){
//     console.log(`second level: ${j}`);
//     for (k = 0; k < 3; k++){
//       if(k === 2) continue start    //**break
//       console.log(`third level: ${k}`);
//     }
//   }
// }