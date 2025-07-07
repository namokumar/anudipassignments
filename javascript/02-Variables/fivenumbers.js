// Question 3:
// Write a script in javascript to input any five number and find out their average in javascript and display in alert box

"use strict";
let n, n2, n3, n4, n5, average;
n = parseInt(prompt(" Please enter 1st number :"));
n2 = parseInt(prompt(" Please enter 2nd number :"));
n3 = parseInt(prompt(" Please enter 3rd number :"));
n4 = parseInt(prompt(" Please enter 4th number :"));
n5 = parseInt(prompt(" Please enter 5th number :"));
average = (n + n2 + n3 + n4 + n5) / 5;
alert("1st number =" + n + "\n 2nd number =" + n2 + "\n 3rd number =" + n3 + "\n 4th number =" + n4 + "\n 5th number =" + n5 + "\n Average =" + average);