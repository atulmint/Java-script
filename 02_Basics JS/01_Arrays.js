// array

const myArr = [0, 1, 2, 3, 4, 5] // array literal syntax
const myHeors = ["shaktiman", "naagraj"] // array of strings

const myArr2 = new Array(1, 2, 3, 4) // array constructor syntax
// console.log(myArr[1]); // accessing array element by index

// Array methods functions that can be performed on arrays

// myArr.push(6) // adds element at the end of the array
// myArr.push(7) // adds element at the end of the array
// myArr.push(8) // adds element at the end of the array
// myArr.pop() // removes element from the end of the array

// myArr.unshift(9) // adds element at the beginning of the array
// myArr.shift() // removes element from the beginning of the array

// console.log(myArr.includes(9)); // console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));   // console.log(myArr.indexOf(9)); // returns -1 if element not found

// reverse
// myArr.reverse()

// console.log(myArr);

// concat
// const newArr = myArr.concat([6,7,8,9])

// console.log(myArr);
// console.log( newArr);

// join

// const newArr = myArr.join() // converts array to string

// console.log(myArr); // original array
// console.log( newArr); // string output


// slice, splice // both are used to extract elements from an array

console.log("A ", myArr); // original array

const myn1 = myArr.slice(1, 3) // does not change the original array

console.log(myn1); // extracted elements
console.log("B ", myArr); // original array


const myn2 = myArr.splice(1, 3) // changes the original array
console.log("C ", myArr); // original array after splice
console.log(myn2); //the outputs is [0,4,5] because elements from index 1 to 3 are removed from original array