const score = 400
console.log(score)   //400

const newScore = new Number(100)
console.log(newScore)   //[Number :100]

const balance = 100

console.log(balance)         //100
console.log(balance.toString().length)  //3
console.log(balance.toFixed(2)) //100.00

const otherNumber = 1358.84577
console.log(otherNumber.toPrecision(4)) //1359


const hundreds  = 1000000
console.log(hundreds.toLocaleString()) //1,000,000
console.log(hundreds.toLocaleString('en-IN')) //  10,00,000 use to show in indian value

// MIN_VALUE, MAX_VALUE, MAX_SAFE_VALUE, MIN_SAFE_VALUE

// <----------------------------MATHS---------------------->

console.log(Math)   //object 
console.log(Math.abs(-4)) // 4
console.log(Math.round(4.785)) //5
console.log(Math.floor(4.785)) //4
console.log(Math.ceil(4.785)) //5
console.log(Math.sqrt(9)) //3

console.log(Math.random()) // always gives values between 0 and 1
console.log((Math.random() * 10) + 1) //to avoid 0
console.log(Math.floor(Math.random()*10) + 1) // we can get floor value mostly used in games like ludo n 

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1) + min) + 1)