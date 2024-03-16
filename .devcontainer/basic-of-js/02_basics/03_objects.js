//singleton 
//object.create

// objcet literals


const mySym = Symbol("key1") 


const jsUser = {
    name: "hike",
    "fullName": "hike sodi", // key is generally default understable as String , but if you declare it
    //like String then you can not access like  Object.key, you'll need to write this obj["key"].
    age: 18,
    location: "jaipur",
    [mySym]: "mykey1", // Symbol is declare like as key in sqr []
    isLogeedIn: false,
    email: "sawkrish@gmail.com",
    lastLoginDays: ["monday", "saturday"]
}
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser.mySym); // here will be undefiend this is not a way for accessing obj
// console.log(jsUser[mySym ]); // you need to use sqr [] notation for accessing a Symbol

jsUser.email = "gkusd@gmail.com" // for cahanging
//Object.freeze(jsUser) // for Freezing object , then you can't changes key's values
jsUser.email= "ukuryu@gmail.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello Js user");
    
}

jsUser.greeting2 = function () {
    console.log(`Hello Js user, ${this.name}`);
    
}
//console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());



