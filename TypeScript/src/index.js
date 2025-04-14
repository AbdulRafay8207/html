// console.log("hello world")
// let fullname = "Rafay"
// fullname = "Abdul Rafay"
// // fullname = 1
var processData = function (input) {
    if (typeof input === "string") {
        return input.toLowerCase();
    }
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum = sum + input[i];
    }
    return sum;
};
var ary = [1, 2, 3, 4, 5];
var result = processData(ary);
console.log(result);
var printing = function (callback, input) {
    var test = callback(input);
    console.log(test);
};
printing(processData, [1]);
