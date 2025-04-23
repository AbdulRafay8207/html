"use strict";
// console.log("hello world")
// let fullname = "Rafay"
// fullname = "Abdul Rafay"
// // fullname = 1
const merge = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const Person1 = { name: "Abdul", age: 19 };
const Address = { country: "Pakistan", city: "Karachi" };
const fullinfo = merge(Person1, Address);
console.log(fullinfo);
// Constraints Example----------------------------------------------------------
// interface Lengthwise {
//   length: number
// }
// function logLength<T extends Lengthwise>(arg: T): void {
//   console.log(arg.length);
// }
// logLength("abc")
// Type Parameters in Generic Constraints------------------------------------------
// function getProperty<T, K extends keyof T>(obj:T, key: K){
//   console.log(obj[key]);
// }
// let x = {a: 1, b:2, c:3, d: 4}
// getProperty(x,"c")
// Generic in Class------------------------------------------------
// class GenericClass<T>{
//   value: T;
//   constructor(value: T){
//     this.value = value
//   }
//   getValue():T{
//     return this.value
//   }
//   printValue<V>(arg: V){
//     console.log(arg);
//   }
// }
// const tesing = new GenericClass<string>("Hello")
// console.log(tesing.getValue());
// tesing.printValue<number>(123)
