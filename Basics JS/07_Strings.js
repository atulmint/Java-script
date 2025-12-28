
//Aise string declare karte hai
//Single quotes
let singleQuoteString = 'Hello, World!';

//Double quotes
let doubleQuoteString = "Hello, World!";

//Backticks (Template literals)
let backtickString = `Hello, World!`;

// Example usage of template literals        
const name = "Atul";
const repoCount = 50

//console.log (name + repoCount + " Value");

console.log (`Hello my name is ${name} has ${repoCount} repositories`);


//String concatenation
let greeting = "Hello, ";
let name1 = "Alice";
let fullGreeting = greeting + name1; // "Hello, Alice"

//Aise bhi string bana sakte hai

const gameName = new String ('Football');
console.log (gameName);
//Using template literals
let age = 25;
let templateLiteralGreeting = `Hello, my name is ${name1} and I am ${age} years old.`;

//String methods
let sampleString = "  JavaScript is awesome!  ";
console.log(sampleString.length); // Length of the string

console.log(sampleString.toUpperCase()); // Convert to uppercase

console.log(sampleString.toLowerCase()); // Convert to lowercase

console.log(sampleString.trim()); // Remove whitespace from both ends

console.log(sampleString.includes("awesome")); // Check if substring exists

console.log(sampleString.slice(2, 12)); // Extract a part of the string

const url = "https://www.example.com/path/to/page?query=123";
console.log(url.replace("https://", "http://")); // Replace part of the string

//USe charatAt to get character at specific index
console.log(sampleString.charAt(5)); // Get character at index 5

//Use indexOf to find the position of a substring
console.log(sampleString.indexOf("awesome")); // Find the position of "awesome"

// const newString = Pagla.substring(0, 3); // "Pagla"
// console.log (newString);

// const anotherString = Pagla.substr(-2, 4); // "gla"
// console.log (anotherString);


