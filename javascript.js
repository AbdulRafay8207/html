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
//  console.log(fruits)
//  console.log(lastfruit)
 
 //Concat

 car = ["civic", "BMW"]
 car2 = ["Honda"]
 totalcars = car.concat(car2)
 totalcars.push(123)
//  console.log(totalcars)
//  console.log(car)
//  console.log(car2)

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
  
  //Swap

 a = 1
 b = 2
 c = a // 1
 a = b // 2
 b = c // 1

//  console.log(a, b)

//Changing from string to Number

personA = "18"
personB = Number(personA)
// console.log( personA)
// console.log( personB)
// console.log(typeof personA)
// console.log(typeof personB)

//Changing from number to string

 age = 18
age.toString()
//  console.log( age)          // ???????????????????????????
//  console.log(typeof age)

//Concating

firstName = "abdul"
lastName = " rafay"
fullname = firstName+lastName
// console.log(fullname)

//another method

firstName = "abdul"
lastName = "rafay"
fullname = `${firstName} ${lastName}!` //This one method is recommended and you can edit too

rnumber = `random numbers ${Math.random()*500}`
//OR
a = "Random Number"
b = Math.random()*500
finalresult = a+b
// console.log(finalresult)

//Task

  restaurant = {
  name : "Ichiran Ramen",
  address : `${Math.floor(Math.random()*100)+1} Johnson Ave`,
  city : "Brooklyn",
  state : "NY",
  zipcode : "11206",
}
  fullinfo = `${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode} asdasd`


//  console.log(fullinfo)

 //To modify key
 objj = {
  name : "rafay",
  age : 18,
  job : "np"
 }

 objj.name = "AbdulRafay"
 delete objj.job
 
//  console.log(objj)

//Task 3

student = {
  name : "AbdulRafay",
  age : 18,
  subjects : ["Math", "english", "physics"],
  isEnrolled : true
}
// console.log("Name",student.name)
// console.log("age",student.age)
// console.log("subjects",student.subjects)
// console.log("isEnrolled",student.isEnrolled)

student.grade = "A"
student.isEnrolled = "false"

// console.log(student)

//CONDITIONS

// myAge = 18
// if(myAge > 20){
  // console.log("Your age is greater than 20 ")
// }
// else{
  // console.log("you are younger")
// }

//Task

// isUserloggedin = false                                    Method
// isUserproSubscribe = true                                    

// if(isUserloggedin == false){
//   console.log("please login first to see the data")
// }
// if(isUserproSubscribe){
//   console.log("you are pro Subscriber")
// }
// else{
//   console.log("please subscribe")
// }
//------------------------ ACTUAL METHOD

// isUserloggedin = false
// isUserproSubscribe = false

// if(isUserloggedin == false){
//   console.log("please login first to see the data")
// }
// else{
//   if(isUserproSubscribe){
//   console.log("you are pro Subscriber")
// }
// else{
//   console.log("please subscribe")
// }
// }

//----------------------------------- NOT OPERATOR

// isUserloggedin = true
// isUserproSubscribe = false

// if(!isUserloggedin){
//   console.log("Please login first")
// }

//----------------------------------

user = false
pro = true
if(user && pro){
  console.log( "you are pro subscriber")
}else{
  console.log("pleasea login first")
}
if(user && !pro){
  console.log("please subscribe")
}