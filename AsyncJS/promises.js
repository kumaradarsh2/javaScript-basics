// Promise states:
/*
    Pending: The initial state; the operation is still in progress.
    Resolved: The operation completed successfully, and a value is available.
    Rejected: The operation failed and an error is available.  
*/

// How to create a Promise?
// Using New Promise() constructor
// Constructor takes a function called "executor" as an argument (anonymous function)
// Executor function takes two arguments: resolve and reject
// resolve(value) is called when operation succeeds, passing the result value
// reject(error) is called when operation fails, passing an error object

let myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here (eg. fetching data)
    let success = false;
    if (success) {
        resolve("Operation successful!"); // Pass the result
    } else {
        reject("Operation failed!"); // Pass the error
    }
});

// Using a Promise
// we use .then() to handle the fulfilled state
// we use .catch() to handle the rejected state 

myPromise
    .then((result) => {
        console.log("Result:", result);
    }) 
    .catch((error) => {
        console.log("Error:", error);
    });


