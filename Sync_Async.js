// Scynchronous programming
let a = 2;
let b = 3;
console.log("Synchronous Programming");
console.log("A + B -> " + a + b);

// Ascynchronous programming
console.log("Start");
setTimeout(function() {
    console.log("I am settime out");
} ,3000)
console.log("End");