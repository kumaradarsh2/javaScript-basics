/*
async function order() {
    try {
        await abc;
    }
    catch(error) {
        console.log("abc doesn't exist", error)
    }

    finally{
        console.log("runs code anyways");
    }
}

order()
.then(() => {
    console.log("Nothing here");
});    

*/

/*
const stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};


const is_shop_open = true;

const toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("What topping do you like? "));
        }, 3000);
    });
};

async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await toppings_choice();

    console.log(" D ");
    console.log(" E ");

}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking the orders");
*/


/********************************************************************************* */
// Normal Function vs Async Function
function normalFunction() {
    return "Hello, world!";
}

async function asyncFunction() {
    return "Hello, async world!";
}

console.log(normalFunction()); // "Hello world"
console.log(asyncFunction());  // Promise { "Hello, async world!" }

// Note: asyncFunction returns a Promise instead of an actual value, that's why we use 'await'  
// async makes a function returns a Promise
// await pauses the execution of async function until the Promise resolves

/************************************************************************************* */

// What is fetch?
// fetch is used to make network requests (like getting data from an API)
// it returns a Promise, meaning we need .then() or await to get the actual data

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error))
    





