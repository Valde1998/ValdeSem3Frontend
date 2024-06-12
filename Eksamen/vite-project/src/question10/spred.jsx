
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; 


const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; 


const add = (a, b, c) => a + b + c;
const numbers = [1, 2, 3];
console.log(add(...numbers)); 
