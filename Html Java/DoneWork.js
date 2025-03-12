// Dom Exercise: 1
// mytext = document.getElementById("text")
// mytext.style.backgroundColor = "lightgray"
// mytext.style.color = "green"
// mytext.style.fontsize = "18px"

// Dom Exercise: 2 ---------------------------------------------------------------------------

// mytext = document.querySelector("#paragraph")
// testing = mytext.textContent = "New paragraph text"

// myheading = document.querySelector("#heading")
// myheading.innerText = "New heading text"

// Adding Elements to the DOM-----------------------------------------------------------------
// subtitle = document.createElement("h2")
// newtext = document.createTextNode("Baitussalam tech Park")
// subtitle.appendChild(newtext)
// document.body.appendChild(subtitle)

// Dom Exercise:4------------------------------------------------------------------------------------

// p = document.createElement("p")
// tetxNode = document.createTextNode("hellostudents")
// p.appendChild(textNode)
// p.style.color = "green"
// p.style.fontSize = "20px"
// document.getElementById("content-section").appendChild(p)

// Date and Time in JavaScript------------------------------------------------------------------------------------

// currentDate = new Date(2007,1,8,5,15,30)
// console.log(currentDate)

// This-------------------------------------------------------------------------------------------------

// const car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     getDetails: function() {
//       return `This car is a ${make} ${model}.`;    //this.make = car.make and this.model = car.model 
//     }
//   };
  
//   console.log(car.getDetails());  // Outputs: This car is a Toyota Corolla.
  
  // obj = {
  //   Name:"Rafay",
  //   age:18,
  //   detail: function(){ return `This is my name ${this.Name} and this is my age ${this.age}`}
  // }
  // console.log(obj.detail())

  // setInterval and setTimeout Method------------------------------------------------------------

  // interval = setInterval(function(){console.log("Testing 123")}, 3000)
  // timeout = setTimeout(function(){clearInterval(interval) 
  //   console.log("code ended")
  // }, 1000*10)
  
  // Exercise---------------------------------------------------------------------

  // tetxNode = document.createTextNode("hellostudents")
  // p.appendChild(textNode)
  // p.style.color = "green"
  // p.style.fontSize = "20px"
  // document.getElementById("content-section").appendChild(p)

// Deleting element from DOM--------------------------------------------------------------------------------

// THis is used to remove child from an element
// section = document.getElementById("sec")
// p = document.getElementById("para")
// section.removeChild(p)
// //This is used to remove element
// heading = document.getElementById("head")
// heading.remove()

// Event Listener--------------------------------------------------------------------------------
// Event type "Click"

// section = document.getElementById("sec")
// p = document.getElementById("para")
// function action(a){
//   p.remove()
//   console.log("Child is removed",a)
// }
// p.addEventListener("click" ,action)
// *************************************************************************************************
// button = document.getElementById("mybutton")
// function action(){
//     console.log("button was clicked!")
//     console.log("mouse x:", event.clientX)
//     console.log("mouse y:", event.clientY)
// }
// button.addEventListener("click",action)
// *************************************************************************************************
// Event type "Mouseover and mouseout"

// hoverDiv = document.getElementById("hoverdiv")
// hoverDiv.addEventListener("mouseover", function(){
//     hoverDiv.style.backgroundColor = "red"
//     console.log(event.target)
//     console.log(event.type)
//     console.log(event.key)
// },{once : true})

// hoverDiv.addEventListener("mouseout", function(){
//     hoverDiv.style.backgroundColor = ""
// })
// *************************************************************************************************
// Event type "Keydown and Keyup"

// input = document.getElementById("input")
// h1 = document.getElementById("h1input")
// input.addEventListener("keydown",function(){
//     // console.log("Keydown event triggered!")
//     // console.log("Event type:",event.type)
//     // console.log("Event key:", event.key)
//     h1.textContent = input.value
// })

// input.addEventListener("keyup",function(){
//     h1.textContent = input.value
//     console.log(this.value)
// })
// *************************************************************************************************
//Event type "Input"

// textinput = document.getElementById("textinput")
// textinput.addEventListener("input", function(){
//     console.log("input event triggered")
//     console.log(event.target.value)
//     console.log(event.type)
// })


// Event Listener Exercise Counter----------------------------------------------------------------------

// buttonD = document.getElementById("buttonD")
// buttonR = document.getElementById("buttonR")
// buttonI = document.getElementById("buttonI")
// h1 = document.getElementById("h1")

// let count = 0

// buttonD.addEventListener("click", function(){
//   count--
//   h1.textContent = count
// })

// buttonR.addEventListener("click", function(){
//   count = 0
//   h1.textContent = count
// })


// buttonI.addEventListener("click", function(){
//   count++
//   h1.textContent = count  
// })

