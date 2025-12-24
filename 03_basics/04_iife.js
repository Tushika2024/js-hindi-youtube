// Immediately Invoked Function Expressions (IIFE)
//sometimes problem from global scope pollution so to prevent this
//(for definition)(for execution)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

