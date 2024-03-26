// Immediately Invoked Function Expression (IIFE) 

//NOrmal Call

// function chai(){
//     console.log(`dB CONNECTED`);
// }
// chai()

// IIFE Call , jo function immediately invoked ho jaye , kyunki Global scope ke pollution se problem hoti hai kai baar to jo global scope ke va hote h uske po;;ution ko hatane ke IIfe use hota

(function chai(){  // Named IIFI
    console.log(`DB CONNECTED`);  // here ; it is necessary
})()   ; // yahan ; dena jaruri h kyunki invoked to ho jata h lekin isko pata nhi h ki rokna kahan h isliye yahan end karna padta h, jab multipe IIFE us ekarte h.
  // ()() Two parenthesis , in 1st one we write the defination of function and in the 2nd one we use for execution call .
   
(()=>{ // Unnamed EFFI
    console.log(`DB CONNECTED TWO`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})(`hitesh`);


// do effi us ekaren ke liye 1st one me ; se end karna padta h


