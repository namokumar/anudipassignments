// Write a Javascript script to create 3 text field then merge the data of 1st text field with the 2nd text field and display in the 3rd textfield on change event of 2nd textfield.

"use strict";
function mergeText() {
    let firsttext = document.getElementById("first").value; // Staring the data of 1st Text box here in this variable.
    let secondtext = document.getElementById("second").value; // Staring the data of 1st Text box here in this variable.
    let result = firsttext + secondtext;
    document.getElementById("result").value = result;
}