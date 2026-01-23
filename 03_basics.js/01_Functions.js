function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
} //this is function declaration

// sayMyName() //function invocation / function call

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 // directly return the sum
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
} // function with default parameter and concept of early return

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // this will return an array of all the rest parameters

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
} // this is for accessing object properties inside function and using them

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
}) // you can also pass object directly without storing it in a variable

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
} // passing array to function and returning second value from that array

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // you can also pass array directly without storing it in a variable