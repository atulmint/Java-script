const marvel_heros = ["thor", "Ironman", "spiderman"] // array literal syntax
const dc_heros = ["superman", "flash", "batman"]// array literal syntax

// marvel_heros.push(dc_heros) // adds dc_heros as a single element at the end of marvel_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // to access flash from the above pushed array

// const allHeros = marvel_heros.concat(dc_heros)    // merges two arrays
// console.log(allHeros);                          // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]  // merges two arrays using spread operator

// console.log(all_new_heros);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // nested array

const real_another_array = another_array.flat(Infinity) // flattens the nested array to a single level array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // false
console.log(Array.isArray(["Hitesh"])) // true
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting output: [ undefined ]

let score1 = 100 // number of elements to be added in the array 
let score2 = 200 // number of elements to be added in the array
let score3 = 300 // number of elements to be added in the array

// creates an array with length equal to the value of score1, score2 and score3
console.log(Array(score1, score2, score3)); // [ 100, 200, 300 ]

// creates an array with score1, score2 and score3 as elements

console.log(Array.of(score1, score2, score3));