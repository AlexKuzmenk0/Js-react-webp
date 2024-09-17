'use strict';
// new RegExp('pattern', 'flags'); Старая версия синтаксиса

// /pattern/flags // новая более понятная версия синтаксиса
// flags
// i - Можем найти Вне зависимости от регистра
// g - Когда нужно найти несколько вхождений Глобально
// m - Многострочный режим

// classes
// \d - Ищет цифры
// \w - ищем все слова
// \s - Ищем все пробелы
// \D - Ищет не цифры
// \W - Ищет не слова

// const ans = prompt('What is your name?');

// const reg = /n/ig;

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const answer = prompt('Password');
// console.log(answer.replace(/./g, "*"));

// console.log('12-34-12'.replace(/-/g, ':'));

// const year = prompt('What the year now?');
// const ans = /2012/ig;
// console.log(ans.test(year));

// const year = prompt('What the year now?');
// const ans = /\d/;
// console.log(year.match(ans));

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i))