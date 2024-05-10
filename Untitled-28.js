console.log("Hello, world!");
let greeting = "Hello";
const PI = 3.14;
var age = 25;
function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result); // Output: 8
let x = 10;
if (x > 0) {
    console.log("Positive");
} else if (x < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5

numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

   ); // Output: New York
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["Reading", "Gardening", "Swimming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(person.firstName); // Output: John
console.log(person.hobbies[0]); // Output: Reading
console.log(person.address.city); // Output: New York
