console.log(2 > 4)
console.log(2 < 4)
console.log(2 >= 5)
console.log(2 <= 2)
console.log(2 != 2)


console.log("2" > 1)   //true (it converts string to num)
console.log("02">1)  //true (it converts string to num)

console.log(null == 0) //false
console.log(null > 0)  //false
console.log(null >= 0) //true

console.log(undefined == 0) //all will be false (we should ignore such comparisons)
console.log(undefined > 0)
console.log(undefined >= 0)


// ===  (strict check)
console.log("2" === 1) //false as it checks both datatype and value

