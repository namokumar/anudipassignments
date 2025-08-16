/*
Question 1: Dynamic To-Do List Application
Create a simple web page with:
• An input field (<input type="text">) for adding new tasks.
• An "Add Task" button.
• An unordered list (<ul>) where tasks will be displayed.
• For each task in the list, include a "Mark Complete" button and a "Delete" button.


Implement the following JavaScript functionality:

Adding Tasks: When the "Add Task" button is clicked:
• Get the text from the input field. ✅
• If the input field is not empty, add the task to an array. ✅
• Create a new list item (<li>) for the task and append it to the <ul>. ✅
• Inside the <li>, display the task text. ✅
• Add a "Mark Complete" button. When clicked, it should toggle a "completed" class on the <li> (you'll need to define this class in CSS to change its appearance, e.g., strike- through).
• Add a "Delete" button. When clicked, it should remove the <li> from the DOM and also remove the task from the array.
• Clear the input field.
*/

"use strict";
let newtask = []; // Array created.
let list_container = document.getElementById("task-list-container"); // ul selected.
function addtask() // function created.
{
    const task = document.getElementById("new-task").value; // storing value of input box from html.
    if (task.trim() !== "") { // checking input is not a empty string.
        newtask.push(task);  // ✅ Data added to array.
        console.log(newtask); // printing array for checking.
        const li = document.createElement("li"); // created new <li> tag.
        li.innerHTML = task + ` <button class="completed">Mark Complete</button>`; // adding task(user input) in <li>.
        list_container.appendChild(li); // adding li into selected ul.
    } else {
        alert("Please Enter a Valid task!");
    }
}