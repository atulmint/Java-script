// const tinderUser = new Object() .....// this is the signleton pattern to create object in JS

//output is : {}

tinderUser.id = "123abc"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false

 //console.log(tinderUser);

const tinderUser = {} // this is the non singleton pattern to create object in 
//Output is : {} same as above

const regualarUser = {
    email: "some@some.com"
fullname: {
        userFullName: {
            firstName: "Hitesh",
            lastName: "Choudhary"
        }
}
} // nested object
//console.log(regualarUser.fullname.userFullName.firstName);

//another way to create objects is to use Object.create
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // this will not work as expected
//output is : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)// this will work as expected and merge all objects
//output is : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/*mustly used */  const obj3 = { ...obj1, ...obj2, ...obj4 } // this will also work as expected and merge all objects
//output is : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//console.log(obj3);        

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // to get all keys of object
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]