'use strict';

// const btns = document.querySelectorAll('button'),
//   wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));


// if (btns[1].classList.contains('red')) {
//   console.log('red');
// };

//* Используется только в сложных скриптах
// btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }
  //* Можно использовать только в коротких скриптах
//   btns[1].classList.toggle('red');  
// });

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.matches('button.red')) {
//     console.log('hey')
//   }
// });

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('hello');
//   });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn)

//* Cкрипты и время их выполнения
//* Первым аргументом передам функцию вторым аргументом время через которое будет запущена эта функция и третья аргумент этот текст

// const btn = document.querySelector('.btn');
// let timerId,
//   i = 0;

// function myAnim() {
//   const elem = document.querySelector('.box');
//   let pos = 0;
//   const id = setInterval(frame, 10);

//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   };
// };
// btn.addEventListener('click', myAnim);


// btn.addEventListener('click', () => {
//   // const timerId = setTimeout(logger, 2000, 'hello');
//   timerId = setInterval(logger, 500);

// });


// function logger() {
//   if (i === 3) {
//     clearInterval(timerId); //* останавливает пополнение кода
//   };
//   console.log('text');
//   i++;
// };

// let id = setTimeout(function log() {
//   console.log('rrrrrr');
//   id = setTimeout(log, 500)
// }, 500);