let a = { value: 10 };
// let b = a; // here a and b reference the same object

let b = {};

Object.assign(b, a); // all the properites and methods of 'a' (source object) is copied directly to 'b' (target object)

// So b now has a copy of the properties of a. b is a separate (independent) object, and changes to b will not affect a.
b.value = 20;

console.log(a);
console.log(b);