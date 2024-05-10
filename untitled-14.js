function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Some data fetched";
            if (data) {
                resolve(data);
            } else {
                reject("Data fetching failed");
            }
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log("Data fetched:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
// HTML: <button id="myButton">Click me</button>

document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked");
});
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
const numbers = [1, 2, 3, 4, 5];

// Map function example
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Filter function example
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reduce function example
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const john = new Person("John", 30);
john.greet();
