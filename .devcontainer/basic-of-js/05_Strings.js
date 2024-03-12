const name = "Hitesh"
const repoCount = 50

// console.log(name+ repocount + "value");

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('hiteshhc')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(Object.getPrototypeOf(gameName));
console.log(Object.create(gameName));

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const anotherid1 = "         hikes      "
console.log(anotherid1);
console.log(anotherid1.trim());





