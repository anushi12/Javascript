// primitive (7 types) call by value
/* 
   string, Number, Boolean, null, undefined, symbol, Bigint

*/

// reference or Non-primitive data type
//  Arrays, Objects, Functions

//  JS isdynamically typed language

//Symbol --> used to represent unique value

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId )
// console.log(anotherId)

//const bigNum = 3458399827437509803486n // bigint is use for very large value
//console.log(typeof bigNum)

// Arrays
const brands = ["Gucci", "chanel", "Versace", "Tommy Hilfiger", "LV"]
console.log(brands)
console.log(brands[0])
brands[1] = "Bulgari"
console.log(brands)

//Objects

let myObj = {
    name : "Bunny",
    age : 27,
}
console.log(myObj)


//Functions
//you can keep it in variables too like,
const myFunction = function() {
    console.log("hello World!")
}
console.log(typeof myFunction) //function objN
return myFunction()

