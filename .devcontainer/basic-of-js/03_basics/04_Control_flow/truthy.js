const userEmail = "ikhg@gmail.com"
if (userEmail) {  // yahan per koi comparison nhi kiya gya h jaise userEmail==, userEmai!= isiliye ye assume kiya jata h ki hamesha true rahta hai i.e truthy 
    console.log("found userEmail");
}

const userEmails2 = []  // empty array me true consider kiya jata h
if (userEmails2) {  // 
    console.log("found userEmails2");
}else{
    console.log("didn't get user email");
}

const userEmails = ""  // empty String me false consider me kiya jata h 
if (userEmails) {   
    console.log("found userEmails");
}else{
    console.log("didn't get user email");
}


// falsy values 

//false,0,-0,BigInt 0n, "", null,undefined,NaN

// truthy values 

"0", 'false', " ",[],{},function () {}
    
// how to check empty string in condition 

if(userEmails2.length=== 0){
    console.log("array is empty");
}

// how to Chcek Empty object in Condition 
const emptyObj= {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}

// interesting facts 

false== 0
true

false==''
true

0==''
true


// Nullish Coalesing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15  // jo first value mil jata h wahi print hi jata hai , here is 10

console.log(val1); 

// Ternary Operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("greater than 80");