// Question 2 : Write a javascript to input any number and check it is natural number or not.

"use strict";
let n;
n = parseInt(prompt("Enter Enter a Number ="));
if (Number.isInteger(n) && n > 0) {
    document.write(n + " is Natural Number");
}
else {
    document.write(`<font color="red">`+ n + ` is not a Natural Number` + `</font>`)
}