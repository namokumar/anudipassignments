// Question 2: Write a javascript to check a given number is divisible by both 3 and 4 or not.

let n;
n = parseFloat(prompt(`Please Enter a number:`));
if (n%3==0 || n%4==0) {
    document.write(n + " is divisble by 3 or 4");
}
else {
    document.write(`<font color="red">` + n + ` is not divisble by 3 or 4`);
}