const score = 400
// console.log(score); 

const balance = new Number(100)
// console.log(balance);some methods of number object

// console.log(balance.toString().length); so the length will be 3 as it converts to string "100"

// console.log(balance.toFixed(2)); // here it will show 100.00     
// console.log(balance.toFixed(1)); Here    

const otherNumber = 123.8966 // .toFixed(2)
// console.log(otherNumber.toFixed(2)); // it will round off to 2 decimal places 123.90

// .toPrecision() method

// console.log(otherNumber.toPrecision(4)); // it will show total 4 digits including before and after decimal 123.9

// .valueOf() method

// console.log(otherNumber.valueOf()); // it will return the primitive value of the number 123.8966

const hundreds = 1000000 //
// console.log(hundreds.toLocaleString('en-IN')); // it will format the number according to Indian numbering system 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // it will show all the math methods and properties
// console.log(Math.PI); // it will show the value of PI 3.141592653589793
// console.log(Math.E); // it will show the value of Euler's number 2.718281828459045
// console.log(Math.sqrt(16)); // it will show the square root of 16 which is 4
// console.log(Math.abs(-4)); // it will show the absolute value of -4 which is 4
// console.log(Math.round(4.6)); // it will round off the number to nearest integer 5
// console.log(Math.ceil(4.2)); // it will round up the number to next integer 5
// console.log(Math.floor(4.9));    // it will round down the number to previous integer 4
// console.log(Math.min(4, 3, 6, 8));  // it will show the minimum number among the given numbers 3
// console.log(Math.max(4, 3, 6, 8));  // it will show the maximum number among the given numbers 8

console.log(Math.random()); // it will show a random number between 0 and 1 like 0.123456789
console.log((Math.random()*10) + 1); // it will show a random number between 1 and 10 like 5.67891234
console.log(Math.floor(Math.random()*10) + 1); // it will show a random integer between 1 and 10 like 7

const min = 10 // minimum value
const max = 20 // maximum value

//Generate random number between min and max

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // it will show a random integer between 10 and 20 like 15