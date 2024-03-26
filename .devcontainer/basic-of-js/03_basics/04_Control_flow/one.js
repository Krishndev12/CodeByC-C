// >,<,<=,>=,==.===,!=,!==

// const isLoggedIn = "true"
// if(1==1){
//     console.log(isLoggedIn);
// }
// console.log("hi guys how was your clg life");

// if(1==1){
//     console.log(isLoggedIn);
// }else{
// console.log("hi guys how was your clg life");
// }


// const isTheme = "dark"
// if(isTheme=="dark"){
//     let name = "hike"
//     console.log(`yes the color: ${isTheme}`);
// }

// //console.log(name);

// const balance = 1000
// if(balance>500) console.log(balance);

// const balance2 = 2000
// if(balance2>1000) console.log(balance2),
// console.log("yes");

const balance = 1999
if(balance>1999){
    console.log("greater");
}else if(balance==1999) {
    console.log("equal");
}else {
    console.log("less");
}

const userLoggedIn = true
const debitCard = true
const noInstallment = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && noInstallment){  // All should be true , if anyone will be false then uske andar hi nhi jayega
    console.log("Allowed to by the course" )
}

if(loggedInFromGoogle || loggedInFromEmail ){ // you can check multiple conditions
    console.log("user is allowed to buy the course");
}

