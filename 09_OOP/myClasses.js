// ES6
class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const anas = new user("anas", "anas@xyz.com","123")
console.log(anas.encryptPassword())
console.log(anas.changeUsername())


// behind the scene

function user(username,email,password){
    this.username = username
        this.email = email
        this.password = password
}
user.prototype.encryptPassword = function(){
    return `${this.prototype}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const coffee = new user("coffee", "coffee@gmail.com","1234")
console.log(coffee.encryptPassword())
console.log(coffee.changeUsername())
