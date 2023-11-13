//for of

const arr=[1,2,3,4,5];
for (const i of arr) {
    // console.log(i);
}
const greetings='hello world';
for (const greet of greetings) {
    // console.log(`letter is ${greet}`);
}
const map=new Map()
map.set("1","a")
map.set("2","b")
map.set("3","c")
//console.log(map);

for (const [i,j] of map) {
    console.log(i,":-",j);
}
//for of loop don't work on objects