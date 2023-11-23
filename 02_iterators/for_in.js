const myobj={
    js:'javascript',
    cpp:'c++',
    py:'python'
}
for (const key in myobj) {
    //console.log(`${key} is shortcut of ${myobj[key]}`);
}
const arr=["1","2","3"];
arr.forEach(function(val) { //callback function:- function k aage uska naam nhi likha jata
    //console.log(val);
});

arr.forEach((i)=>{ //arrow function
    //console.log(i);
});

arr.forEach((i,index,arr)=>{
    //console.log(i,index,arr);
})

//objects in array traversal
const coding=[
    {
        no:'1',
        letter:'a'
    },
    {
        no:'2',
        letter:'b'
    },
    {
        no:'3',
        letter:'c'
    }
]
coding.forEach((item)=>{
    console.log(item.no);
    console.log(item.letter);
})