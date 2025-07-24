// Write a Javascript script to create a textfield and display the data of the textfield in <div> in red color with bold style on change  of textfield.

"use strict";

function colorchange() {
    let firsttext = document.getElementById("first").value; // Storing the data of 1st Text box here in this variable.
    const display = document.getElementById("displayDiv");
    display.innerText = firsttext;
    display.style.color = "red";
}