//dates

let mydate = new Date()
console.log(mydate)     //2024-01-07T05:21:25.202Z

console.log(mydate.toString())  //Sun Jan 07 2024 05:22:55 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString()) //Sun Jan 07 2024
console.log(mydate.toISOString())  // 2024-01-07T05:26:30.359Z
console.log(mydate.toISOString()) // 2024-01-07T05:26:30.359Z
console.log(mydate.toJSON())     // 2024-01-07T05:26:30.359Z
console.log(mydate.toLocaleDateString()) //1/7/2024
console.log(mydate.toLocaleString()) // 1/7/2024, 5:28:13 AM

console.log(typeof mydate) // object

// In JS month starts from 0 --> january

let myCreatedDate =  new Date(2024,8,2)  // Mon Sep 02 2024
console.log(myCreatedDate.toDateString())

let mynewDate = new Date("01-23-2024")
console.log(mynewDate.toLocaleDateString())  // 1/23/2024

//timeStamp

let myTimestamp = Date.now()
console.log(myTimestamp)  //1704606719805 in ms
console.log(myCreatedDate.getTime())


console.log(Math.floor(Date.now()/1000)) // to convert in sec

mydate.toLocaleString('default', {
    weekday: "long",
    // timeZone: "" //google search
}) //customize time
console.log(mydate)