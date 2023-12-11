// two types->
// continuous and holey

//SMI(small integer)
//Packed element
//double(float,string,function)

const myarr=[1,2,3,4,5];
//PACKED_SMI_ELEMENTS

myarr.push(0.6);
//PACKED_DOUBLE_ELEMENTS

myarr.push('7');
//PACKED_ELEMENTS

myarr[10]=11;
//HOLEY ELEMENTS

console.log(myarr);
console.log(myarr.length);
console.log(myarr[9]);

//bound check
//hasOwnProperty(myarr,9)
//hasOwnProperty(myarr.prototype,10)
//hasOwnProperty(Object.prototype,10)

//holes are very expensive in js


//SMI > DOUBLE > PACKED
//H_SMI > H_DOUBLE > H_PACKED

const arrone=new Array(3);
//just 3 holes . HOLEY_SMI_ELEMENTS
arrone[0]='1'//HOLEY_ELMENTS
arrone[1]='2'//HOLEY_ELMENTS
arrone[1]='3'//HOLEY_ELMENTS

const arrtwo=[];
arrtwo.push('1')//PACKED_ELEMENTS
arrtwo.push('2')//PACKED_ELEMENTS
arrtwo.push('3')//PACKED_ELEMENTS