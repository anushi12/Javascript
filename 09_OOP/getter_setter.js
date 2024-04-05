class user{
    constructor(name, password){
        this.name = name,
        this.password = password
    }
    // to avoid race condition we use underscore to change the variable name
    // we can also use # instead of _
    get password(){
        return `${this._password}Anush`
    }
    set password(value){
        this._password = value
    }
    get name(){
        return `${this._name}`.toUpperCase()
    }
    set name(value){
        this._name = value
    }
}
const anush = new user("anush", "abc")
console.log(anush.password)
console.log(anush.name)
