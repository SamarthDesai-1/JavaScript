// 1
let string = "samarth\"";
console.log("The length of string is : " + string.length);

// 2
string = "Hello ,i am steve jobs co-founder of apple."
console.log(string.includes('steve')); // return true or false

console.log(string.endsWith('.')); // return true or false

console.log(string.startsWith('Hello')); // return true or false

// 3
console.log(string.toLowerCase());

// 4
string = "Please give rs 1000";
console.log(string.slice("Please give rs".length));

// 5
string = "Samarth";
string[4] = '$';
console.log(string);
// Answer is no