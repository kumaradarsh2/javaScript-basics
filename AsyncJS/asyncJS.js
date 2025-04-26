// Why do we need promises?

/*
    JavaScript is a single-threaded language, which means its executes code line by line.
    But sometimes we need to perform operations like: 
        - Reading a file
        - Fetching data from the server
        - Waiting for user input 
    
    If JS waited for each operation to finish, the entire program would freeze. 
    Instead, JS uses Asynchronous Programming

*/

// Callbacks: The old way
// Before Promises, JS used callbacks to handle asynchronous tasks  
function getData(callback) {
    setTimeout(() => {
        console.log("Data received");
        callback();
    }, 2000);
    
}

// getData(() => {
//     console.log("Processing data...");
// });

// setTimeout simulates a delay
// The callback runs after the delay

// But callbacks tend to get messy when one depends on another, this is called callback hell
// getData(() => {
//     console.log("Step 1");
//     getData(() => {
//         console.log("Step 2");
//         getData(() => {
//             console.log("Step 3");
//         });
//     });
// });

// Above is a callback hell, its hard to read and maintain 

// Promise solve this problem
// So, what are Promises?
// A Promise represents a value that will be available in future.
// A Promise can be in three states:
/**
 * Pending -> Waiting for the result
 * Resolved (Fulfilled) -> Successfully got the result
 * Rejected -> Failure do to an error
 */

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const succes = true; // false means rejection
    setTimeout(() => {
        if (succes) {
            resolve("Data loaded!");
        } else {
            reject("Error loading data!");
        }
    }, 2000);
});

// resolve() means succes
// reject() means failure

// // Since promises take time, we use .then() and .catch() to handle them
// myPromise
//     .then(result => console.log("Success:", result)) // Runs when resolved
//     .catch(error => console.log("Failed:", error)); // Runs when rejected

// this is better than callback hell but still can get messy when we chain multiple .then() 


// Async/Await: The modern way
// Instead of chaining .then(), async/await makes the code look like normal synchronous code

// Declaring an async function
// Note: An async function always returns a Promise

async function myFunction() {
    return "Hello, world!";
}

// console.log(myFunction()); // Promise { "Hello, world!" }
// Since it returns a promise, we must await the result

// Using await to handle Promises
// await pauses the execution of function until the Promise resolves

// async function fetchData() {
//     const result = await myPromise; // wait for myPromise to resolve
//     console.log(result); // "Data loaded!" (after 2 seconds)
// }

// fetchData();

// Handling error with try...catch 
// If a promise fails we need to catch the error


async function fetchData() {
    try {
        const result = await myPromise; // if rejected, it jumps to catch block
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

// fetchData();


/***************************************************************************************************************/

// Chaining async/await
async function stepOne() {
    console.log("Step 1 started...");
    await new Promise(resolve => setTimeout(resolve, 3000)); // await makes JS pause until Promise resolves
    console.log("Step 1 completed.");
}

async function stepTwo() {
    console.log("Step 2 started...");
    await stepOne(); // Wait for stepOne to finish   
    console.log("Step 2 completed");
}

stepTwo();

