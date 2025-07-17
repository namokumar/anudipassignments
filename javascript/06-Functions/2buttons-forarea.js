// Question 4: Write a script in javascript to create a function to calculate product of two number. call this function when a button is clicked.

"use strict";

function circleArea() {
    let radius = parseFloat(prompt("Enter the radius ="));
    let area;
    const pi = 3.14159; // Value of Pi
    area = pi * radius * radius;
    alert("Area of circle =" + area);
}

function recArea() {
    let length = 12;
    let breadth = 24;
    let area, perimeter;
    area = length * breadth;
    perimeter = 2 * (length + breadth);
    alert(" Area of Rectangle = " + perimeter);
}