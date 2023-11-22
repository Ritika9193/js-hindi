const nums=[1,2,3,4,5]
const newnum=nums.filter( (nums) => { 
    return nums>2 //agar curly braces use kia h then return keyword use krna imp h beacuase of scope
})
// console.log(newnum);
const newsnum=nums.filter( (nums) => nums>2) //no need of return keyword
// console.log(newsnum);
const coding=[
    {
        no:'1',
        letter:'a'
    },
    {
        no:'2',
        letter:'a'
    },
    {
        no:'3',
        letter:'c'
    }
]
let newcoding=coding.filter(( i)=> i.letter==='a');
newcoding=coding.filter((i)=>{ 
    return i.no>=2 && i.letter==='a'
})
//console.log(newcoding);
 
const arr= [ 1,2,3,4,5 ]
const newarr=arr.map((a)=>{return a+10})
//console.log(newarr);

//CHAINING
const newarrs=arr.map((num)=> {return num+10})
                 .map((num)=>{return num+1})
                .filter((num)=>{return num>=13})
console.log(newarrs)
