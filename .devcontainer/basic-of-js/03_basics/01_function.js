// function sayMyName() {
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
    
// }

// sayMyName : this is fn Reference 

// sayMyName() : this is fn execution

//sayMyName() // function calling
                                 
                                 //here you get value but result: undefiend

// function addTwoNumbbers(number1, number2){ // Parameters
//     console.log(number1+number2);
// }
// //const result = addTwoNumbbers(3,5) // Arguements
// console.log("result:",result);
                 
                 // here you get Result: 8
function addTwoNumbbers2(num1, num2) {
    // let result= num1+num2
    // return result

    return num1+num2
    console.log("Hitesh"); // return ke baad function koi kaam nhi karta h 

}
const result = addTwoNumbbers2(5,3)
//console.log("Result:",result);

function loginuserMessage(username="sam") { // for setting Default value if user doesn't give any value , if user gives any value overwrite i.e change ho jayegi.
    // yahan per kuchh bhi default pass karne se kabhi bhi undefiend nahi ho sakta.
    //if(username===undefined){
        if(!username){ // iska matlab username undefiend hai !(exclamination) isko opposite me change kar deta hai
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuserMessage("hike"));
console.log(loginuserMessage()); 


// when we Store single parameter 
function calculateCartPrice(num1) {
    return num1
    
}
console.log(calculateCartPrice(5)) // if you pass multiple arguments, here will be return on;y first arguments

// when we store multiple parameters, We use Rest operator(...)

// function calculateCartPrice(...num1) {
//     return num1 
    
// }
// console.log(calculateCartPrice(200,800,679,457));

function calculateCartPrice(val1,val2,...num1) {
    return num1 
    
}
console.log(calculateCartPrice(200,800,679,457));

// how to use obj in Function 

const user = {
    username: "Hike",
    price: "999"

}
                      //if i write there it'll fixed that only user object we can use but when we write anyobject we can use anyobject     
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// we get the object output but if , in the place of price there is cahnged prices there will bw price value undefiend then we need to check Typesaftey
// price is actually present or not when we're extracting , in Typescript that will automatically checked.


// We can pass object direct also 

function objHandler1(anyobject) {
    console.log(`my name is ${username}`);
    
}