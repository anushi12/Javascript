const accountId = 12345
let accountEmail = " anushi@gmail.com"
var accountPass = "232323"
let accountState; // will be undefined

//variables are like containers used to hold data in memory
//if we try to change accountId
//accountId = 4567 //it will throw an error as its declared as constants

//to print
console.log(accountId);

//but its very time consuming if we want to print all the variables one by one instead we
//can do is

console.table([accountId, accountEmail, accountPass,accountState])
/*   ┌─────────┬─────────────────────┐
     │ (index) │       Values        │
     ├─────────┼─────────────────────┤
     │    0    │        12345        │
     │    1    │ ' anushi@gmail.com' │
     │    2    │      '232323'       │
     └─────────┴─────────────────────┘
*/

/*
  prefer not using var as it does not support block scope
*/