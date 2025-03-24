// refer to the documentation at mozilla.developer.org

// string literals
const name = "Adarsh";
console.log(typeof name); // 'string' 

// we can also make string using string object
const anotherName = new String("Joe");
console.log(typeof anotherName); // 'object'

// We can access the methods of strings using dot or bracket notation

// There are built in methods for strings that allow us to operate and manipulate strings
let sentence = "A new sentence";

const doesIncludeNew = sentence.includes('new');
console.log('doesIncludeNew', doesIncludeNew);

// split(), will split the sentence into an array
const wordsInSentence = sentence.split(' '); // so split whenever we encounter an empty space
console.log(wordsInSentence);

// can access the characters by index values
console.log(sentence[0]);

let email = "TestEmail@gmail.com";
console.log(email.toLowerCase());
console.log(email.toUpperCase());

// trim() removes spaces from the beginning and the end
const greeting = " Hello world! ";

console.log(greeting.trim());

// startswith and endswith are some other methods of string
console.log(`\nTemplateString Starts below\n`);
// Template literals in string
let firstName = "Adarsh";
let lastName = "Kumar";

// let fullName = "Adarsh" + "Kumar";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);