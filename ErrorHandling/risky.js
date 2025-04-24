function riskyOperation() {
    console.log("Risky operation started...");
    // Simulate a condition that causes an error
    const shouldFail = Math.random() < 0.5;
    if (shouldFail) {
        throw new Error("Something went wrong in riskyOperation!");
    } 
    console.log("Risky operation compeleted successfully");
    return "Operation successful";
}

function outerFunction() {
    console.log("Outer function started...");

    try {
        const result = riskyOperation();
        console.log("Result from riskyOperation:", result);
    } catch (error) {
        console.error("Error caught in outerFunction:", error.message);
        console.log("Outer function handled the error");
    }
    console.log("Outer function finished.");
}

function mainFunction() {
    console.log("Main function started...");
    try {
        outerFunction();
    } catch (error) {
        console.error("Error caught in mainFunction:", error.message);
        console.log("Main function handled the error");
    }
    console.log("Main function finished.");
}

mainFunction();
console.log("Program finished.");