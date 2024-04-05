function setUsername(username){
    this.username = username
    console.log("called")
}
function createUser(username, email, password){
    setUsername.call(this,username)//call hold the reference

    this.email = email
    this.password = password
}
const anush = new createUser("anush","anush@xyz.com","1234")
console.log(anush);