'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE = It's immutable
console.log(arr.slice(1, 3));
console.log(arr.slice(1, -2));
//Shallow copy
console.log(arr.slice());

// SPLICE = It's mutable
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
