// Objects in JS are dynamic.
// Meaning we can add properties or method at any time.

// The const keyword used with an object, means we can't reassign it
// But we can still mutate/change the properties and methods of the object
// that it references.

const person = {
    name: "Adarsh"
};

console.log(person);

// we can add properties using dot notation
person.favoriteFood = "tacos";

console.log(person);

// we can also use bracket notation
person['favoriteMovie'] = "Jacob's Ladder";

console.log(person);

// we can also use 'delete' keyword to delete properties
delete person.favoriteMovie;

console.log(person);

person.eat = function() {
    console.log('start eating');
}

console.log(person);

person.eat();