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

// isUserloggedin = true                             /* Method */
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
// isUserproSubscribe = true

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

// user = true                            Kinda wrong code
// pro = false
// if(user && pro){
//   console.log( "you are pro subscriber")
// }else{
//   console.log("pleasea login first")
// }
// if(user && !pro){
//   console.log("please subscribe")
// }

// Assignment

// percentage = 59

// if(percentage >= 90){
//   console.log("A Grade")
// }
//   else if(percentage >= 80){
//     console.log("B Grade")
//   }

//   else if(percentage >= 70){
//     console.log("C Grade")
//   }

//   else if(percentage >= 60){
//     console.log("D Grade")
//   }

//   else if(percentage < 60){
//     console.log("F Grade")
//   }

//  SWITCH CASE ----------------------

// trafficlight = "red"
// message = "123"

// switch(trafficlight){
//   case "red":
//     message = "stop immediately"
//     break;

//   case "yellow":
//     message = "prepare to stop"
//     break;

//   case "green":
//     message = "proceed or continue driving";
//     break;

//   default:
//     message = "error"

// }
// console.log(message)

// WITHOUT OPERATOR

// percentage = 91

// switch(percentage){
//   case 90:
//   console.log("A Grade")
//   break;

//   case 80:
//   console.log("B Grade")
//   break;

//   case 70:
//   console.log("C Grade")
//   break;

//   case 60:
//   console.log("D Grade")
//   break;

//   case 50:
//     console.log("FAIL")
//     break;

//     default:
//       console.log("invalid percentage")
// }

//  With Operators

// percentage = 84

// switch(true){
//   case percentage >= 90:
//   console.log("A Grade")
//   break;

//   case percentage >=80:
//   console.log("B Grade")
//   break;

//   case percentage >= 70:
//   console.log("C Grade")
//   break;

//   case percentage >= 60:
//   console.log("D Grade")
//   break;

//   case percentage < 60:
//     console.log("FAIL")
//     break;

//     default:
//       console.log("invalid percentage")
// }

// SWITCH ASSISSMENT

// DayOfWeek = "sunday"

// switch(true){
//   case DayOfWeek == "saturday" || DayOfWeek == "sunday":
//     console.log("wake up at 10am")
//     break;

//   case DayOfWeek == "monday":
//     console.log("wake up at 8am")
//     break;

//   case DayOfWeek == "tuesday" || DayOfWeek == "wednesday":
//     console.log("wake up at 9am")
//     break;

//   case DayOfWeek == "thursday":
//     console.log("wake up at 9:30am")
//     break;

//   case DayOfWeek == "friday":
//     console.log("wake up at 10am")
//     break;

//   default:
//     console.log("error")
// }

// CONFUSION TOPIC----------------------------------

// day = ""
// if (day == "tuesday" || ""){  // value after operator is always true if its non-empty string, if it is empty then it will false
//   console.log("true")
// }else{
//   console.log("error")
// }

//                          LOOPS

// for(i = 5; i <= 50; i = i + 5){
//   console.log(i)
// }

//    TASK

// for(i = 1; i <=20; i= i+1){      //Number 1
//   console.log(i)
// }

// sum = 0                        //Number 2
// for(i=1; i <=5; i= i=i+1){
//   sum = sum + i
// }
// console.log(sum)

// for(i = 5; i > 0; i--){               /* Number 3 */
//     console.log(i)
// }     

// for(i = 2; i <=40; i = i+2){
//   if(i == 10 || i == 20 || i == 30 || i == 40){
//     continue;
//   }
//   console.log(i)
// }

//BREAK-------------------------

// for(i = 1; i <=20; i=i+1){
//   if(i >= 16){
//     break
//   }
//   console.log(i)
// }

//Continue--------------

// for(i = 1; i <=20; i=i+1){
//   if(i == 16){
//     continue
//   }
//   console.log(i)
// }

// Homework for Loop

// for(i = 1; i <= 100; i++){
//   if(i == 10){
//       console.log("Checkpoint! 10")
//   }
//   else if(i == 20){
//       console.log("Checkpoint! 20")
//   }
//   else if(i == 30){
//       console.log("Checkpoint! 30")
//   }
//   else if (i == 40){
//       console.log("Checkpoint! 40")
//   }
//   else if (i == 50){
//       console.log("Half way there!")
//   }
//   else if (i == 60){
//       console.log("Checkpoint! 60")
//   }
//   else if (i == 70){
//       console.log("Checkpoint! 70")
//   }
//   else if (i == 80){
//       console.log("Checkpoint! 80")
//   }
//   else if (i == 90){
//       console.log("Checkpoint! 90")
//   }
//   else if (i == 100){
//       console.log("You made it!")
//   }
// }
// console.log("All done!")

