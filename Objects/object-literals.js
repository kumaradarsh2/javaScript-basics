// Objects are a way to store data in key-value pairs
// Makes code more cohesive and organized

const cat = {
    name: "tom",
    age: 4,
    breed: undefined,
    eat: function() {
        console.log("Chomp!");
    },
    meow() {
        console.log("meoww!!!");
    }
}

for (const info in cat) {
    // console.log(info); // to get the keys

    // to get the values
    console.log(cat[info]);
}

console.log("\nCalling methods below");
cat.eat();
cat.meow();       