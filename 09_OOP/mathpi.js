const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descripter);

// console.log(Math.PI); // 3.14
// Math.PI = 5
// console.log(Math.PI) // 3.14

const tea = {
    name: 'Blue tea',
    price: 400,
    isAvailable: true
}
//console.log(tea)
console.log(Object.getOwnPropertyDescriptor(tea, "name"))

//{
//     value: 'Blue tea',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(tea,'name',{
    writable: false,
    enumerable: false,
})