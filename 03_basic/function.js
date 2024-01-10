// function to calculate two numbers

function addTwoNumbers(num1, num2){
    return num1 + num2
}
console.log(addTwoNumbers()) // NaN
console.log(addTwoNumbers(5,6)) // 11


function loginUserName(username){
    if(username === undefined){
        console.log("Please enter username")
        return //it will not execute further
    }
    return `${username} just logged in`
}
console.log(loginUserName("Anushi"))
console.log(loginUserName()) //undefined


// rest ans spread opertator

function createOrderList(...num){
    return num
}
//without ...num
console.log(createOrderList(200, 400, 589, 3685)) // [200]

// to get all values use rest (...)
console.log(createOrderList(200, 400, 589, 3685)) // [200,400, 589, 3685]

// similarly we can do it for objects

const user = {
    username: "Anushi",
    hobby : "learning"
}
// to pass objects in function
function handleObj(anyobj){
     console.log(`username is ${anyobj.username} and hobby is ${anyobj.hobby}`)
}
handleObj(user)

// alternate way

handleObj({
    username: "Bunny",
    hobby : "learning"
})

// for arrays

const myArr = [200,300,456,7895]

function returnValue(getArr){
    return getArr[3]
}
console.log(returnValue(myArr)) // 7895
// alternate way
console.log(returnValue([200,300,456,7895])) // 7895