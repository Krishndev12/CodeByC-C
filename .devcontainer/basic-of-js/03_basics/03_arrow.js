// this Keyword is used to Access for current context(i.e jo bhi content curly braces ke andar h)

const user = {
    username: "hike",
    price: 999,

    welcomeMessage: function(){
      //  console.log(`${this.username}, Welcome to Website ` );    
       // console.log(this);        //  ye print karta h pahle context kya tha and change kya hua h                                                      
    }

}
//  user.welcomeMessage()
// user.username = "shiku"
//  user.welcomeMessage() // yahan easily context , i.e value isiliye cahnge kar paye kyunki //=> ln8 this keyword use kiye the to value hardcode nhi tha sirf current context ke andar jo tha wo print kar do.

 //console.log(this); // output {}, kyunki abhi hamm node environment ke andar h & global ke andar koi Context nhi h to empty hai output 

// function chai(){
//     let userName = "hike"
//     console.log(this.username)// function me this keyword use nhi hota h
// }
// chai()

// const chai = function chai(){
//     let userName = "hike"
//     console.log(this.username)
// }
// chai()

// ++++++++++++++++++++++ Arrow function +++++++++++++++++++++

const chai = () => {
    let userName = "hike"
    console.log(this);
     // console.log(this.username)
}

chai()

//  const addTwo= (num1,num2) => {            // explicit return , jab bhi curly braces aayega return karna padega
//     return num1+num2


// }

//const addTwo = (num1, num2) => num1+num2      // implicit return i.e hame curly braces ke andar return nahi karan padta h

// const addTwo = (num1,num2) => (num1+num2)  // barcket aane ke baad bhi return nhi nhi karna padta h

const addTwo = (num1,num2) => ({userName:"gwfkurw"}) // barces use karne se return nhi karna padta h , braces use kar ke uske andar object bhi access kar sakte h

console.log(addTwo(6,8))




