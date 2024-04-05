class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }
    static createId(){     // retricts access
        return '123'
    }
}

const anas = new user("anas")
//console.log(anas.createId())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const coffee = new teacher("coffee", "coffee@abc.com")
coffee.logMe()