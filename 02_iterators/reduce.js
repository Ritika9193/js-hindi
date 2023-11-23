const nums=[1,2,3,4,5]
const total=nums.reduce((acc,currval)=>{
    //console.log(`acc:${acc},currval:${currval}`);
    return acc+currval
},0) //here 0 is initial value 
//console.log(total);
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
const newtotal=coding.reduce((acc,item)=>{
    console.log(`acc:${acc},currval:${item.no}`);
    let a=item.no
    return acc+a},0)
console.log(newtotal)
// why concatenating??