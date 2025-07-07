"use strict";
let n, n2, greatest;
n = parseFloat(prompt("Enter a Number:"));
n2 = parseFloat(prompt("Enter 2nd Number:"));
document.write("1st number = " + n + "\n");
document.write("\n2nd number = " + n2 + "\n");
if (n > n2) {
    document.write(n + " is the greatest Number");
}
if (n2 > n) {
    document.write(n2 + " is the greatest Number");
}