//    While loop

// i = 10
// while(i <= 100){
//   console.log(i)
//   i = i + 10
// }

// While loop game

// guess = 1
// target = Math.floor(Math.random()*10) 

// while(guess !== target){
//   if(guess === target){
//     console.log("You guess it right!")
//   }
//   else if(guess > target){
//     console.log("You guess it high")
//   }
//   else{
//     console.log("You guess it low")
//   }
//   target = Math.floor(Math.random()*10) 
// }

// guess = 1
// target = Math.floor(Math.random()*10) 

// while(guess !== target){
//   if(guess === target){
//     console.log("You guess it right!")
//   }
//   else if(guess > target){
//     console.log("You guess it low")
//   }
//   else{
//     console.log("You guess it high")
//   }
//   target = Math.floor(Math.random()*10)
// }


//      USING For LOOP IN ARRAY

// value = ['rock', "paper", "scissor"]
// for(i = 0; i < value.length; i++){
//   console.log(value[i])
// }

//    Using While loop in array

// value = ['rock', "paper", "scissor"]
// i = 0
// while(i < value.length){
//   console.log(value[i])
//   i++
// }

//    TASk ARRAY

library = [{title : "JungleBook", author : "Ahmed", yearPublished : 2015 },
  {title : "Mathematics", author : "Abdul", yearPublished : 2018},
  {title : "English", author : "John", yearPublished : 2022}]

library.push({title : "Computer", author : "Rafay", yearPublished : 2024}) // push new book

for(i = 0; i < library.length; i++){
if(library[i].title == "Computer"){  // finding specific book
// console.log(library[i])
}
}
library.splice(1,1)         //removing 1 book
// console.log(library) 

library[1].yearPublished = 2014 //Updating year 
// console.log(library)

    //  Escape CHARACTERS-------------------------------------------------------------------------------------------

    let string = "firstline\nSecond line\tTabbed!"
    // console.log(string)
    a = "C:\\Users\\Name\\Documents"
    // console.log(a)
    b = "He said\"HelloWorld\""
    // console.log(b)

    // String Methods-----------------------------------------------------------------------------------------

    a = "Simple text"
    // console.log(a.toUpperCase())

    b = "SIMPLE text"
    // console.log(b.toLowerCase())

    word = " Hello world "
    // console.log(word.trim())

    a = "Hello world"
    // console.log(a.indexOf("o"))

    split = "Hello World"
    // console.log(split.split(""))

    a = "Hello world"
    // b = a.slice(4, 9)
    // console.log(b)

    // Task-------

    // sentence = "We are learning javascript"
    // ReversedSentence = ""
    
    // for(i = sentence.length-1 ; i >=0; i-- ){
    //   ReversedSentence += sentence[i]
    // }
    // console.log(ReversedSentence)

    
    // 2D array

// grid = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
//   console.log(grid[1][2])

// for of loop---------------------------------------------------------------

array = [1, 2, 3, 4]

for(value of array){
  // console.log(value)
}
//Previous method we used:

arr = [1,2,3,4]
for(i = 0; i<arr.length;i++){
  // console.log(arr[i])
}

//for in loop------------------------------------------------

// person = {
//   firstname : "Abdul",
//   lastname : "Rafay",
//   age : 18
// }
// for(key in person){
  // console.log(person[key])
// }


//----------------Introduction to Function------------------------------

//   function sum(firstNumber, secondNumber, thirdNumber){
//     console.log(firstNumber + secondNumber + thirdNumber)
//   }

// //   sum(2,5)

// //   function greet(name){
// //     console.log("hellow"+name)                          // THis cause the problem
// //   }
// //   greet()

//   //so,

//   function greet(name="user"){
//     console.log("hello"+name)
//   }
// //   greet("rafay")

// // Task

// //Addition
// function add(firstNumber=5, secondNumber=5){
//     console.log(firstNumber+secondNumber)
// }
// // add(1)

// //Multiplication
// function multiply(number1, number2){
//     console.log(number1*number2)
// }
// // multiply(2,3)

// //Division
// function division(number1, number2){
//     console.log(number1/number2)
// }
// division(2,3)

