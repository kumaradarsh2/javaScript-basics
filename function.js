// Declaration vs Definition
// Both are same thing

// Declaring or Defining a function 
function printMe() {
    console.log("printing...");
}

printMe(); // Invoking the function
console.log(printMe); 

// Parameter vs Arguments

// While declaring or defining function, we have parameter inside the brackets
function printThis(param) {
    console.log(param);
}

printThis("Hey"); // Argument is the actual value passed while invoking/calling the function


// What is an Expression?
const count = 100; // This is an example of an expression

// similary we can define a function 
const printMeAgain = function() {
    console.log("printing...");
};

// Above is also called Function Expression
// printMeAgain is a function similar to how count is a number of constant type

printMeAgain();


// Note: We can also have params inside the function expression as well

// So, there are two way to define or declare a function
// 1. With Expression           2. without Expression


// How to return from a function?
// Using return keyword
function sum(a, b) {
    return a + b;
}

let result = sum(2, 4);
console.log(result);

/********************************************************************************************************/

// What is default Parameters?
function calc(a, b) {
    return 2 * (a + b);
}

calc(2, 3); // this works fine
calc(2); // since second argument is not passed, inside the function b is undefined and hence, 2 * (2 + undefined) is Not a Number or NaN which we get

// To avoid this, we use default parameter
function calcWithDefaultParam(a, b = 0) {
    return 2 * (a + b);
}

calcWithDefaultParam(2); // now since second argument is not passed, b defaults to zero instead of undefined and we get a number instead of NaN as return value

/******************************************************************************************************/

// What is Rest Parameter?

// First the function can only have one rest parameter and that being the last one
// ...restParam (syntax)
// It basically allow us to pass Any number of arguments while invoking function as array

function collectThings(x, y, ...z) {
    console.log('x', x); 
    console.log('y', y);
    console.log('z', z);
}

collectThings(1, 2, 3, 4, 5, 6); 

/*******************************************************************************************************/

// Arrow Function
// This is a function expression

/*
const addNum = function (x, y) {
    return x + y;
}
*/

// Converting above to arrow function
/*
const addNum = (x, y) => {
    return x + y;
}
*/

// Or, we can simply reduce this to this if we have only one statement inside the function body

const addNum = (x, y) => x + y;

// In case of one parameter, we can remove the bracket too
const printNum = num => console.log(num);
printNum(3);

/*****************************************************************************************************/

// Nested Function 
// JS allow function nesting

function outer() {
    console.log('outer');
    
    // Inner function inside the outer function (nested)
    function inner() {
        console.log('inner');
    }

    // Invoking the inner function
    inner();
}

// Invoking the outer function
outer();

/*******************************************************************************************************/

// Function Scope

// for understanding function scope, we have to keep 2 rules/principles in mind
/*
    1. Variables defined inside the function are not accessible anywhere 
       outside the function.
    2. Function can access all the variables inside the scope it is defined.
*/

// Same concept applies for nested functions

const x = 20;
const y = 30;

function doSomething() {
    const z = 10;
    console.log(x, y);
}

doSomething();
// console.log(z); // this lines gives error as z is defined inside the function which is not accessible outside its scope

/***************************************************************************************************/

/* CLOSURE */
// Now that we have understood Nested Function and Function Scope, let's take a look at Closure

// Let's say we have two functions Inner function and Outer Function
function outerFunc(x) {
    function innerFunc(y) {
        return x + y;
    }
    return innerFunc;
}

// Outer function returns Inner Function
// Invoking outerFunc()
const outerReturn = outerFunc(10);

// Normally after function is called/invoked, everything is destroyed inside the function

// However, outer returns inner in this case and the 'x' is present inside inner which means after outer is invoked, inner is returned and captured in outerReturn and 'x' which is 10 here, lives inside inner even after outer function call is over.

// This inner function is "Closure" where the variable from outer function 'lives' even after the outer function call is over

const ans = outerReturn(2); 
console.log(ans);

// In a way, closure helps us to preserve the variable 

/********************************************************************************************************/

// Callback function
// A function which is passed as "Parameter" to a function and is used later point of time is called Callback function

// Like call it back after some point of time (see the last example, goToBar)

// In JS function is a first class citizen 
// It means we can create a function, assign a function to a variable, return a function, define a function with another function (nested functions), and we can pass function as parameter to another function

// Eg. Returning a function and later invoking it
const customFunc = (y) => () => y;

console.log(customFunc(4)()); // invoking the function using () after function string 

// foo function can take another function as parameter
function foo(bar) {
    bar(); // we are simply executing the function as we do with numbers, strings etc. 
    // this particular function (bar) is called a Callback
}

// Now we pass an anonymous function (function with no name) to foo 
foo(function() {
    console.log("bar");
});

// defining a named function
function named() {
    console.log("bar");
}

foo(named); // passing the function 'named' to another function 'foo' as argument

const itsNight = false;
const drinkNotThereOnline = true;

function goToBar(bar) {
    if (itsNight) {
        bar();
    }

    if (drinkNotThereOnline) {
        bar();
    }
}

// Calling back bar is based on certain kind of conditions that is happening within goToBar function. 
// bar is here Callback function as We are calling it back based on certain conditions based on certain things.
// It is so so amazingly powerful because we can pass any function to another function and call this passed function based on any condition at a later point of time. Hence its called callback function

/************************************************************************************************************/

// HOF (Higher Order Function)

// A HOF does either of these: 
/*
    1. Takes one or more functions as arguments.
    2. Returns a function as its result.

    Or, does both.
*/

// HOF enable powerful abstractions and code reuse

// Difference between Callback and HOF

// A callback function is often used within a HOF. So, a HOF takes callback as argument and then executes it

// The term "callback" emphasizes the timing of function's execution i.e. it's called back later
// Higher Order emphasizes the function's ability to work with other functions  

// This is HOF as it takes function as parameter
function getCapture(camera) {
    camera(); // executing this function
    // there is no return value
}

// Passing arrow function to HOF
getCapture(() => console.log("captured"));


/**********************************************************************************************************/

// IIFE (Immediately Invoke Function Expressions)

// We use IIFE when we want to execute the function immediately after defining it

// We use "Anonymous function" with "Group Operator ()" around it 
// so to get function definition 
// the last () is to call/invoke the function

/*
(
function () {
    console.log("IIFE");
}
) 
*/

// Above returns the string representation of the function

// So to call it

(
    function () {
        console.log("IIFE");
    }
)(); // using the () to call the string representation of function


    
