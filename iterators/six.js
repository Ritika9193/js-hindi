const nums=[1,2,3,4,5]
const newnum=nums.filter( (nums) => { 
    return nums>2 //agar curly braces use kia h then return kewword use krna imp h beacuase of scope
})
console.log(newnum);
const newsnum=nums.filter( (nums) => nums>2) //no need of return keyword
console.log(newsnum);