// reduce

const nums = [1,2,3,4,5]

// const total = nums.reduce(function(accumulator, currval) {
//     console.log(`accumulatore : ${accumulator} ans currval is : ${currval}`)
//     return accumulator + currval
// }, 0)
// console.log(total)

// with arrow function

const total = nums.reduce((acc, curval)=>{
    return acc + curval
},0)
console.log(total)

const shoppingCart = [
    {
        itemName: 'top', 
        price: 1200
    },
    {
        itemName: 'pant', 
        price: 4000
    },
    {
        itemName: 'bracelet', 
        price: 999
    },
    {
        itemName: 'lipbalm', 
        price: 5000
    },
    {
        itemName: 'earring', 
        price: 1200
    },

]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price ,0)
console.log(priceToPay)