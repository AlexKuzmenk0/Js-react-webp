'use strict';

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.querySelector('#current').parentNode.parentElement);
// console.log(document.querySelector('[data-current="3"]').nextSibling);

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
};