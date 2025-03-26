// we know that object literal syntax creates one object
// we can easily use factory functions and have it return an object.
// Factory functions provide an efficient and reusable way to create new objects with 
// the same state and behavior

// However factory functions are not the only way to create objects, 
// Rather we use constructor functions (most common way of achieving this)

// Constructor Functions
// Special type of functions that are used to create and initialize objects
/*
    - constructs initial state of an object.
    - naming is done by PascalNotation.
    - name constructor function as a Noun, rather than a Verb.
    - 'this' keyword is used as in 'this current object' to set the 
    - state and behavior
*/

function Dog(name, breed, age, weightInKg) {
    // this is done internally
    // this = {};

    // Add properties to this object
    this.name = name;
    this.age = age;
    this.breed = breed;

    // Add methods to this object

    this.eat = function() {
        console.log(this.name + ':Chomp!');
    },

    this.bark = function() {
        console.log(this.name + ': Woof!');
    }

    // this is done internally
    // return this;

<<<<<<< HEAD
    // To call constructor function, we use special keyword 'new'
    // 

    // The goal of a constructor function is to initialize/instantiate an object with
    // an initial state. (set by the arguments passed to the parameter variables)
}

=======
}

// To call constructor function, we use special keyword 'new'
// The goal of a constructor function is to initialize/instantiate an object with
// an initial state. (set by the arguments passed to the parameter variables)

>>>>>>> c1ca64d (Initial commit)
// why do we use 'new' keyword?

/*
    The new keyword is used to create new instances of objects from constructor functions.
*/

const anotherDog = new Dog('Marley', 'Chocolate Lab', 3, 60);

// console.log(Dog);
console.log(typeof anotherDog);    


// another constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
    // No explicit return needed
}

const person1 = new Person ("Alice", 30);
console.log(person1);

<<<<<<< HEAD
person1.sayHello();

=======
person1.sayHello();
>>>>>>> c1ca64d (Initial commit)
