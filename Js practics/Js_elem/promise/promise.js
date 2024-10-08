'use strict';
//! resolve
// console.log('Waiting for data...');

// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Preparation data...');
	
// 		const product = {
// 			name: 'tb',
// 			price: 34
// 		};
// 		resolve(product);
// 	}, 2000);
// });

// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			resolve(product);
// 		}, 2000);
// 	});
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then((data) => {
// 	console.log(data)
// });
//!

//! reject
// console.log('Waiting for data...');

// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Preparation data...');
	
// 		const product = {
// 			name: 'tb',
// 			price: 34
// 		};
// 		resolve(product);
// 	}, 2000);
// });

// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			reject();
// 		}, 2000);
// 	});
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then((data) => {
// 	console.log(data)
// }).catch(() => {
// 	console.error('ERROR');
// });


// const test = time => {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(), time);
// 	})
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('all')
// });

// Promise.race([test(1000), test(2000)]).then(() => {
// 	console.log('all')
// });