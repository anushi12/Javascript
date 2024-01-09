// object destructuring

const course = {
    coursename: "JS",
    instructor: "self",
    price : "time"
}
// const.coursename

const {instructor : teacher} = course
//console.log(instructor) // self
//console.log(teacher) //self

//destructing a null object

function getPerson(){
    return null;
}
//console.log(getPerson()) // null

// const {firstname, lastname} = getPerson()
// console.log(firstname,lastname) // TypeError

// TypeError : arises when it cannot destructure property as it is null

// solution 
const {firstname, lastname} = getPerson() || {}
console.log(firstname,lastname) // TypeError 
// undefined undefined 





