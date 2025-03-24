// JS has date object

let now = new Date();

console.log(now);

let Jan01_1970 = new Date(0); // 0 means zerso milliseconds from 1970
console.log(Jan01_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

const Jan01_2024 = new Date(2024, 0, 1);
console.log(Jan01_2024);

// several methods (though refer to developer.mozilla.org)
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const time = now.getTime(); // time being in ms since the epoch
const day = now.getDay();

console.log(`${year} ${month} ${date} ${day} ${time}`);