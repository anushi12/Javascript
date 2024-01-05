// Stack (primitive),   Heap (Non primitve)

// all primitve datatypes are stored int stored int stack
// all non primitve data types are stored in heap

let myname = "Anushi" //will be stored in stack

let anothername = myname // it will display Anushi if we print it
anothername = "Bunny" // will be stored in stack

console.log(myname) // Anushi
console.log(anothername) // Bunny 

// in stack the values don not get change as we dont change the original value but the copy of that value

let userOne = {   
    email: "abc@gmail.com",
    pass: "56784",
}                       // will get stored in heap as a reference
let userTwo = userOne
console.log(userTwo) // it will now point to the same reference of userOne
userTwo.email = "anushi@gmail.com"
console.log(userOne)
console.log(userTwo) //both will get change as chnages in one will change the original value 




