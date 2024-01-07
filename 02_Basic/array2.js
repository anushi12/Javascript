// continuation of arrays

const marvel_heros = ["spiderman", "thor", "ironman"]
const animations = ["doraemon" , "shinchan" ]

marvel_heros.push(animations)  // it pushes the whole array into marvel heros
console.log(marvel_heros) //[ 'spiderman', 'thor', 'ironman', [ 'doraemon', 'shinchan' ] ]

// const all = marvel_heros.concat(animations) //it mearges all elements into a single array and return a new array
// console.log(all) //[ 'spiderman', 'thor', 'ironman', 'doraemon', 'shinchan' ]

// // most preferred way (spread)
// const newArr = [...marvel_heros, ...animations]
// console.log(newArr) // [ 'spiderman', 'thor', 'ironman', 'doraemon', 'shinchan' ]


const arr =[1,2,3,4,[5,3,2,0], 43, 2.4, [7,[8,2]], 89]
//if you all elements to be single then
const arr2 = arr.flat(3)    //flat is use to spread out all sub-arrays into a single array
console.log(arr2)

console.log(Array.isArray("Anushi")) //false
//to convert into array
console.log(Array.from("Anushi")) // [ 'A', 'n', 'u', 's', 'h', 'i' ]
console.log(Array.from({name:"Anushi"})) /**********Interesting [] *******/

let apples = 35
let mangoes = 90
let avocado = 400
console.log(Array.of(apples, mangoes, avocado)) // [ 35, 90, 400 ]