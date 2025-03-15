// we have operators in js similar to other languages
/*
    1. arithmetic operator
    2. assignment operator
    3. comparision operator
    4. equality operator
    5. ternary operator
    6. logical operator
    7. logical operators with non booleans
*/

// arithmetic operator
// +, -, *, /, %, ** (power)

// increment and decrement operator and their shorthands
let a = 1;
++a; // pre-increment operator, increments a and returns the updated value; a = 1
a--; // post-decrement operator, decrements a but returns the previous value


// assignment operator
let name = 'Adarsh'; // assigning value to a variable

// comparision opeator
// >, <, >=, <= 

// equality operator
// here we have loose equality operator and strict equality operator

let num1 = 2;
let num2 = '2';

// Note: loose equality operator doesn't check if the data types are same
// Js performs type coersion before with lose equality, converting the data type to the same before comparing

// strict equality returns true if the data types are same and values are same 
console.log(num1 == num2); // true
console.log(num1 === num2); // false

// Note: Stick to === strict equality operator for equality comparisions


// ternary operator (its a conditional operator to write cleaner code)
let age = 15;
let canDrive = age >= 18 ? true : false;
console.log('canDrive', canDrive);

let value1 = '2';
let value2 = 2;

const checkSame = (value1 === value2) ? true : false;

console.log('checkSame', checkSame);

// Logical operator
// There are 4 types of logical operators
// &&, ||, !, ?? (null coalesing)

// the precedence of && operator is more than || operator
// ??, nullish coalesing operator

let doesValueExist = null;

// const result = (doesValueExist != null && doesValueExist != undefined) ? doesValueExist : false;

// shorthand version of this by using nullish coalesing operator

const result = doesValueExist ?? false; // this is cleaner code and does the same thing

console.log(result);


// logical operators with non-boolean value

// expressions are evaluated from left to right and when we are using logical operators with non-boolean value, it turns the value of operand rather than true or false

// truthy and falsy values
// anything that's:
// undefined, null, 0, false, '', NaN are falsy values in JS

// Everything else is a truthy value

// || operator
console.log(false || 'Adarsh'); // 'Adarsh' (since its a truthy value)

// first truthy value and short-circuit evaluation for || operator

// Note: short-cicuit evaluation means it stops the expression once it can evaluate to 'truthy' or 'falsy'
console.log("" || 2 || 1); // outputs: 2 

let userName = 'Adarsh';
let defaultName = 'default';

console.log(userName || defaultName);
