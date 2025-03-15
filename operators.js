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

