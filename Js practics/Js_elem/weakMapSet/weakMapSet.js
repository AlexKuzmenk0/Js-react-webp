'use strict';

// let user = { name: 'Ivan' };

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;
// console.log(map.has(user));

// let cache = new WeakMap();

// function cahcheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Data.now());
//   };

//   return cache.get(user);
// };

// let gabi = {name: 'Gabriela'};
// let lex = {name: 'Alex'};

// cahcheUser(gabi);
// cahcheUser(lex);

// gabi = null;

// console.log(cache.has(gabi));
// console.log(cache.has(lex));


// let messages = [
//   { text: 'Hello', from: 'Alex' },
//   { text: 'World', from: 'Katly' },
//   { text: '...', from: 'Bartek' }
// ];


// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[2]);
// messages.shift()

// console.log(readMessages.has(messages[0]));

