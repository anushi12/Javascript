const user = {
    username : "Anush",
    loginCount : 8,
    SignedIn: true,

    getUserDetails: function(){
        //console.log("got details of users")
        //console.log(`username: {$this.username}`)
        console.log(this)
    }
}
//console.log(this) // window object
//console.log(user.username);
//console.log(user.getUserDetails);

//const promiseOne = new Promise() // new keyword makes a new context which is basically the constructor

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}
const userOne = new User("anush",8, true);
const userTwo = new User("Bunny",18, true);
// without new keyword the values will be override
console.log(userOne);