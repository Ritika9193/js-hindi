const user ={
    username:"raj",
    price: 999,
    welcome: function(){
        console.log(`${this.username} hello`);
        console.log(this);
    }
}
// user.welcome();
function one(){
    let username="raj";
    console.log(this.username);//it will display undefined
}
// one();
const chai=()=>{
    let username="raj";
    console.log(this);//{}
}
// chai();
const add=(num1,num2)=>{
    return num1+num2;
}
// const add2=(num1,num2)=>num1+num2
const add2=(num1,num2)=>({name:"hitesh"})
console.log(add2(3,4));
