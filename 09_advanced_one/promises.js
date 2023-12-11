const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async is complete');
        resolve();
    },1000)
})
// then ka direct relation hota h resolve k saath
promiseone.then(function(){
    console.log("promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asynct 2");
        resolve();
    } ,1000)
}).then(function(){
    console.log("async 2 resloved ");
})
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"ritika",id:"423"})
    },1000)
    
})
promisethree.then(function(user){
    console.log(user);
})
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"uv",id:"32"});
        }
        else{
            console.log("something went wrong");
        }
    },1000)
})
promisefour.then(function(user){
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log("finally done"))

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript",id:"32"});
        }
        else{
            console.log('js went wrong');
        }
    },1000)
})
async function consumedpromisefive(){
    try {
        const response=await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumedpromisefive();

// async function getUsers(){
//     try {
//        const response= await fetch('https://api.github.com/users/Ritika9193')
//        const data=await response.json()
//        console.log(data);
//     } catch (error) {
//         console.log('there is a error');
//     }
// }
// getUsers();

fetch('https://api.github.com/users/Ritika9193')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))