// synchronous

/*
console.log(" I ");

console.log(" eat ");

console.log(" spoon ");

console.log(" with a ");
*/

// Here we can see that JS runs code from top to bottom in a serial
// In this process if any line gets stuck, the entire process gets stuck
// This is called "Synchronous System"

/*****************************************************************************/

// Now let's look at the Asynchronous System

// First lets look at setTimeout function
// This is a built-in function of JS which allows us to run a function after a specific amount of time

// We are going to pass a callback function as argument
// Note: setTimeout() is a aysnc function

/*
setTimeout(() => { 
    console.log(" ice-cream ");
}, 4000); // time in milliseconds
*/

/*
console.log(" I ");

console.log(" eat ");

setTimeout(() => { 
    console.log(" ice-cream ");
}, 4000); // time in milliseconds

console.log(" with a ");

console.log(" spoon ");
*/

/************************************************************************/

// Callbacks

// function with callback function parameter
function one(call_two) {
    console.log("step 1 completed. Please call step 2");
    call_two();
}

function two() {
    console.log("step 2");
}

// calling function one and executing two too
// one(two);

/****************************************************************************************/

// Order and Production of Ice-creams
// Without order, production can't start

// Here's how we form relation between order and production using callback
/*
const order = (call_production) => {

    console.log("Order Placed. Please call production")
    call_production();
};

const production = () => {
    console.log("Order received. Starting Production...")
};



// invoking order function 
order(production); // passing production (callback) function as argument

// Note: this is how we form relationship between functions using Callback


/*****************************************************************************************************/
/*
// Creating an object of arrays
const stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

const order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);
};

// This is how 'Callback Hell' look like
const production = () => {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("The fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log("Machine was started");
                    setTimeout(() => {
                        console.log(`ice-cream was placed on ${stocks.holder[0]}`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(() => {
                                console.log("Serving the ice-cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);    
        }, 2000);
    }, 0);
};

order(2, production); 
*/
/**********************************************************************************************************/

const stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

const order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("Our shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

.then(() => {
    return order(0, () => console.log("Production has started"));
})

.then(() => {
    return order(2000, () => console.log("Fruit has been choped"));
})

.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
})

.then(() => {
    return order(1000, () => console.log("Machine was started"));
})

.then(() => {
    return order(2000, () => console.log(`ice-cream was placed on ${stocks.holder[0]}`));
})

.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was added as toppings`));
})

.then(() => {
    return order(2000, () => console.log("Ice-cream was served"));
})

.catch(() => {
    console.log("Customer left");
})

.finally(() => {
    console.log("Day ended. Shop is closed");
})
