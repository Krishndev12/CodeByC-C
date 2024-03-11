// ******** Primitive dataTypes *********

// 7 types : number, boolean, symbol, null, undefiend, string, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false

const OutSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('symbol')
console.log(id==anotherid);

const BigNumber = 6259186903470n


// ************* Non-Primitive dataTypes (Reference Data Types) *****************

// Array, Obj, Function

const heroes = ["shaktiman","naagraj","doga"]

let myObj =
{
    name: "righh",
    age : 22


}


const myFunction = function() {
    console.log("Hello world");
    
}

console.log(typeof BigNumber);
console.log(typeof OutSideTemp);
console.log(typeof heroes);


console.log(Array.isArray(heroes)); //Using Array.isArray() is a more accurate way to check if a variable is an array in JavaScript.


/*I apologize for any confusion. You are correct, and I appreciate your clarification. In JavaScript, the typeof operator treats arrays as a subtype of objects. When you use typeof on an array, it will return 'object'.

So, even though heroes is an array, the typeof operator categorizes it as an object. Arrays are a specific type of object in JavaScript, but if you want to specifically check if a variable is an array, you can use Array.isArray(): */

console.log(typeof myFunction);
console.log(typeof anotherid);