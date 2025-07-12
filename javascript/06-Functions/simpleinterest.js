// Question 3: Write a script in javascript to create a function to calculate simple interest. call this function when a button is click

"use strict";

function simpleInterest() {
    let p, r, t, si;
    p = parseInt(prompt("Enter the Principle Amount: "));
    r = parseInt(prompt("Enter the Rate of Interest: "));
    t = parseInt(prompt("Enter the Time: "));
    si = (p * r * t) / 100;
    document.write(" Simple Interest = " + si);
}