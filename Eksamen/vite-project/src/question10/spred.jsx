// Spread i arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // arr2 bliver [1, 2, 3, 4, 5]

// Spread i objekter
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // obj2 bliver { a: 1, b: 2, c: 3 }

// Spread i funktionskald
const add = (a, b, c) => a + b + c;
const numbers = [1, 2, 3];
console.log(add(...numbers)); // Output: 6
