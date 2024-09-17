'use strict';

//! filter
// const names = ['Max', 'Dewids', 'Grue', 'AnnaTrincer'],
// 			shortName = names.filter((name) => {
// 				return name.length < 5;
// 			});

// console.log(shortName);

//! map
//* 1)
// const answers = ['sahda', 'KADknkad', 'alkdjalSss', 'KJHAFKHASLKF'],
// 			result = answers.map(item => item.toLowerCase());

// console.log(result);
//* 2)
// let answers = ['sahda', 'KADknkad', 'alkdjalSss', 'KJHAFKHASLKF'];
// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

//! every/some
// const oll = [4, 'dsf', 'sdfla'];
// console.log(oll.some(item => typeof(item) === 'number'));
// console.log(oll.every(item => typeof(item) === 'number'));

//! reduce
// const arr = [3, 4, 2, 6, 8, 5, 0],
// 			result = arr.reduce((sum, current) => sum + current);
// console.log(result);

// const arr = ['Hello', 'how', 'are', 'you'],
// 			result = arr.reduce((sum, current) =>  
// 			`${sum} ${current}`  		//! 1)
// 			/*sum + ' ' + current*/ //! 2)
// 		);
// console.log(result);


// const obj = {
// 	alex: 'person',
// 	gard: 'person',
// 	lion: 'animal',
// 	giraf: 'animal',
// 	cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'person')
// .map(item => item[0]);

// console.log(newArr)