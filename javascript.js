name = "Rafay"                                        
age = 29,       
pie = 3.147,    
Pakistani = true
Karachi = null  

/* Non-primitive = Object */

user1 = {
name : "Rafay",                                      /* string data */
age : 17,                                            /* Integer data */
pie : 3.147,                                         /* float data */
Pakistani : false,                                    /* Boolean data */
Karachi : null                                      /* null/undefined data */      
}

user2 = {
  name : "Abdul",
  age : 20
}

/* Non-primitive = array */

random = [2, 4, 6, 8]

arr1 = [
  user2 = {
  name : "Abdul",
  age : 20
},

user3 = {
  name : "Rafay",
  age : 17
}
]


user4 = ["rafay", 2, true, 3, 4]


var fname = "Abdul"
  fname = "rafay"


  obj1 = {
    n : "rafay",
    a : 17
  }

  obj2 = obj1

  obj1 = {
    n : "zameer",
    a : 2
  }
  


  
a = 2
b = a
a = 4


//Non-pirimitive data type with spread operator

obj1 = {name : "Abdul", age : 17}
obj2 = {...obj1}
obj1.name = "Rafay"


//Non-primitive data type with array

obja = ["nameAbdul", "age17"]
objb = {...obja}
obja = ["Rafay"]



{
  let a = 1
  
  {
    
    a =a+1
    
  }
}

{
  const a = 2

}

 var a =  Date()
 
 

 a = 2+3
 s = 7-2
 m = 2*2
 d = 2/2
 p = 2**3

 fruits = ["apple", "banana", "cherry"]
fruits.push(123,456)


 fruits = ["apple", "banana", "cherry"]
 lastfruit = fruits.pop()
 
 //Concat

 car = ["civic", "BMW"]
 car2 = ["Honda"]
 totalcars = car.concat(car2)
 totalcars.push(123)
 /*console.log(totalcars)
 console.log(car)
 console.log(car2)*/

//include

 fruits = ["apple", "banana", "cherry"]
 fruit = fruits.includes("banana") //Answer is true

 fruits = ["apple", "banana", "cherry"]
 fruit = fruits.includes("mango") //Answer is false

 //Array.isArray

 fruits = ["apple", "banana", "cherry"]
 fruit = Array.isArray(fruits)
 
 a = [1]
 b = Array.isArray(a)
 
 //Slice

 fruits = [1, 2, 3, 4, 5, 6,]
 newfruit = fruits.slice(1, 3)
//  console.log("sliceFruits", fruits)
//  console.log("sliceNewfruit", newfruit)
 
 //Splice

 fruits = [1, 2, 3, 4, 5, 6,]
 newitems = fruits.splice(1, 4)
//  console.log("splice", fruits)
//  console.log("splice", newitems)

colorsetone = ["red", "blue"]
colorsettwo = colorsetone 
colorsetone.push("green")   //this is also known is shallow copy buz its not changing its refrence
// console.log(colorsetone)
// console.log(colorsettwo)

 obj = {
  name : "rafay",
  name : "raFay"
 }
//  console.log(obj)

 //       OBJECT EXERCISE #1

 product = {
  name : "HP ElitebookSleeve",
  inStock : true,
  price : 1000,
  totalUnits : 7,
  colors : ["black", "white", "gray"]
 }
  // console.log(product["name"])

  // console.log(Math.random())

  randomvalue = Math.random() * 100
  // console.log(randomvalue)

  randomenumber = {
   name : "rafay",
   address : Math.floor(Math.random()*7)
  }
  // console.log(randomenumber)

  number = Math.random()*500
  numbers = Math.floor(number)+500
  console.log(numbers)