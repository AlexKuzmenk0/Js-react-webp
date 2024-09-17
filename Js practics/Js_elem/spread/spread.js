"use strict";

// let a = 5,
//   b = a;
    
// b = b + 5;
// console.log(b);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};
  
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// //*
// const numbers = {
//   a: 2,
//   b: 5,
//   c: { 
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);
//*

// const add = {            //* обьединяем add с numbers
//   d: 17,
//   e: 21
// }
// console.log(Object.assign(numbers, add));


//* оператор разворота
// const video = ['yotube', 'vimeo', 'uatube'],
//   blogs = ['wordpress', 'ivejournal', 'bloggs'],
//   internet = [...video, ...blogs, 'fc', 'uagatka'];
// console.log(internet);
//*

//*
// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);
//*

//*
// const arr = ['a', 'b'];
// const newArr = [...arr];
// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = { ...q };
// console.log(newObj);