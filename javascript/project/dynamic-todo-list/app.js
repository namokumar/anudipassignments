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
        li.innerText = task; // adding task(user input) in <li>.
        list_container.appendChild(li); // adding li into selected ul.
    } else {
        alert("Please Enter a Valid task!");
    }
}