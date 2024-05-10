const jsonData = '{"name": "John", "age": 30}';
const parsedData = JSON.parse(jsonData);
console.log("Parsed JSON:", parsedData);

const objData = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(objData);
console.log("JSON String:", jsonString);
// setTimeout example
console.log("Start");
setTimeout(() => {
    console.log("Delayed message");
}, 2000);
console.log("End");

// setInterval example
let counter = 0;
const intervalId = setInterval(() => {
    console.log("Counter:", counter++);
    if (counter === 5) {
        clearInterval(intervalId);
    }
}, 1000);
const fruits = ["apple", "banana", "cherry"];

// forEach example
fruits.forEach(fruit => {
    console.log(fruit);
});

// Includes example
console.log("Contains banana?", fruits.includes("banana")); // Output: true

// Find example
const foundFruit = fruits.find(fruit => fruit === "cherry");
console.log("Found fruit:", foundFruit); // Output: cherry
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Adding a new property
person.job = "Developer";

// Deleting a property
delete person.age;

console.log("Updated Person:", person);
const regex = /hello/i; // Case insensitive match for "hello"
const str = "Hello, world!";

console.log("Match:", regex.test(str)); // Output: true
// HTML: <button id="myButton">Click me</button>

document.getElementById("myButton").addEventListener("click", function(event) {
    console.log("Button clicked");
    console.log("Event:", event);
});

