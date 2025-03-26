<<<<<<< HEAD
// factory functions refer to the functions with camelCase naming convention
// which returns an object literal

// The details are within the factory function and we pass arguments to the factory 
// function's parameter variables to create a custom object

// Factory functions provide an efficient and reusable way to create new objects 
// with same state and behavior (properties and methods)
=======
// factory functions refer to the functions with camelCase naming convention which returns an object literal

// The details are within the factory function and we pass arguments to the factory function's parameter variables to create a custom object

// Factory functions provide an efficient and reusable way to create new objects with same state and behavior (properties and methods)
>>>>>>> c1ca64d (Initial commit)
function getDog(name, breed, age, weightInKg) {
    return {
        name,
        breed,
        age,
        weightInKg,
        eat: function() {
            console.log(this.name + ': Chomp!');
        },
        bark() {
            console.log(this.name + ': Woof!');
        }
    };
}

// Create custom object using factory function

const myDog = getDog('ava', 'siberian-husky', 4, 18);

console.log(myDog);