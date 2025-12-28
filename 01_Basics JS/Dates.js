 // Dates

let myDate = new Date()                        // Current Date and Time
// console.log(myDate.toString());            // it will show the current date and time in string format
// console.log(myDate.toDateString());       // it will show only the date part in string format
// console.log(myDate.toLocaleString());    // it will show the date and time in local format
// console.log(typeof myDate); 
 
// Specific Date

// let myCreatedDate = new Date(2023, 0, 23)           // Jan is 0 month
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)    // Jan is 0 month with time
// let myCreatedDate = new Date("2023-01-14")     // another way to create date
let myCreatedDate = new Date("01-14-2023")        // another way to create date
// console.log(myCreatedDate.toLocaleString());     // it will show the date and time in local format

let myTimeStamp = Date.now()                      // it will give the timestamp in milliseconds

// console.log(myTimeStamp); // it will show the current timestamp in milliseconds
// console.log(myCreatedDate.getTime());  // it will show the timestamp of the created date in milliseconds
// console.log(Math.floor(Date.now()/1000));  // it will show the current timestamp in seconds

// Getting the individual date components

let newDate = new Date() // current date
console.log(newDate); // it will show the current date and time
console.log(newDate.getFullYear()); // it will show the current year like 2023
console.log(newDate.getMonth() + 1); // it will show the current month like 1 for Jan (0-11)
console.log(newDate.getDay()); // it will show the current day of the week like 0 for Sun (0-6)
console.log(newDate.getDate()); // it will show the current date of the month like 14 (1-31)
console.log(newDate.getHours()); // it will show the current hour like 14 (0-23)
console.log(newDate.getMinutes()); // it will show the current minutes like 30 (0-59)
console.log(newDate.getSeconds()); // it will show the current seconds like 45 (0-59)
console.log(newDate.getMilliseconds()); // it will show the current milliseconds like 123 (0-999)

// Formatting the date

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { 
    weekday: "long",
    
}) // it will show the full name of the day like "Saturday"