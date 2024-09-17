"use strict";

// const box = document.getElementById("container");
// console.log(box);

// const btns = document.getElementsByTagName("button")[1];   //* Обращаемся ко второй кнопке из колекции
// console.log(btns);

// const btns = document.getElementsByTagName("button");   //* Обращаемся ко второй кнопке
// console.log(btns[1]);

//  

// const firstBtn = document.querySelector('.container_btn');
// console.log(firstBtn);

// const box = document.getElementById('box'),
//   btns = document.getElementsByTagName('button'),
//   circles = document.getElementsByClassName('circle'),
//   wrapper = document.querySelector('.wrapper'),
// //! для получения элементов из конкретного блока
//   hearts = wrapper.querySelectorAll('.heart'), 
//   oneheart = wrapper.querySelector('.heart');
//   // hearts = document.querySelectorAll('.heart'),
//   // oneheart = document.querySelector('.herat');

// // box.style.backgroundColor = 'green';
// // box.style.width = '50%';

// box.style.cssText = 'background-color: green; width: 50%';  // сокращенный код

// btns[3].style.backgroundColor = 'red';
// btns[3].style.borderRadius = '100px';


// стилизация нескольких элементов
//* 1)
// for (let i = 0; i < hearts.length; i++){
//   hearts[i].style.backgroundColor = 'black';
// };

//* 2)
// hearts.forEach(item => {
//   item.style.backgroundColor = 'black'
// });

// Для использования в react [.createElement] этот метод создает элемент только внутри js (все построено на скриптах)
// const div = document.createElement('div');
// // const p = document.createElement('p');

// div.classList.add('black');
// // p.classList.add('white');

// // document.body.append(div);
// wrapper.append(div);          // в конец кода
// // wrapper.appendChild(div);  //старая версия
// // wrapper.prepend(p);        // в начало кода
// // wrapper[2].before(div);    // перед элементом
// // wrapper[0].after(div);     // после элемента
// // wrapper[1].remove();       // удаляет элемент
// // circles[1].replaceWith(hearts[0]);     // заменяет элемент на другой

// div.innerHTML = ('<h1>Hello mather FUCKER!!!!</h1>');
// div.style.width = '50%';

// div.insertAdjacentHTML('beforebegin', '<h2>Hello BRO!!!</h2>');  /// вставляет код перед,после элементом

// создатие текстовых узлов
// const text = document.createTextNode('Hello mother Fucker');
