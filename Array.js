// Quick Quiz print array using all type of for loop

const array = () => {
    let arr = [1 ,2 ,3 ,"String" ,true ,false ,null ,undefined];

    // Simple for loop

    for (let i = 0; i < arr.length; i++) {
        console.log("Elements : " + arr[i]);
    }
    console.log("\n");

    // for in loop

    for (let keys in arr) {
        console.log(arr[keys]);
    }
    console.log("\n");

    // for of loop

    for (let keys of arr) {
        console.log(keys);
    }
}
array();


// let array = [1 ,2 ,85 ,85 ,"samarth" ,"C++"];
// let array1 = ["ds" ,"dsfsdf" ,"sggdf"];

// push() method
// console.log(array.push("String"));

// toString() method
// let new_type = array.toString();
// console.log(typeof(new_type));

// Join method
// console.log(array.join('_'));

// pop method()
// let element = array.pop();
// console.log(element);

// reverese method
// console.log(array.reverse());

// splice method
// console.log(array.splice(1 ,2 ,"harry" ,"samarth"));

// slice method
// console.log(array.slice(0 ,5));

