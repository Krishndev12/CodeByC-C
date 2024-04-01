const Coding = ["js","ruby","java",'python',"cpp "]
//  Coding.forEach(function (val) {
//     console.log(val);
    
//  })

// Coding.forEach((item) => {
// console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// Coding.forEach(printMe)

// Coding.forEach((item, index, arr)=>{
// console.log(item,index,arr);
// })


// Objects inside Array

const myCoding = [
    {
        languageName: "javascript ",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python ",
        languageFileName: "py"
    }
]
myCoding.forEach((item)=>
{
    console.log(item.languageName);
})
