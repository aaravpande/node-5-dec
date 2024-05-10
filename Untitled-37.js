// Function to change the text color of the heading
function changeColor() {
    var heading = document.querySelector('h1');
    heading.style.color = 'red';
}

// Call the function when the page loads
window.onload = function() {
    changeColor();
};
