/*
  control flow is the order in which the computer executes code.
  There can be loops, conditions and functions etc.
  // return, break, continue, throw, if...else, switch, try..catch
*/

// if-else condition
// const userLoggedIn = true;
// if(userLoggedIn){
//     console.log("LoggedIn") // LoggedIn
// }
// console.log("Not Logged in") // Not Logged in


// const userLoggedIn = true;
// if(userLoggedIn){
//  console.log("LoggedIn"); // LoggedIn
// }
// else{
// console.log("Not Logged in"); // will not execute
// }


// Conditional operators : <, > , <=, >=, ==, ===, !=, !==

// const temp = 45;
// if(temp < 50){
//     console.log("Less than 50")
// }
// else{
//     console.log("Greater than 50")
// }

// else if

// const age = 18;

// if(age <10){
//     console.log("young")
// }
// else if(age<18){
//    console.log("Teenager")
// }
// else if(age<60){
//     console.log("Adult") // Adult
// }
// else{
//     console.log("Sen Citizen")
// }


// Switch case

// const month = 6;

// switch(month) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("Feb")
//         break;
//     case 3:
//         console.log("Mar")
//         break;
//     case 4:
//         console.log("apr")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("June") // June
//         break;
//     case 7:
//         console.log("July")
//         break;
//     case 8:
//         console.log("aug")
//         break;
//     case 9:
//         console.log("Sep")
//         break;
//     case 10:
//         console.log("Oct")
//         break;
//     case 11:
//         console.log("Nov")
//         break;
//     case 12:
//         console.log("Dec")
//         break;
//     default:
//         console.log("Case Not Matched")
// }


// Falsy values

// false, 0, -0, BigInt 0n, "" , null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){} anything inside string

// Nullish Coalescing Operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 12 // 12
// val1 = undefined ?? 15 //15


// terniary operator

// condition ? true:false;

//const val = 2>1 ? console.log(true): console.log(false)