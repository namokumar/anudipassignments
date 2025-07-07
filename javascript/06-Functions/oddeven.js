// Question 2: Write a script in javascript to create a function to check a number is odd or even. Call this function when a button is clicked.

"use strict";
function oddEven() {
    let n;
    n = parseInt(prompt("Enter Enter a Number ="));
    if (n % 2 == 0) {
        document.write(n + " is Even Number");
    }
    else {
        document.write(n + " is Odd Number");
    }
}
