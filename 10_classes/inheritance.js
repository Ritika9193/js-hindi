// class user{
//     constructor(username){
//         this.username=username;
//     }
//     logme(){
//         console.log(`username is ${this.username}`);
//     }
// }
// class Teacher extends user{
//     constructor(username,email,password){
//         super(username);
//         this.email=email;
//         this.password=password;
//     }

//     addcourse(){
//         console.log(`course is added by ${this.username}`);
//     }
// }
// const chai= new Teacher("chai","chai.com",123);
// const tea=new user("tea");
// console.log(chai===tea);
// console.log(chai instanceof Teacher);
// console.log(chai instanceof user);

//-------- STATIC KEYWORD---------//
class User1 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User1("hitesh")
// console.log(hitesh.createId())

class Teacher1 extends User1 {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher1("iphone", "i@phone.com")
console.log(iphone.createId());