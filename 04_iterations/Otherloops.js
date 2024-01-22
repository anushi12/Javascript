// for-of

const arr = [1,2,3,4,67]

for (const i of arr) {
   // console.log(i)
}

// maps
// stores unique values
const map = new Map()

map.set('IN','India')
map.set('It','Italy')
map.set('Fr','France')

//console.log(map)

for(const [key,value] of map){
    //console.log(key)
    //console.log(key, ':-', value)
}

// objects

const myObj = {
    game: 'Fortnite',
    snacks : "cheetos",
    movie: "Titanic",
}
// for (const [key,value] of myObj) {
//     //console.log(key, ':-', value) //objects cannot be traversed using for of loop
// }


// we can apply for in loop in objects
for(const key in myObj){
    console.log(myObj[key])
}