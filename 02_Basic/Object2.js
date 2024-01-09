//const tinderUser = new Object() -->this is a singleton object
const tinderUser = {}  // --> this is a literal object

tinderUser.id = "123dfhj"
tinderUser.name = "Shiny"
tinderUser.isloggedIn = false
console.log(tinderUser) //both will print {}

//console.log(Object.keys(tinderUser)) // we get all keys in terms of array
// [ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(tinderUser)) // we get all values
//console.log(Object.entries(tinderUser))

const regularUser = {
    fullname:{
        username:{
            firstname: "Olivia",
            lastname: "Das"
        }
    }
}
console.log(regularUser.fullname.username)
console.log(regularUser.fullname.username.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// in order to merge
// const obj3 = {obj1, obj2} // will not work just like array
const obj3 = Object.assign({}, obj1,obj2, obj4) //it is good to give  empty braces{}
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// alternate way

const obj5 = {...obj1, ...obj2, ...obj4}
console.log(obj5)  //preferred way
