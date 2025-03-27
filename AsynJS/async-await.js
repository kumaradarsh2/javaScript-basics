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