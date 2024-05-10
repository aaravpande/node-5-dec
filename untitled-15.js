try {
    // Code that may throw an error
    throw new Error("An error occurred");
} catch (error) {
    console.error("Caught an error:", error.message);
}
const name = "Alice";
const age = 25;
console.log(`Name: ${name}, Age: ${age}`);
const currentDate = new Date();
console.log("Current date:", currentDate);

const tomorrow = new Date();
tomorrow.setDate(currentDate.getDate() + 1);
console.log("Tomorrow's date:", tomorrow);
function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operation completed successfully");
        }, 2000);
    });
}

asyncOperation()
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
    const sentence = "Hello, world!";
    console.log("Length:", sentence.length);
    console.log("Uppercase:", sentence.toUpperCase());
    console.log("Substring:", sentence.substring(7, 12));
    console.log("Split:", sentence.split(","));
    const mySet = new Set([1, 2, 3, 3, 4, 5]);
    console.log("Set:", mySet);
    
    const myMap = new Map();
    myMap.set("name", "John");
    myMap.set("age", 30);
    console.log("Map:", myMap);
        