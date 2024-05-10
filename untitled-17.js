const num = -4.6;

console.log("Absolute value:", Math.abs(num));
console.log("Ceiling value:", Math.ceil(num));
console.log("Floor value:", Math.floor(num));
console.log("Rounded value:", Math.round(num));
console.log("Square root:", Math.sqrt(16));
console.log("Random number:", Math.random());
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log("Concatenated array:", array2);

const object1 = { name: "John", age: 30 };
const object2 = { ...object1, city: "New York" };
console.log("Merged object:", object2);
const promise1 = Promise.resolve("First promise resolved");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second promise resolved"), 2000));

Promise.all([promise1, promise2])
    .then(values => console.log("All promises resolved:", values))
    .catch(error => console.error("Error:", error));
    function fetchData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Data fetched successfully");
            }, 2000);
        });
    }
    
    async function getData() {
        try {
            const data = await fetchData();
            console.log("Data:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    getData();
    const str = "Hello, world!";

    console.log("Length:", str.length);
    console.log("Substring:", str.substring(0, 5));
    console.log("Index of 'world':", str.indexOf("world"));
    console.log("Split:", str.split(", "));
    console.log("Trimmed:", "   Trimmed string   ".trim());
    const mySet = new Set([1, 2, 3, 3, 4, 5]);
    console.log("Set:", mySet);
    
    const myMap = new Map();
    myMap.set("name", "John");
    myMap.set("age", 30);
    console.log("Map:", myMap);
            