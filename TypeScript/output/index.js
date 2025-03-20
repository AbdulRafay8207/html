"use strict";
// console.log("hello world")
// let fullname = "Rafay"
// fullname = "Abdul Rafay"
// // fullname = 1
// let EmployeeObj2 = {
//     id: 123,
//     name: "Abdul Rafay",
//     isEmployeed: true,
// };
// const multiply = function (a, b) {
//     return a * b;
// };
const processData = function (input) {
    if (typeof input === "string") {
        return input.toLowerCase();
    }
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum = sum + input[i];
    }
    return sum;
};
let result = processData("RAFAY");
console.log(result);
