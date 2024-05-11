function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // we outsource this.username parameter to above function but if we directly call function like this SetUsername(username) then username will not show in console so we use call method
    SetUsername.call(this, username) // for hold reference we use call method it takes two parameter this, value 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);