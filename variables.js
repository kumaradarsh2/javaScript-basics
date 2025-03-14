// modern syntax is to use the let and const keyword

// Declaring and assigning the variable on the same line is called Initialization
let firstName = 'Adarsh';

// Variable declaration
let variableDeclaration;

// Variable assignment
// the equal sign is known as assignment operator
variableDeclaration = 'value';

console.log('variableDeclaration');

// Constant declaration
const pie = 3.14;
console.log(pie);

// pie = 2.31; cannot reassign the value to constant


// There are 8 data types in javaScript
// 7 are Primitive Data types: 
// number, BigInt, string, boolean, null, undefined, Symbol
// 1 is Non-Primitive Data type:
// object 

// string data type
let favoriteColor = 'Red';
let worstColor = "Blue";
let badColor = `Pick`;

// number data type
let num = 4;
let decimal = 2.81;

// BigInt data type
let veryLargeNumber = 2343242342343n;

// boolean data type
let hasLied = false;

// undefined
let myName;
console.log(myName); // undefined

// null data type
myName = null;
console.log(myName);

// object data type
// primitive data type can hold only single value but objects can have more complex structures and hold key-value pairs
let student = {
    name: "Adarsh",
    age: 21
};

// we can use the typeof operator which gives us the data type
console.log(typeof 3);
console.log(typeof 10n);
console.log(typeof 'hello');
console.log(typeof null); // null is not an object, this is a bug in JS due to backward compatibility


// Note: JS is a dynamically typed language
// It means we can reassign a variable to different data types later on! unlike statically typed language like c#
let x = 10;
console.log(typeof x); // number
// reassigning x to string data type
x = 'hello'; // string
console.log(typeof x);
// again reassigning x to bigInt data type
x = 3141592643493294n;
console.log(typeof x);


// Now, non-primitive data type: Object
// Objects are reference types
// Creating an object
const person = {
    name: "Adarsh",
    age: 20,
    greet: function() {
        console.log("Hello!");
    }
};

// accessing properties of an object using dot notation
console.log(person.name);
console.log(person.age);
console.log(person.greet);

// Adding and modifying Properties
person.age = 21;
person.city = "Delhi";

console.log(person);
console.log(person.city);

// Deleting property
delete person.city;

console.log(person);
// console.log(person.city) gives undefined 

// Checking property existence
console.log("name" in person); // true

// Bracket notation to access the value of the property in object
const key = "age";
const newPerson = {
    name: "Adarsh",
    age: 20
};

console.log(newPerson[key]);

const obj = {
    "full-name": "Adarsh Kumar",
    "likes js": true
};

// can't even use dot notation here
// console.log(obj.full-name.);
console.log(obj["full-name"]);
console.log(obj["likes js"]);


let prop = "city";
let newObj = { [prop]: "Delhi" };
console.log(newObj.city);

// Methods in Objects
// A method is just a function stored inside an object

// Defining and calling a Method
const myObj = {
    name: "Adarsh",
    greet: function() {
        console.log(`Hello, ${this.name}!`) // using 'this' keyword here
    }
};

myObj.greet();


// arrays (object type)
// we can check using typeof function
let fruits = ['apple', 'orange', 'grapes', 'pineapple'];
console.log(fruits);
console.log(typeof fruits);

// to print pineapple
console.log(fruits[fruits.length - 1]);

// .length property to find the size of array
console.log(fruits.length); // 4

// Functions in javaScript
// we use the keyword function for functions
function sayhello() {
    console.log("Hello!");
}

sayhello(); // calling the function or invoking the function

// function with parameter(s)
function greeting(name) {
    console.log("hello " + name + "!");
}

greeting("Adarsh"); // Calling the function with a parameter