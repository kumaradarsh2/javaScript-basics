// Functions are objects in JS

function add(num1, num2) {
    return num1 + num2;
}

// This outputs the number of parameters the add function has.
console.log(add.length);

// here 'n' references 'add' function in memory
const n = add;

// console.log(n(2, 3));


function programmer(name) {
    this.name = name;
    this.writeCode = function() {
        console.log('Code in JS');
    }
}

console.log(programmer.length); // 1 parameter
console.log(programmer.constructor); 

const programmerFunc = new Function('name', `
    this.name = name;
    this.writeCode = function() {
        console.log('Code in JS');
    }
`);

const newProgrammer = new programmerFunc('Adarsh');
console.log(newProgrammer);

newProgrammer.writeCode();