function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = getRandomNumber(1, 100);
console.log("Random number:", randomNum);
function checkEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOrOdd(7)); // Output: Odd
console.log(checkEvenOrOdd(12)); // Output: Even
function checkEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}console.log(checkEvenOrOdd(7)); // Output: Odd
console.log(checkEvenOrOdd(12)); // Output: Even

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: olleh
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 8, 2, 5, 10])); // Output: 10



