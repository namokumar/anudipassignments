// Question 2 : Write a javascript to input any number and check it is natural number or not.

"use strict";
let n;
n = parseInt(prompt("Enter Enter a Number ="));
if (n%2==0) {
    document.write(n + " is Even Number");
}
if (n % 2 != 0) {
    document.write(n + " is Odd Number");
}