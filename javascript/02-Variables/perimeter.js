// Question 1 :
// Write a script to input  length and breadth of Rectangle and find out perimeter and area of rectangle in javascript and display all the data in alert box.

"use strict";
let length, breadth, perimeter;
length = parseInt(prompt(" Please enter the length of the Rectangle"));
breadth = parseInt(prompt(" Please enter the breadth of the Rectangle"));
perimeter = 2 * (length + breadth);
alert("lenght =" + length);
alert("Breadth =" + breadth);
alert("Perimeter of Rectangle =" + perimeter);
