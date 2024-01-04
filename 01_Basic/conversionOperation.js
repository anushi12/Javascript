let score = "33"

console.log(typeof score) //string

let valueInNumber = Number(score) 
console.log(typeof valueInNumber)  // number
console.log(valueInNumber)         //33


let newScore = "56x"
let valueInNewNumber = Number(newScore) 
console.log(typeof valueInNewNumber)  //number
console.log(valueInNewNumber)         //NaN (Not A Number)


let temp = null
console.log(typeof temp) //object
console.log(temp)        //null
let newTemp = Number(temp)
console.log(newTemp) //0


let state = undefined
console.log(typeof state) //object
console.log(state)


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true

/* 1=>true
   0 => false
   "" => false
   "anush" => true
 */

//string conversion

let num = 33

let stringnum = String(num)
console.log(stringnum)
console.log(typeof stringnum)