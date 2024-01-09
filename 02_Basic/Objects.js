// objects
// singleton --> when we create objects with constructor then we create a singleton objects
// objects.create (is one way)

const sym = Symbol("myfav")
const heros = {
    name: "Thor",
    series : "Marvel Avengers",
    "Started" : 2000,
    email: "marvelavengers@gmail.com",
    [sym] : "Iron man",
};

// ways to access objects

console.log(heros.name)   //objects can be accessed using object.key
console.log(heros["series"]) // this is used for accessing symbol 
// console.log(heros.sym) //we have no other way to access symbol using object.key

// both will print same value
console.log(heros.email)
console.log(heros["email"])

// inordeer to print string key there is only one way
console.log(heros["Started"])

// in order to change onjects
// heros.email = "anushi@gmail.in"
// //inorder to stop changing values
// //we can use to freeze the objects
// //Object.freeze(heros)
// console.log(heros)


// Functions

heros.greeting = function(){
    console.log("Hello!")
}
console.log(heros.greeting) // [Function (anonymous)]
console.log(heros.greeting()) // Hello