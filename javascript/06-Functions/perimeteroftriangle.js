// Question 1: Write a script in javascript to create a function to calculate perimeter of triangle. Call this function when a button is clicked.

"use strict";
function calculatePerimeter() {
    let a, b, c, perimeter;
    a = parseFloat(prompt("Please Enter the Value of A: "));
    b = parseFloat(prompt("Please Enter the Value of B: "));
    c = parseFloat(prompt("Please Enter the Value of C: "));
    perimeter = a + b + c;
    document.write("Perimenter of Triangle =" + perimeter + "<br /><br />")
}