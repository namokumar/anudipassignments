"use strict";
let newtask = []; // Array created.
let list_container = document.getElementById("task-list-container"); // ul selected.
function addtask() // function created.
{
    const task = document.getElementById("new-task").value; // storing value of input box from html.
    if (task.trim() !== "") { // checking input is not a empty string.
        newtask.push(task);  // ✅ Data added to array.
        console.log(newtask); // printing array for checking.
        const li = document.createElement("li");
        li.innerText = task;
        list_container.appendChild(li);
    } else {
        alert("Please Enter a Valid task!");
    }
}