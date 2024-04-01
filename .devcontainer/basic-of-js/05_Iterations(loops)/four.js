const myObject = {
    js : "java script",
    cpp : "c++",
    Rb : "ruby ",
    swift : " Swift by Apple"
}

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = [ "js", "cpp","rb","py",'java']
for (const key in programming) {
    console.log(programming[key]);
}