// How to use return---------------------------------------------------------------------

// function add(a,b){
//     plus = a+b
//     return plus
// }
// abc = add(2,5)
// console.log(abc)


// Task-------MaskedEmail---------------------------------------------------------------------

// email = "abdulrafay.8207@gmail.com"
// MaskedEmail = ""

// firstpart = email.split("@")[0]
// secondpart = email.split("@")[1]

// MaskedEmail += firstpart.slice(0,2)

// for(i=2;i<firstpart.length-2;i++){
//   MaskedEmail+="*"
// }

// MaskedEmail += firstpart.slice(-2)

// MaskedEmail += "@"+secondpart
// console.log(MaskedEmail)
// console.log(MaskedEmail.length)



// Task Function Exercise--------------------------------------------------------

// function truncateString(string,maxlength){
//   if(string.length > maxlength){
//     return string.slice(0,maxlength)+"..."
//   }else{
//     return string;
//   }
// }

// console.log(truncateString("Helloworld",5))


//Task Discount--------------------------------------------------------

// function calculateDiscount(price,discountpercentage){
//   discounted = price*discount/100
//      discountedprice = price - discounted
//      return discountedprice
// }

// result = calculateDiscount(100,10)
// console.log(result)

//  Task Countvowels--------------------------------------------------------

// function countVowels(string){
//   count = 0
//   string = string.toLowerCase()
//   for(i=0;i<string.length;i++){
//     if("aeious".includes(string[i])){
//       count++
//     }
//   }
//   return count
// }
// result = countVowels("aqwiqweqwoqwu")
// console.log(result)

// Task Reverse Integer--------------------------------------------------------

//     function reversedInteger(number){
//     reversedstring = ""
//     numberWithoutSign = Math.abs(number).toString()
//     for(i=numberWithoutSign.length-1;i>=0;i--){
//         reversedstring += numberWithoutSign[i]
//     }
//     reversedstring = parseInt(reversedstring,10)
//     if(number < 0){
//         reversedstring = -reversedstring
//     }
//     return reversedstring
// }
// result = reversedInteger(-456)
// console.log(result)

// Task encodeCipher----------------------------------------------------------------------------------------------------

// function encodeCipher(string){
//   obj = {"G":"A","A":"G","D":"E","E":"D","R":"Y","Y":"R","P":"O","O":"P"}
//   newstring = string.toUpperCase()
//   encodestring = ""
//   for(i=0;i<newstring.length;i++){
//     if(obj[newstring[i]]){
//       encodestring += obj[newstring[i]]
//     }else{
//       encodestring += newstring[i]
//     }
//   }
//   return encodestring
// }
// result = encodeCipher("oqwipei")
// console.log(result)

// Task getrandomInteger---------------------------------------------------------

// function getRandomInteger(min,max){
//   return Math.floor(Math.random()*(max - min + 1)) +min
// }
// resuslt = getRandomInteger(1,10)
// console.log(resuslt)

// Practice of frequency counter ***********************************************

// products = ["mouse", "keyboard" , "speaker" , "mouse" , "laptop" , "speaker"]

// counter = {}

// for(let prodcut of products){
//   if(!counter[prodcut]){
//     counter[prodcut] = 1
//   }else{
//     counter[prodcut]++
//   }
// }
// console.log(counter)

// Task ValidAnagram---------------------------------------------------------------------

// function validAnagram(str1,str2){
//   if(str1.length !== str2.length){
//     return false;
//   }
//   frequencyCounter1 = {}
//   for(let value of str1){
//     frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
//   }
//   frequencyCounter2 = {}
//   for(let value of str2){
//     frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
//   }
//   for(let key in frequencyCounter1){
//     if(frequencyCounter1[key] !== frequencyCounter2[key]){
//       return false;
//     }
//   }
//   return true;
// }

// reuslt = validAnagram("hello","ollehw")
// console.log(reuslt)

// Task 2D array ---------------------------------------------------------------------

// function chunkyMonkey(array,size){
//   result = []
//   for(i=0;i<array.length;i+=size){
//     result.push(array.slice(i,i+size))
//   }
//   return result;
// }
// testing = chunkyMonkey([1,2,3,4,5,6],2)
// console.log(testing)

// ForEach loop ---------------------------------------------------

// array = [1,2,3,4,5]
// array.forEach(function(arr,index,idk){
//   console.log(arr,index,idk)
// })
