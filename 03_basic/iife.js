// Immediately Invoked Function Expressions (IIFE)

/* It is immediately called after a function is defined.
  Also, it is used to prevent the pollution from the global scope in JS.
 */

// function name(){
//     console.log('Anushi')
// }
// name()

(function name1(){      // also known as named iife
    console.log('Anushi')
})(); // calling immediatedly

// Note : The semi-colon is used to break or to end the function.


// for arrow function
( () => {               //also known as unknown iife
    console.log('Anushi')
})();


// to pass values

( (name) => {
    console.log(`My name is ${name}`)
})('Anushi');