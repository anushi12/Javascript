// for each loop

const lang = ["cpp","pyhton","java","JS"]

const value = lang.forEach((i) => {
     //console.log(i)    
     return i     // doesn't return anything
})

// filter
 const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.filter((num) => num>4) // [5,6,7,8,9,10]
// console.log(newNums)

// for each

const newNums =[]
nums.forEach((num)=>{
     if(num > 4) {
          newNums.push(num)
     }
})
console.log(newNums) // [5,6,7,8,9,10]

const books = [
     {title : 'Book 1', genre : 'CPP', publish: 2003, edition: 2019},
     {title : 'Book 2', genre : 'python', publish: 2000, edition: 2022},
     {title : 'Book 3', genre : 'history', publish: 2013, edition: 2017},
     {title : 'Book 4', genre : 'CPP', publish: 1993, edition: 2019},
     {title : 'Book 5', genre : 'maths', publish: 1933, edition: 2016},
     {title : 'Book 6', genre : 'CPP', publish: 1809, edition: 2014},
     {title : 'Book 7', genre : 'maths', publish: 1903, edition: 2019},
     {title : 'Book 8', genre : 'evs', publish: 2003, edition: 2019},
     {title : 'Book 9', genre : 'data science', publish: 2003, edition: 2019},
];
//const userBooks = books.filter( (book) => book.genre === 'maths' )
const userBooks = books.filter( (book) => book.publish >= 2000 && book.genre === 'CPP')
console.log(userBooks)