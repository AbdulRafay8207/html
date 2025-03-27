"use strict";
// console.log("hello world")
// let fullname = "Rafay"
// fullname = "Abdul Rafay"
// // fullname = 1
// const arr: number[] = [1,1]
// const arr1: string[] = ["a"]
// const arr3: Array<number |string| Date> = [1,1,"a"]
// const unionArr: (number | string) [] = [1,"a"]
// const unionArr1: (number | string | Date) [] = [1,"a",new Date()]
// function sayHello(name: string, age: number){
//   console.log("hello", name,age)
// }
// // sayHello(1,1)
// Tabular Type in TS----------------------------------------------------------------------
// const employee: [number, string, boolean] = [123,"Abdul Rafay", true]
// TYPESCRITP IN OBJECT---------------------------------------------------------------------
// let employeeObj = {
//   id: 123,
//   name: "Abdul Rafay",
//   isEmployeed: false
// }
// let employeeObj2:{
//   id: number;
//   name:string;
//   isEmployeed: boolean;
// } = {
//   id: 123,
//   name: "Abdul Rafay",
//   isEmployeed: false
// }
//************************************************************************************************** */
// interface Employee {
//   id: number;
//   name:string;
//   isEmployeed: boolean;
//   transportation?: boolean
// }
// let employeeObj2: Employee = {
//     id: 123,
//     name: "Abdul Rafay",
//     isEmployeed: false
//   }
//*********************************************************************** */
// interface Human {
//   name: string;
// }
// interface Employee {
//   id: number;
//   name:string;
//   isEmployeed: boolean;
//   transportation?: boolean
// }
// let employeeObj2: Employee | Human = {
//     id: 123,
//     name: "Abdul Rafay",
//     isEmployeed: false
//   }
//*********************************************************************** */
// interface Human {
//   name: string;
// }
// interface Employee {
//   id: number;
//   isEmployeed: boolean;
//   transportation?: boolean
// }
// type EmployeeType = Human & Employee;
// let EmployeeObj2: EmployeeType = {
//   id: 123,
//   name: "Abdul Rafay",
//   isEmployeed: true,
// }
// FUNCTIONS IN TYPESCRIPT-------------------------------------------------------------------
// interface Multiply {
//   (a: number,b:number): number
// }
// const multiply: Multiply = function(a,b){
//   return a*b;
// }
//Function Exercise TS------------------------------------------------
// interface Data {
//   (input:string|number[]): string|number
// }
// const processData: Data = function(input){
//   if(typeof input === "string"){
//     return input.toLowerCase()
//   }
//    let sum = 0
//   for(let i=0;i<input.length;i++){
//     sum = sum+input[i]
//   }
//   return sum
// }
// let ary :number[] = [1,2,3,4,5]
// let result = processData(ary)
// console.log(result)
// /****************************************BothUsed***************************************************** */
// interface PrintType{
//   (callback: Data, input: string|number[]): void
// }
// const printing: PrintType = (callback, input )=> {
//   const test = callback(input)
//   console.log(test)
// }
// printing(processData,[1])
// Ternary Opeariotr----------------------------------------------------------------------------------
// const isEven = (input:number):boolean  // NEED TO DONE
// Spread Operator On Array----------------------------------------------------------------------------
// const colors: string[] = ["red", "green", "blue"]
// const favColors:string[] = ["orange", "purple"]
// const lightColor:string = "white"
// const allColors:string[] = [...favColors, lightColor, ...colors]
// console.log(allColors)
// *******************************************************************************************
// interface User {
//   id: number,
//   name: string,
//   email: string,
//   age: number
// }
// const user: User = {
//   id: 1,
//   name: "john",
//   email: "john@gmail.com",
//   age: 30
// }
// console.log(user)
// const updatedUser = {...user, email: "johni@gmail.com", age: 31}
// console.log(updatedUser);
// const {email,...rest} = user // Deleting email
// console.log(rest);
// ************************************************************************************************
// function sum(x:number, y:number, z: number): number {
//   return x+y+z
// }
// const number: [number,number,number] = [1,2,3]
// console.log(sum(...number));
//************************************************************************************************* */
// function mergeArrays(array1: number[], array2: number[]): number[] {
//   return {...array1,...array2}
// }
//                                                             // Need to solve
// let array1:number[] = [1,2,3]
// let array2:number[] = [4,5,6]
// let result = mergeArrays(array1,array2)
// console.log(result);
//Rest Operator-------------------------------------------------------------------------------
// type Bio = string | number
// function bio(...args: Bio[]){
//   console.log(args)
// }
// bio("rafay",21,"Designer")
// ***************************************************************************************
// function sum(...Numbers : number[]){
//   let sum = 0
//   Numbers.forEach(num => {
//     sum += num
//   });
//   return sum
// }
// console.log(sum(2+2))
// ********************************************************************************************
// const shoppingCart = [
//   {name: "bread" , price: 120},
//   {name: "eggs", price: 100},
//   {name: "Milk", price: 200}
// ]
//                                                                                   // Need to understand
// const result = shoppingCart.reduce((accumulator,currentValue) => {
//   return (accumulator += currentValue.price)
// },0)
// console.log(result)
