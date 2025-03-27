const customObj = {};

function Person(name, age, gender) {
    customObj.name = name;
    customObj.age = age;
    customObj.gender = gender;
    customObj.message = function() {
        console.log(`Hello ${name}!`);
    }

    return customObj;
}

const newObj = Person("Adarsh", 21, "Male");

console.log(newObj);
// newObj.message();
customObj.message();