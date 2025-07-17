// Question 4: Write a script in javascript to create a function to calculate product of two number. call this function when a button is clicked.

"use strict";

function product() {
    let a,b,p;
    a = parseInt(prompt("Enter 1st number: "));
    b = parseInt(prompt("Enter 2nd number: "));
    p = a * b;
    document.write(" Product = " + p);
}