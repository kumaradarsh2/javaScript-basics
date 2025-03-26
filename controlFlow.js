<<<<<<< HEAD
// Made this just cause I am not going to procrastinate on control flow topic 

=======
>>>>>>> c1ca64d (Initial commit)
// if else statement

// switch case statement

// for loop

// while loop

// do-while loop

// infinite loop

// for-in loop (to interate in an object)
const book = {
    name: "How to win friends",
    cost: 150,
    author: "classified"
};

for (const key in book) {
    console.log(book[key]);
}

// for-of loop (to interate in an array)
let numbers = [2,3,4,5,6];

for (const number of numbers) {
    console.log(number);
}

// break and continue


// implementing a function that accepts two number and returns the maximum one
function maximum(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}


// program to display even and odd numbers of array
let numberArr = [1,2,3,4,5,6];

function displayEvenNumbers(number) {
    for (const number of numberArr) {
        if (number % 2 == 0) console.log(number);
    }
}

function displayOddNumbers(number) {
    for (const number of numberArr) {
        if (number % 2 != 0) console.log(number);
    }
}
<<<<<<< HEAD
=======


// implementing fizzBuzz function

function fizzBuzz(number) {
    if (typeof number != 'number') return number;

    if (number % 15 == 0) 
        return "fizzBuzz";
    else if (number % 3 == 0) 
        return "fizz";
    else if (number % 5 == 0) 
        return "buzz";
    else 
        return number;
}
>>>>>>> c1ca64d (Initial commit)
