// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this .password=password;
//     }

//     encryptpassword(){
//         console.log(`${this.password}abc`);
//     }
//     changeusername(){
//         console.log((`${this.username.toUpperCase()}`));
//     }
// }
// const chai=new user("chai","chai@gmail.com",123)
// console.log(chai.encryptpassword());
// console.log(chai.changeusername());

//behind the scene
function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
user.prototype.encryptpassword=function(){
    console.log(`${this.password}abc`);
}
user.prototype.changeusername=function(){
    console.log((`${this.username.toUpperCase()}`));
}
const chai=new user("chai","chai@gmail.com",123)
console.log(chai.encryptpassword());
console.log(chai.changeusername());
