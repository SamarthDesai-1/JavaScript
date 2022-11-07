// for loop.
// Sum of first n natural number.
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(`The sum of first five natural number is : ${sum}`);

// Multiplication table of 5.
let n = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}

// for in loop.
let obj = {
    samarth: 95 ,
    raxit: 85 ,
    het: 86 ,
    piyush: 88 ,
    harshil: 87
}
for (let items in obj) {
    console.log(items + " " + obj[items]);
}

// for of loop.
let array = [1 ,7 ,8 ,7 ,"samarth" ,"jannat"];
for (let items of array) {
    console.log(items);
}

// while loop
let a = 15;
let i = 0;
while (i <= a) {
    console.log(i);
    i++;
}

// do-while loop
let b = 15;
let j = 0;
do {
    console.log(j);
    j++;
} while (j <= a)