'use strict';

// рекурсия это когда функция вызывает сама себя


// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x
//   };

//   return result; 
// };

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }




// let studens = {
//   js: [{
//     name: 'John',
//     progress: 100
//   }, {
//     name: 'Ivan',
//     progress: 60
//   }],
//   html: {
//     basic: [{
//       name: 'Peter',
//       progress: 20
//     }, {
//       name: "Anna",
//       progress: 18
//     }],
//     pro: [{
//       name: 'Same',
//       progress: 10
//     }],
//     semi: {
//       studens: [{
//         name: 'test',
//         progress: 100
//       }]
//     }
//   }
// };

// // Считаем средний progres (рассчитано под определённую структуру)
// //! 1)
// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let studens = 0;

//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       studens += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         studens += subCourse.length;

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }

//   return total / studens;
// }

// // console.log(getTotalProgressByIteration(studens));
// //!

// // Работать с изменёнными данными
// //! 2)
// function getTotalProgressByRecursion(data) {
//   if (Array.isArray(data)) {
//     let total = 0;
    
//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }

//     return [total, data.length];
//   } else {
//     let total = [0, 0];

//     for (let subData of Object.values(data)) {
//       const subDataArr = getTotalProgressByRecursion(subData);
//       total[0] += subDataArr[0];
//       total[1] += subDataArr[1];
//     }
//     return total;
//   }
// }

// const result = getTotalProgressByRecursion(studens);

// console.log(result[0] / result[1]);
//!