// singleton 
// Object.create this is another way to create objects in JS for singleton pattern

// object literals is the most common way to create objects in JS

const mySym = Symbol("key1") // unique identifier: means no one can access this key except us


const JsUser = {
    name: "Hitesh", // key: value pairs and properties
    "full name": "Hitesh Choudhary", // keys with spaces must be in quotes
    [mySym]: "mykey1", // symbol as key
    age: 18, // number
    location: "Jaipur", // string
    email: "hitesh@google.com", // string
    isLoggedIn: false, // boolean
    lastLoginDays: ["Monday", "Saturday"] // array 
}

// console.log(JsUser.email) 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // these all are different ways to access object properties

JsUser.email = "hitesh@chatgpt.com" // updating object property
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"// will not update because of freeze
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user"); // method inside object and function expression
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // method with this keyword to access object properties
}

console.log(JsUser.greeting());// calling methods inside object
console.log(JsUser.greetingTwo());// calling methods inside object