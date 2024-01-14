/* Scope : it means the current context where the variable holds. It can be layered in
          It can be layered in hierarchy so that child scopes can access the parent scope but vice versa is not possible.

          It is created with a pair of curly braces {}
        */  

    // blocks only scopes let and const but not var.

    // {
    //     var x = 1;
    // }
    // console.log(x) // 1 which is not good

    // {
    //     let x = 1;
    // }
    // console.log(x) // error 

    // {
    //     const x = 1;
    // }
    // console.log(x) // error

//demo(5);    // print nothing if we dont console it and just call it but it doesnt give error

// console.log(demo(5));  // prints 6
// function demo(num){
//     return num +1;  
// }

//console.log(demo(5)) //error as now we have assigned it to a variable
const demo = function(num){
    return num +2;
}
console.log(demo(5)) // prints 7

// nested scope

// function parent(){
//     username = "anush";

//     function child(){
//         hobby = "Coding"
//         console.log(username);
//     }
//     //console.log(hobby); // error as we are trying to access it outside the scope

//     //child()  // when this gets call it prints anush
// }
// parent() // prints nothing