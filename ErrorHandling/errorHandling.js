// JS has different types of errors
// Common ones are: Syntax Errors, Reference Error, Range Error

/*
    1. Syntax Errors
        These Errors occur when we write invalid JS code.
        Eg. console.log("hello world" // Missing closing parenthesis
    
        SyntaxError: Unexpected end of input

    2. Reference Errors
        Occurs when we try to use a variable that doesn't exist
        Eg. console.log(username); // 'username' is not defined

        ReferenceError: username is not defined

    3. Type Errors
        Happens when we perform invalid operation on variable of a specific type
        Eg. const age = 20;
            age.toUpperCase(); // Numbers don't have 'toUpperCase()'
        
        TypeError: age.toUpperCase is not a function

    4. Range Errors
        const arr = new Array(-1); // Arrays can't have negative lengths

        RangeError: Invalid array length
*/

// Handling Errors with try...catch
// What does try...catch do?
// It's a tool which helps us to handle the errors gracefully and prevents the program from crashing due to the error

// Basic Structure

/*
    try {
        // Code that may throw an error
    } catch (error) {
        // Handle the error
    }
 */

   
// try {
//     let result = 10 / 0;  
//     console.log(userName); // ReferenceError
// } catch (error) {
//     console.log("An error occured: ", error.message);
// }

/**************************************************************************************/

// Trying to catch error in Synchronous vs Asynchronous Code
// Note: try...catch works only for synchronous code
// if an error occurs in try, JS immediately jumps to catch and skips the remaining code in try
// try {
//     let name = "Adarsh";
//     name.toUpperCase(); // No error 

//     console.log(undeclaredVar); // ReferenceError
// } catch(err) {
//     console.log(err.message);
// }

/**************************************************************************************/

// Catching an error in Asynchronous Code

// By default, try...catch doesn't catch errors inside Asynchronous Code like setTimeout, Promises, or asyn/await

// Eg. try...catch doesn't work with setTimeout
// try {
//     setTimeout(() => {
//         console.log(undeclaredVar); // ReferenceError
//     }, 1000);
// } catch (error) {
//     console.log("Caught the error: ", error.message);
// }

// Why? 
// Because the setTimout function takes some time to execute and due to synchronous nature of JS, try...catch block already finish executing and don't handle the error, thus we get the error anyways

/***************************************************************************************/

// The finally block
// The finally block runs no matter what happens, whether an error occurs or not
// try {
//     console.log("Trying to execute...");
//     console.log(errorguys);
// } catch(err) {
//     console.log("Caught an error:", err.message);
// } finally {
//     console.log("This always runs!");
// }

// Finally is used for CleanUp actions like Database connection

/***************************************************************************************/

// Throwing custom error
// throw new Error(...)
// This is when we want to explicitly singal that something has gone wrong in our code and 
// stopping the normal flow of execution

function divide(a, b) {
    if (b === 0) {
        throw new Error("cannot divide by zero!");
    }
    return a / b;
}

divide(10, 0);