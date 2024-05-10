var name = "John";
var age = 30;
var age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
for (var i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}
var fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("John");
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});
document.getElementById("myDiv").innerHTML = "New content";
var currentDate = new Date();
console.log(currentDate);
var pattern = /apple/i;
var text = "I have an Apple.";
console.log(pattern.test(text)); // Output: true
try {
    // Code that may throw an error
} catch (error) {
    console.log("An error occurred: " + error.message);
}
