// * ES6 Feature: Using const and let for variable declarations

//* Select element from the dom
const todoList = document.getElementById('todolist');
const taskInput = document.getElementById('taskInput');

// * ES6 Feature: Arrow function
const addTask = () => {
    // * Get the task input value
    const taskTest = taskInput.value;
    console.log(taskTest)

    // * Check if the input is not empty
    if (taskTest.trim() !== "") {
        // * Create a new item list 
        const newTask = document.createElement('li');
        newTask.className = 'todo-item';

        // * Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check-box';
        checkbox.addEventListener('change', toggleTask);

        // * Create a span for the tack text
        const taskTestSpan = document.createElement('span');
        taskTestSpan.className = 'task-text';
        taskTestSpan.textContent = taskTest;

        // * Append the checkbox and task text to the list item(li)
        newTask.appendChild(checkbox);
        newTask.appendChild(taskTestSpan);

        // * Append the new task to the todo list 
        todoList.appendChild(newTask);

        // * Clear the input field
        taskInput.value = '';
    }
};






// * ES6 Feature: Arrow function
const toggleTask = (event) => {
    console.log(event);
    const taskItem = event.target.parentNode;
    //  * ES6 Feature: Template literals
    taskItem.classList.toggle('completed');
};

// * Additional Features:
// * - Mark tasks as completed
// * - Remove completed tasks
// * - Clear all tasks


// * Function to remove completed task
const removeCompletedTasks = () => {
    const completedTasks = document.querySelectorAll('.completed');
    console.log(typeof completedTasks);
    completedTasks.forEach(task =>  task.remove());
}

// * Function to clear all tasks
const clearAllTasks = () => {
     todoList.innerHTML = '';
};

// * Event listener for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('removeCompleted').addEventListener('click', removeCompletedTasks);
    document.getElementById('clearAll').addEventListener('click', clearAllTasks);
});
