// We got 8 types of data types in JS
// 7 primitive data type : number, string, boolean, BigInt, undefined, 
// null and symbol

// 8th data type is the object
// Array and function fall into the object category

// Reason why we differentiate data types cause how they're allocated in memory

// Working with primitive values, they are passed by copy.


let a = 10;
let b = a;

a = 20;

console.log(a);
console.log(b);


// now let's consider reference data types (passed by reference)
a = { value: 20 };
b = a;

console.log(a);
console.log(b);

console.log("After Modifying");
a.value = 100;

console.log(a);
console.log(b);

// Objects are passed by reference, basically same memory address is given to both a and b

// so, Primitive types are copied by value and Objects are copied by 
// reference
