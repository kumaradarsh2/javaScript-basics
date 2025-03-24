// Every object in JS has a constructor function

const person = { name: 'Adarsh' };

console.log(person.constructor);

let newObj = {};

// When we create an object, JS automatically gives it a .constructor property
// This .constructor property points back to the "factory" (constructor function) that was used to create the object

function Toy(name, color) {
    this.name = name;
    this.color = color;
};

const toy1 = new Toy("Teddy", "Brown");
const toy2 = new Toy("Car", "Red");

console.log(toy1.constructor);
console.log(toy2.constructor);


/*
    - .constructor is like a little tag that says, "This object was made by this function."
    - It points back to the function that was used to create the object.
    - It helps you know the "origin" of an object.
*/