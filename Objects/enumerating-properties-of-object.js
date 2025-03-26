// We got for-of loop to iterate over an array
// And, we got for-in loop to interate over the keys of an object

let numbers = [1, 2, 3, 4, 5];

for (const element of numbers) {
    console.log(element);
}

const dog = {
    name: "Max",
    age: 4,
    eyeColor: "blue"
};

for (const key in dog) {
    console.log(dog[key]);
}

// To get keys of an object as an array 

const keys = Object.keys(dog);

for (const key of Object.keys(dog)) 
    console.log(key);

// To get values of an object as an array
const values = Object.values(dog);

// for (const of Object.keys(dog)) 
//     console.log
