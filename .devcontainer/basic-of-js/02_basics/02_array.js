const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]
const indianHeros = ["shaktiman","chhotaBheem","Ben10"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // here dc_heroes will be considered as single element

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_heroes = [...marvel_heros,...dc_heros,...indianHeros]
console.log(all_heroes);

const anothorArray = [1,2,3,[4,5,6],[3,4,[6,7]]]
const another_real_heroes = anothorArray.flat(Infinity)
console.log(another_real_heroes);

console.log(Array.isArray("hike"));
console.log(Array.from("hike")); // converts into array
console.log(Array.from({name: "hike"})); // here you'll have to give the instruction for which key or values , you want as array otherwise it'll give as empty array

let arr1 = 100
let arr2 = 200
let arr3 = 300

console.log(Array.of(arr1,arr2,arr3));


