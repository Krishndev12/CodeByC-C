// Array
const myArr = [1,3,5,4,7]
// const stars = ["kohli","sharma","rahul","pandya"]
// const myArr2 = new Array (1,3,5,4)
// console.log(myArr[1]);

// console.log(myArr2[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // no need of argument there will be automatically delete the last element of the array 
// myArr.unshift(5) // for adding in starting index
// myArr.shift()  //no need of argument there will be automatically delete the first element of the array 
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArray = myArr.join() // it changes obj into String and binds them 
// console.log(myArr);
// console.log(newArray);



// Slice, Splice

console.log("A", myArr);

const myN1 = myArr.slice(1,3)// it doesn't change original array  , 3rd will be not considered.

console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1,3) // it changes the original value  , 3rd will be not considered.
console.log("C" , myArr);
console.log(myN2);






