'use strict';

//! https://github.com/yankovalenko94/JS_task_answers/blob/master/JS_step_4/script.js 


//* 1)
// const numberOffilms = +prompt('How many films have you already watched?', '');

// const personalMovieDB = {
//   count: numberOffilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// }

// const a = prompt('One of the last movies watched?', ''),
//   b = prompt('How mach would you rate it?', ''),
//   c = prompt('One of the last movies watched?', ''),
//   d = prompt('How mach would you rate it?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
//*



//* 2)
// const numberOffilms = +prompt('How many films have you already watched?', '');

// const personalMovieDB = {
//   count: numberOffilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// }


// 1)
// const a = prompt('One of the last movies watched?', ''),
//   b = prompt('How mach would you rate it?', ''),
//   c = prompt('One of the last movies watched?', ''),
//   d = prompt('How mach would you rate it?', ''); 
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// 2)
// for (let i = 0; i < 2; i++){
// //! вопросы задаются по 2 раза
//   const a = prompt('One of the last movies watched?', ''),
//          b = prompt('How mach would you rate it?', '');
// //! цыкл 
//   if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--; 
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('few');
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//   console.log('average');
// } else if (personalMovieDB.count >= 30) {
//   console.log('a lot of');
// } else {
//   console.log('error');
// }


// console.log(personalMovieDB);
//*


//* 3)
// let numberOffilms;

// function start() {
//   numberOffilms = +prompt('How many films have you already watched?', '');

//   while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) {
//    numberOffilms = +prompt('How many films have you already watched?', '');
    
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOffilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// }


// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++){
// //! вопросы задаются по 2 раза
//     const a = prompt('One of the last movies watched?', ''),
//           b = prompt('How mach would you rate it?', '');
// //! цыкл 
//     if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--; 
//     }
//   }
// }
 
// // rememberMyFilms();


// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('few');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//     console.log('average');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('a lot of');
//   } else {
//     console.log('error');
//   } 
// }
 
// // detectPersonalLevel(); 


// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++){
//     personalMovieDB.genres[i - 1] = prompt(`Your favorite geners? number ${i}`);
//   }
// }

// writeYourGenres();
//*


//* 4)
// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: () => {
//     personalMovieDB.count = +prompt('How many films have you already watched?', '');

//     while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
//       personalMovieDB = +prompt('How many films have you already watched?', '');
    
//     }
//   },
//   rememberMyFilms: () => {
//     for (let i = 0; i < 2; i++) {
//       //! вопросы задаются по 2 раза
//       const a = prompt('One of the last movies watched?', ''),
//         b = prompt('How mach would you rate it?', '');
//       //! цыкл 
//       if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//       } else {
//         console.log('error');
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: () => {
//     if (personalMovieDB.count < 10) {
//       console.log('few');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//       console.log('average');
//     } else if (personalMovieDB.count >= 30) {
//       console.log('a lot of');
//     } else {
//       console.log('error');
//     }
//   },
//   showMyDB:(hidden) => {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: () => {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false; 
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGenres:() => {
//     for (let i = 1; i <= 3; i++){
//       let genre = prompt(`Your favorite geners? number ${i}`);

//       if (genre == '' || genre == null) {
//         console.log('Arror!!! Try again.')
//       } else {
//         personalMovieDB.genres[i - 1] = genre;
//       }
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`You favorit genre ${i + 1} - its ${item}`);

//     });
//   }

// };
//*

//* 5)
/* 
1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img'),
//   poster = document.querySelector('.promo__bg'),
//   genre = poster.querySelector('.promo__genre'),
//   moviList = document.querySelector('.promo__interactive-list');



//! 1) задание
// //* 1) спопоб
// adv.forEach(item => {
//   item.remove();
// });
// //* 2) спопоб
// // adv.forEach (function(item) {
// //   item.remove();
// // });


//! 2) задание
// genre.textContent = 'драма';

//! 3) задание
// poster.style.backgroundImage = 'url("img/bg.jpg")';

//! 4) задание
// moviList.innerHTML = ''; // очищаем спсок
// movieDB.movies.sort();   // сортируем спсок
// movieDB.movies.forEach((film, i) => {     // выводим и перебераем спсок
//   moviList.innerHTML += `
//     <li class="promo__interactive-item"> ${i + 1} ${film}  //! 5) задание
//       <div class="delete"></div>
//     </li>
//   `;
// });
//*


//* 6)
/* 
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// document.addEventListener('DOMContentLoaded', () => {
//   const movieDB = {
//     movies: [
//       "Логан",
//       "Лига справедливости",
//       "Ла-ла лэнд",
//       "Одержимость",
//       "Скотт Пилигрим против..."
//     ]
//   };

//   const adv = document.querySelectorAll('.promo__adv img'),
//     poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre'),
//     moviList = document.querySelector('.promo__interactive-list'),
//     addForm = document.querySelector('form.add'),
//     addInput = addForm.querySelector('.adding__input'),
//     checkBox = addForm.querySelector('[type="checkbox"]');

//   // 1) задание
//   addForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     let newFilm = addInput.value;
//     const favorite = checkBox.checked;
//     // 2) задание
//     if (newFilm) {
//       if (newFilm.length > 10) {
//         newFilm = `${newFilm.substring(0, 11)}...`;
//       };
//       // 4) задание
//       if (favorite) {
//         console.log('Favorite film');
//       };

//       movieDB.movies.push(newFilm);
//       sortArr(movieDB.movies);
//       createMovieList(movieDB.movies, moviList);
//     };

//     event.target.reset();
//   });
  
//   const deleteAdv = (arr) => {
//     arr.forEach(item => {
//       item.remove();
//     });
//   };

//   const makeChanges = () => {
//     genre.textContent = 'драма';

//     poster.style.backgroundImage = 'url("img/bg.jpg")';
//   };

//   const sortArr = (arr) => {
//     arr.sort();
//   };

//   function createMovieList(films, parent) {
//     parent.innerHTML = '';
//     sortArr(films);

//     films.forEach((film, i) => {
//       parent.innerHTML += `
//         <li class="promo__interactive-item"> ${i + 1} ${film}
//           <div class="delete"></div>
//         </li>
//       `;
//     });
//     // Удаляем фильмы со страницы и из базы данных
//     document.querySelectorAll('.delete').forEach((btn, i) => {
//       btn.addEventListener('click', () => {
//         btn.parentElement.remove();
//         movieDB.movies.splice(i, 1);

//         createMovieList(films, parent);
//       });
//     });
//   };

//   deleteAdv(adv);
//   makeChanges();
//   createMovieList(movieDB.movies, moviList);
// });
//*
