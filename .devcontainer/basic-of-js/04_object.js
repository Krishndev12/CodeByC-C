// Singleton obj

//const tinderUser = new Object() // singleton 

const tinderUser = {} // non-singleton obj

tinderUser.id = "abc123"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


// const regularUser = {
//     email : "dytkdjyh@gmail.com",
//     fullName:{
//         userFullName:{
//             firstName: "hike",
//             lastName: "tichkule"

//         }
//     }

// }
//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = Object.assign(obj1,obj2)  // both gives same result line 30 & 31 but line 31 is more professional and more it is used
//const obj3 = Object.assign(obj1,obj2) // here is guarnteed result

const obj3 = {...obj1,...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "hk@gmail.com"
    },
    {
        id: 2,
        email: "hl@gmail.com"
    },
    {
        id: 3,
        email: "hp@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));// in line 53 & 54 both gives output in Array datatypes and whereever we can use loop and use at many places
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// when value doesn't exist you can ask
// console.log(tinderUser.hasOwnProperty('isloggedOut'));

const course = {
    couseName: "js hindi course",
    price: "999",
    courseInstructor: "kevin petersen"

}
console.log(course.courseInstructor)

const{courseInstructor}= course
console.log(courseInstructor);

// destructuring of object

const{courseInstructor: instructor}= course
console.log(instructor);


// API json me hota hai , here you get within object

{
    "name": "hitesh",
    "coursenmae": "js in hindi",  // json ka key and values both , you need to declare in "String"
    "price": "free"
}

// sometimes you get API within Array

[
    {},
    {},
    {}
]