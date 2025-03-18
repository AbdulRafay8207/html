console.log("hello world")
let fullname = "Rafay"
fullname = "Abdul Rafay"
// fullname = 1

const arr: number[] = [1,1]
const arr1: string[] = ["a"]

const unionArr: (number | string) [] = [1,"a"]
const unionArr1: (number | string | Date) [] = [1,"a",new Date()]

function sayHello(name: string, age: number){
  console.log("hello", name,age)
  
}
// sayHello(1,1)