// TODO APP PROJECT----------------------------------------------------------------------------------------

// input = document.getElementById("input");
// button = document.getElementById("button");  // Correct method
// ul = document.getElementById("list");


// function addtext(text){
//   let list = document.createElement("li");  // Ensure let is used for scope
//   list.textContent = text;

//   let removebutton = document.createElement("span");
//   removebutton.textContent = "X";
//   removebutton.classList.add("remove");  // Correct classList

//   removebutton.addEventListener("click",function(){
//     list.remove()
//   })

//   list.appendChild(removebutton);
//   ul.appendChild(list);
// }

// button.addEventListener("click", function(){
//   let text = input.value.trim();  // Get the text from input
//   if(text){
//     addtext(text);  // Add the text to the list
//     input.value = "";  // Clear the input field
//   }
// })

// input.addEventListener("keypress", function(){
//   if(event.key === "3"){  // If Enter is pressed
//     let text = input.value.trim();  // Get the text from input
//     if(text){
//       addtext(text);  // Add the text to the list
//       input.value = "";  // Clear the input field
//     }
//   }
// });



// Assignment Counter--------------------------------------------------------------------------------------

// function Counter(initialValue){
//   this.value = initialValue
//   this.reset = function(){
//     this.value = initialValue
//   }
//   this.increment = function(){}
// }
// counter = new Counter()

// Call back Function---------------------------------------------------------------------------------

// function greet(name, callback){
//   console.log("Hello, "+name)
//   callback()
// }

// function sayGoodBye(){
//   console.log("GoodBye")
// }

// greet("rafay", sayGoodBye)
// **********************************************************

// sayHello = name => {
//   return `hello, ${name}!`
// }
// console.log(sayHello("Alice"))
// **********************************************************
// const sayHello = () => {
//  console.log("Hello, World!");
// };
// sayHello()  
// **********************************************************
// addition = (a,b) => console.log(a+b)
// addition(1,2)
//**************************************************************
// function NormalFunction() {
//   this.name = 'Normal Function';
//   setTimeout(function() {
//     console.log(this.name);  // 'this' refers to the global object or undefined in strict mode
//   }, 1000);
// }

// const arrowFunction = () => {
//   this.name = 'Arrow Function';
//   setTimeout(() => {
//     console.log(this.name);  // 'this' refers to the surrounding context, which is the object that contains arrowFunction
//   }, 1000);
// };

//  NormalFunction();  // Output: undefined (or error in strict mode)
//  arrowFunction();   // Output: Arrow Function
//************************************************************** 
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person('Alice', 30);  // Works fine
// console.log(person1.age);  // Output: 



// Call back function Exerise : 1---------------------------------------------------------------------

 
// function calculate(a, b, callback){
//   callback(a,b)
// }
// function addition(a,b){
//   console.log(a+b)
// }
// function subtraction(a,b){
//   console.log(a-b)
// }
// function multiplication(a,b){
//   console.log(a*b)
// }
// function division(a,b){
//   console.log(a/b)
// }
// calculate(1, 2, addition)

// some trojar function

// hof = () => {
//   init = 0
//   return ()=>{
//     console.log(++init)
//   }
// }

// hsdlfhn = hof()
// hsdlfhn();
// hsdlfhn();

// Practice of callback function-----------------------------------------------------------+

// function add(a,b,callback){
//   sum = a + b;
//   callback(sum)
// }
// function printResult(result){
//   console.log("This sum is "+ result)
// }

// add(2,4,printResult)
//********************************************************************************* */
// function userdata(callback){
//   setTimeout(() => {
//     let data = {user:"John", age:30}
//     callback(data)
//   }, 2000);
// }
// function displayData(abc){
//   console.log("User info:",abc)
// }
// userdata(displayData)
// console.log("Data is being fetched...")
//-************************************************************************************

// function greetUser(name, callback){
//   setTimeout(() => {
//     console.log("Hello,"+name)
//     callback()
//   }, 2000); 
  
// }
// function showTime(){
//   time = new Date()
//   console.log(time)
// }
// greetUser("Rafay", showTime)

//  MAP ------------------------------------------------------------------------------------------

// arr = [1,2,3,4,5,6,7,8,9,10]
// action = (number) => number*2
// result = arr.map(action)
// console.log(result)
//------OR-----------
// arr = [1,2,3,4,5,6,7,8,9,10]
// result = arr.map(number => number*2)
// console.log(result)

//MAP Exercise : 1

// students = [
//   {firstName:"Abdul", lastName:"Rafay"},
//   {firstName:"Muhammad", lastName:"Ahmed"},
//   {firstName:"Abdul", lastName:"Rafay"}
// ]

// action = (student) => student.firstName + " " + student.lastName
// result = students.map(action)
// console.log(result)

