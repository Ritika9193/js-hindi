//Immediately Invoked Function Exprssions(IIFE)
//global scope k pollution ko hatane k lie iife use hota h
(function name() {
    //named iife
    console.log(`hello`);
})();//; is imp to end execution
((name)=> {
    //unamed iife
    console.log(`hello ${name}`);
})("raj");