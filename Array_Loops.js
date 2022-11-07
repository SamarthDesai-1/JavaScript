let array = [1 ,2 ,3 ,7 ,85 ,856 ,"samarth"];

// For each loop
// is used for create operation on existing array
array.forEach(items => {
    console.log(items);
});

// Array.from() Method
let name = "samarth";
let arr = Array.from(name);
console.log(arr);

// for of loop
for (let i of array) {
    console.log(i);
}

// map method
// is used for creating new array
let new_array_1 = array.map((value ,index ,array) => {
    console.log(value ,index ,array);
    return value * index;
})
console.log(new_array_1);

// filter method
let new_array_2 = array.filter((value) => {
    return value < 85;
})
console.log(new_array_2);

// reduce method
// first way
let new_array_3 = [15 ,75 ,74 ,85 ,85 ,62 ,0 ,2 ,5 ,4];
let new_array_4 = new_array_3.reduce((args1 ,args2) => {
    return args1 + args2;
})
console.log(new_array_4);

// second way
const red = (a ,b) => {
    return a + b;
}
let newarr = new_array_3.reduce(red);
console.log(newarr);