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