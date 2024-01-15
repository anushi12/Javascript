// this

const details = {
    username : "anushi",
    likes: "football",

    welcomemsg: function(){
        // console.log(`${this.username}, welcome to javascript`)
        // console.log(this)
    }
}
// details.welcomemsg() // anushi, welcome to javascript
// details.username = "Bunny"
// details.welcomemsg() // Bunny, welcome to javascript
// console.log(this)  // {}

// function user(){
//     console.log(this)
// }
// user()

//  const user = function(){
//         console.log(this)
//     }
//    user()
//    console.log( user()) //undefined


// const user = () => {
//     console.log(this)   // {}
// }
// user() // {}
// console.log(user()) // undefined

// arow functions () => {}

// const addtwo = (num1,num2) =>{
//         return num1 + num2
// }

// implicit way

const addtwo = (num1,num2) => num1 + num2

console.log(addtwo(5,9)) // 14