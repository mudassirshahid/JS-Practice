class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);


// In above code in get or set we cannot keep name same like email and in get or set also email then face error of both are going race which email should be? so we use _email generic to solve and access/set value. set always take one parameter like value and in set we cannot return and i get always return something  