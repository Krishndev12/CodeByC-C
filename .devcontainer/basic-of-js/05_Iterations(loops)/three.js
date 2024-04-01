// for of 

let myArray = [7,3,2,1,6,8]
for (const num of myArray) {
   // console.log(`numbers present in myArray ${num}`)
}

let greeting = "Hello World"
for (const greet of greeting) {
   // console.log(greet);
}

// map :- it is known for unique value and gives output in the order

const map = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN',"India")
//console.log(map);


for (const key of map) {
//console.log(key);
    
}
for (const [ key , value] of map) {
//console.log(key, `:-` , value);
    
}

let myObject = {
    game1 : "nfc",
    game2 : "spc"
}

for (const [key , value] of Object.entries(myObject)) {
    console.log(key , `:-` , value);
    
}