// Filter---------------------------------------------------------------------------------------------------

// filter exercise 1 ----------------------------------------------------------------

// numbers = [5,12,13,3,7]
// action = (number) => number > 10 
// result = numbers.filter(action)
// console.log(result)

// Map & Filter Combine ---------------------------------------------------------------------------

  // students = [
  //   {name:"Alice", score:52},
  //   {name:"Bob", score:67},
  //   {name:"Charlie", score:80},
  //   {name:"David", score:45}
  // ]

  // action = (student) => student.score >= 60
  // result1 = students.filter(action)
  // console.log(result1)

  // result2 = result1.map(student => student.name.toUpperCase())
  // console.log(result2)

  // Destruction of Arrayyy----------------------------------------------------------------------------------------

  // car = {make: "Toyota", model: "Camry"}
  // const {make, model} = car
  // console.log(make, model)

  // data = ["Alice", 30, "New York"]
  // const [Name,age,city] = data
  // console.log(Name,age,city)

  // Practice of Destructuring----------------------------------------------------

//    let product = {
//     name: "Laptop",
//     price: 1000,
//     specs: {
//       ram: "16GB",
//       storage: "512GB SSD"
//     }
//   };

// let {name, price, specs} = product
// let {ram,storage} = product.specs
// console.log(name, price,ram,storage)


  // Asynchronous Code Exercise 1-------------------------------------------------------------------------------

  // let data

//   function fetchData(callback){
//     setTimeout(()=>{
//       data = {name:"John", age: 30}
//       callback(data)
//     },2000)
//   }
//   function a(data){
//     console.log(data)
//   }

// // console.log(data)

// fetchData(a)

// console.log("Data is being fetched...")

// Asynchronous Practice with callback function--------------------------------------------------------------

// function greet(name,callback){
//   console.log("starting to greet")
//   setTimeout(() => {
//     console.log("Hello"+ name)
//     callback()
//   },2000)
// }
// function greetEnd(){
//   console.log("Greeting is end")
// }
// greet("Rafay",greetEnd)
// ******************************************************************************************************
// function fetchuserdata(callback){
//   console.log("Fetching user data...")
//   setTimeout(() => {
//     UserData = {name:"rafay", age:18}
//     callback(UserData)
//   },3000)
// }

// function showdata(data){
//   console.log("User Info:",data)
// }
// fetchuserdata(showdata)
//--***************************************************************************************

  // function downloadFile(callback) {
  //   console.log("downloading files...")
  //   setTimeout(() => callback(),3000)
  // }

  // function processFile() {
  //   console.log("File downloaded and processed.");
  // }
  // downloadFile(processFile)

// Asynchronous Exercise 2 ---------------------------------------------------------------------------------------


// function orderPizza(cb){
//   setTimeout(() => {
//     console.log("Step1, ordered")
//     cb()
//   }, 4000);
// }

// function preparingPizza(cb){
//   setTimeout(() => {
//     console.log("Step2, prepared")
//     cb()
//   }, 3000);
// }

// function served(){
//   setTimeout(() => {
//     console.log("Step3, served")
//   }, 1000);
// }

// function stepbystep(){
//   orderPizza(() => {
//     preparingPizza(() => (
//       served()
//     ))
//   })
// }
// stepbystep()
// Promise----------------------------------------------------------------------------------

// callback = (resolve, reject) => {
// setTimeout(() => {
//   success = false
//   if(success){
//     resolve("Fullfilled")
//   } else{
//     reject("Rejected")
//   }},2000)
// }  

// promise = new Promise(callback)
// console.log(promise)

// promise.then((t) => console.log(t)).catch((f) => console.error(f))

// My learning way of Promises*-------------------------------------------------------------------------------------

let myPromise = new Promise((resolve, reject) => {
  success = false

  if(success){
    resolve("the operation was successful1")
  } else {
    reject("Something went absolutely wrong!")
  }
}
)
// console.log(myPromise)

myPromise
.then(result => { 
  console.log(result)
})
.catch(result => {
  console.log(result)
})

//Absolutely! Let's dive into Promises in JavaScript in the simplest and most beginner-friendly way possible. I'll break it down step by step.

// What is a Promise?
// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows us to handle asynchronous code in a much cleaner and more readable way than using callbacks.

// In other words, a Promise is like a promise made by someone to do something later. You are waiting for the promise to be fulfilled or rejected.

// The States of a Promise
// A Promise can be in one of three states:

// Pending: The promise is still being processed, it hasn’t been fulfilled or rejected yet.
// Fulfilled: The asynchronous operation was successful, and the promise is "resolved."
// Rejected: The asynchronous operation failed, and the promise is "rejected."
// Think of it like this:

