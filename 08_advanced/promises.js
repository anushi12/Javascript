const promiseOne = new Promise(function(resolve, reject){
    //do any async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() // to connect then and resolve
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})  //then is related to resolve



// without variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("DB calls")
        resolve()
    },1000)
}).then(function(){
    console.log("DB calls resolved")
})


// passing parameters in resolve
const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username:"Anusha", email:"abc@gmail.com"})
        },1000)
})
promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Bunny"} )
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("promise either resolved or rejected"))



const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JavaScript"} )
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
async function consumepromisefive(){
   try {
    const response =  await promisefive
    console.log(response)
   } catch (error) {
      console.log(error)
   }
}consumepromisefive()

fetch('https://api.github.com/users/anushi12')
.then((response) => {
    return response.json
})
.then((data)=>{
    console.log(data)
})
.catch((err)=> console.log(error))