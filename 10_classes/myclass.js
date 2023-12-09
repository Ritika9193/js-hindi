class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this .password=password;
    }

    encryptpassword(){
        console.log(`${this.password}abc`);
    }
}
const chai=new user("chai","chai@gmail.com",123)
console.log(chai.encryptpassword());