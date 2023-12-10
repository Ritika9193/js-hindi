class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return ` the password is ${this._password}`;
    }
    set password(value){
        this._password=value;
    }
}
const abc=new user("abc.com","xyz");
console.log(abc.email);