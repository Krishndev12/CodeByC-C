function one(){
    const userName = "Hitesh"

    function Two() {
        const Website = "Youtube"
        //console.log(userName);  // Child function Can Access parent function but , Parent function can not access child Function.
    }
  //  console.log(Website);
    Two()
}

// one()

//*********** Same like on Loops ************************

if(true){
    const userName = "Hike"
    if (userName==="Hike") {
        const Website = " Topper World"
        // console.log(userName+Website);
    }
   // console.log(Website);
}
//console.log(userName);



//++++++++++++++++++++ Interesting Bout Functions +++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num+1
    
}
addOne(5)


console.log(addTwo(5))
const addTwo = function(num){
  return num+2
}
addTwo(5)

// the concept of function hoisting in js , two different ways to declare function 
// in 1st one Can access 'addTwo' before initialization && in the second one Cannot access 'addOne' before initialization.



