// object destructuring

const course = {
    coursename: "JS",
    instructor: "self",
    price : "time"
}
// const.coursename

const {instructor : teacher} = course
console.log(instructor) // self
console.log(teacher) //self