// A pending promise is like you ordering a pizza but waiting for it to be delivered.
// A fulfilled promise is like the pizza being delivered and you eating it.
// A rejected promise is like the pizza being canceled or failed (maybe the restaurant ran out of stock).
// Creating a Promise
// You can create a Promise using the new Promise() constructor. Here's a very basic example:

// javascript
// Copy
// let myPromise = new Promise((resolve, reject) => {
//   let success = true; // Try changing this to false to see rejection

//   if(success) {
//     resolve("The operation was successful!");  // This means the promise is fulfilled
//   } else {
//     reject("Something went wrong!");  // This means the promise was rejected
//   }
// });
// What’s happening here?
// resolve is called when the operation succeeds. It indicates that the promise is fulfilled.
// reject is called when the operation fails. It indicates that the promise is rejected.
// Using Promises
// Once a promise is created, you can handle the result using .then() for success and .catch() for errors.

// Example: Handling Fulfilled and Rejected Promises
// javascript
// Copy
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if(success) {
//     resolve("The operation was successful!");
//   } else {
//     reject("Something went wrong!");
//   }
// });

// // Handle the result using .then() and .catch()
// myPromise
//   .then(result => {
//     console.log(result);  // This runs if the promise is fulfilled
//   })
//   .catch(error => {
//     console.log(error);  // This runs if the promise is rejected
//   });
// Explanation:
// If success is true, the promise is fulfilled, and .then() is called with the success message.
// If success is false, the promise is rejected, and .catch() is called with the error message.
// Output (if success is true):
// nginx
// Copy
// The operation was successful!
// Output (if success is false):
// nginx
// Copy
// Something went wrong!
// Promise Chaining
// You can chain multiple .then() calls to handle multiple steps of an asynchronous operation.

// Example:
// javascript
// Copy
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if(success) {
//     resolve("Step 1: Task completed.");
//   } else {
//     reject("Something went wrong in Step 1.");
//   }
// });

// myPromise
//   .then(result => {
//     console.log(result);  // Step 1: Task completed
//     return "Step 2: Proceeding to next task";  // Return another value to pass to the next .then()
//   })
//   .then(result => {
//     console.log(result);  // Step 2: Proceeding to next task
//     return "Step 3: Task done!";
//   })
//   .then(result => {
//     console.log(result);  // Step 3: Task done!
//   })
//   .catch(error => {
//     console.log(error);  // If any error occurs, it will be caught here
//   });
// Explanation:
// The first .then() handles the result from the promise.
// The second .then() takes the returned value from the previous .then() and proceeds further.
// Each .then() returns a new value or another promise, allowing you to chain them.
// .catch() is used at the end to handle any errors that might occur in the chain.
// Using Promise.all()
// Sometimes you might need to wait for multiple promises to complete before doing something. You can use Promise.all() to wait for several promises to resolve at the same time.

// Example:
// javascript
// Copy
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("First task completed"), 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Second task completed"), 2000);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Third task completed"), 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then(results => {
//     console.log(results);  // Prints an array with all results once all promises are resolved
//   })
//   .catch(error => {
//     console.log(error);  // If any of the promises fails, this will run
//   });
// Explanation:
// Promise.all() takes an array of promises and returns a new promise that resolves once all promises are resolved.
// It returns an array of results once all promises are fulfilled.
// If any promise fails, the entire Promise.all() will reject and go to .catch().
// Output:
// After 3 seconds:

// css
// Copy
// ["First task completed", "Second task completed", "Third task completed"]
// Using async/await with Promises
// The async/await syntax is a more modern and cleaner way of working with promises. It looks much more like regular synchronous code.

// async makes a function return a promise.
// await waits for the promise to resolve and gives you the result.
// Example:
// javascript
// Copy
// async function fetchData() {
//   let result = await myPromise;  // Waits for the promise to resolve
//   console.log(result);  // Logs the result when the promise is fulfilled
// }

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Data fetched successfully!"), 2000);
// });

// fetchData();  // This calls the async function
// Explanation:
// The await keyword pauses the execution of the async function until the promise is resolved.
// It’s like writing synchronous code, but you’re still handling asynchronous operations.
// Summary:
// A Promise is an object that represents the result of an asynchronous operation.
// A promise can be fulfilled (successful), rejected (failed), or still pending.
// You can handle the result of promises using .then(), .catch(), and .finally().
// You can chain multiple .then() calls to perform several asynchronous tasks one after another.
// async/await provides a cleaner way to handle promises, making asynchronous code look synchronous.
// Exercise:
// Try the following:

// Create a promise that resolves after 3 seconds with the message "Task completed!".
// Chain a .then() to log that message.
// Add a .catch() to handle any potential errors.
// Let me know if you'd like more clarification or examples!