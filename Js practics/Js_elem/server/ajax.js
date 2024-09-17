'use strict';

const inputUsd = document.querySelector('#usd'),
			inputEuro = document.querySelector('#euro');

inputUsd.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	request.open('GET', './current.json', );
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	request.addEventListener('load', () => {
		if(request.status === 200) {
			// console.log(request.response);
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputEuro.value /  data.current.usd).toFixed(2);
		} else{
			inputUsd.value = "Error";
		};
	});

	// status
	// statusText
	// response
	// readyState

});