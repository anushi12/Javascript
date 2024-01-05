const name = "Anushi"
const repocount = 50

// console.log(name + repocount + "value")   ----> outdated

console.log(`My name is ${name} and my repo count is ${repocount}`)

//string is object type like ley value pairs

const gameName = new String('temple run')

console.log(gameName[0]) // t
console.log(gameName. __proto__) // {}
console.log(gameName.toUpperCase()) // TEMPLE RUN
console.log(gameName.charAt(2)) //m
console.log(gameName.indexOf('t')) // 0


const newString = gameName.substring(0,4) //prints 0,1,2,3 characters
console.log(newString)

const anotherString = gameName.slice(-8,4) //prints from reverse direction
console.log(anotherString)

const string1 = "    anushi   "
console.log(string1)
console.log(string1.trim()) //removes unwanted spaces

// replace

const url = "https://anushi.com/anushi%20bunny"

console.log(url.replace('%20', '-'))//replaces %20 with -

//includes -->checks if something is present in the string or not 
// returns --> true or false

console.log(url.includes("anushi")) //true

// to convert string into array

const book = "Harry potter is the best series ever."

console.log(book.split(" ")) 
/*[
    'Harry', 'potter',
    'is',    'the',
    'best',  'series',
    'ever.'
  ] */ 