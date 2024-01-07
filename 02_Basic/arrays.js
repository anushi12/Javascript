// array
const myArr = [0, 1 ,2 ,3 ,4]

console.log(myArr) // [0, 1, 2, 3, 4]
// console.log(myArr[4]) //4
// console.log(myArr.length) //5

// Array methods
myArr.push(7)
console.log(myArr) // [ 0, 1, 2, 3, 4, 7 ]
myArr.pop()
console.log(myArr)  // [ 0, 1, 2, 3, 4 ]
myArr.unshift(8)
console.log(myArr)  // [ 8, 0, 1, 2, 3, 4 ]
myArr.shift()
console.log(myArr)  // [ 0, 1, 2, 3, 4 ]

console.log(myArr.includes(4)) // true

console.log(myArr.join()) // converts array into string

console.log(myArr.slice(1,3)) // [1,2]
console.log(myArr)        //[ 0, 1, 2, 3, 4 ]

console.log(myArr.splice(1,3)) // [1,2,3]
console.log(myArr) //[ 0, 4 ]

/*
  the difference between slice and splice is that in slice the original array remains same whereas,
  in splice the original array changes.
*/