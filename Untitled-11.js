// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    var li = document.createElement("li");
    li.textContent = taskInput.value;

    // Create a delete button for the task
    var deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
