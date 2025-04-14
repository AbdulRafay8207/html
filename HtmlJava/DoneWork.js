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

// async function testing(){
//   try{
//     success = await myPromise
//     console.log(success)
//   } catch(error){
//     console.log(error)
//   }
// }

// let myPromise = new Promise((resolve, reject) => {
//   success = true

//   if(success){
//     resolve("the operation was successful1")
//   } else {
//     reject("Something went absolutely wrong!")
//   }
// }
// )
// testing()
// myPromise
// .then(result => {
//   console.log(result)
// })
// .catch(result => {
//   console.log(result)
// })
//**************************************************************************************************** */

// Promise Chain-------------------------------------------------------

// myPromise = new Promise((resolve, reject) => {
//   let success = true
//   if(success){
//     resolve("Setp 1 is done!")
//   } else{
//     reject("Something went wrong!")
//   }
// })
// myPromise.then(result => {
//   setTimeout(() => {console.log(result)},2000)
//   return "Step 2 is done"
// }).then(result => {
//   setTimeout(() => {console.log(result)},3000)
//   return "Step 3 is done"
// }).then(result => {
//   setTimeout(() => {console.log(result)},4000)
// }).catch(result => {
//   console.log(result)
// })
// console.log("Please wait...")

// promise all-------------------------------------------------------------

// let promise1 = new Promise((resolve, reject) => {
//    step1 = true
//   setTimeout(() => {if(step1){
//     resolve("First step done")}else{
//       reject("First step fail")
//     }} ,1000)
// })
// step2 = true
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {if(step2){
//     resolve("Second step done")}else{
//       reject("Second step fail")
//     }},2000)
// })
// step3 = true
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {if(step3){
//     resolve("Third step done")}else{
//       reject("Third step fail")
//     }},3000)
// })

// Promise.all([promise1, promise2, promise3])
// .then(result => {
//   console.log(result)
// }).catch(error => {
//   console.log(error)
// })

// Async Promise-----------------------------------------------------------------

// async function fetchData(){
//   result = await myPromise
  
// }

// myPromise = new Promise((resolve, reject) => {
//   success = false
//   setTimeout(() => {                            // This method work but not a right way
//     if(success){
//       resolve("Data fetched successfully")
//     }else{
//       reject("Error")
//     }
//   }, 2000);
// })

// fetchData().then(result => console.log(result))
// .catch(error => console.log(error))

// Right way***************************************************
// function addition(a,b){
//   sum = a+b
//   console.log(sum)
// }

// async function fetchData(callback){
//   try{
//     result = await myPromise
//     callback(9,1)
//   console.log(result)
// } catch (error) {
//   console.log(error)
// }
// } 


// myPromise = new Promise((resolve, reject) => {
//   success = false
//   setTimeout(() => {                            
//     if(success){
//       resolve("Data fetched successfully")
//     }else{
//       reject("Error")
//     }
//   }, 2000);
// })
// fetchData(addition)

// Promise Exercise-------------------------------------

// function orderPizza() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("Step 1. Order");
//         }, 4000);
//     });
// }
 
 
// function preparePizza() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("Step 2. Preparing");
//         }, 3000);
//     })
// }
 
 
// function servePizza() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("Step 3. Serving");
//         }, 1000);
//     });
// }

// orderPromise = orderPizza()
// orderPizza().then((result) => {
//   console.log(result)
  
//   preparePromise = preparePizza()
//   preparePromise.then((result) => {
//     console.log(result)

//     servePromise = servePizza()
//     servePromise.then((result) => {
//       console.log(result)
//     })
//   })
// })

//-----------------------------OR-----------------------------------------

// Chain Method

// orderPizza().then((result) => {
//   console.log(result)
//   return preparePizza ()
// })
// .then((result) => {
//   console.log(result)       
//   return servePizza()
// })
// .then((result) => {
//   console.log(result)
// })

//------------------------------OR---------------------------------------

// Async/awaits Method

// async function Pizza(){
//   try{
//     order = await orderPizza()
//     console.log(order)

//     prepare = await preparePizza()
//     console.log(prepare)
                                                    
//     serve = await servePizza()                // Better Approach
//     console.log(serve)
//   } catch(e){
//     console.log(e)
//   } finally{
//     console.log("Ordered Done!")
//   }
// }
// Pizza()
// console.log("Please wait your order is getting ready...")

// Json-----------------------------------------------------------------------------

// JSON To JavaScript Object

// let jsonString = '{"name": "Alice", "age": 30}';
// let obj = JSON.parse(jsonString); // Convert JSON to JS object
// console.log(obj); 

// //JavaScript to Json

// person = {name:"alice", age: 25}
// jsondata = JSON.stringify(person)
// console.log(jsondata)

// FETCH------------------------------------------------------------------------------------------------------

// async function fetchData(){
//   const url = "https://jsonplaceholder.typicode.com/posts"
//   // fetch(url)
//   // .then((res) => res.json())
//   // .then((data) => console.log(data))
//   // .catch((e) => console.error(e))

//   try{
//     const response = await fetch(url)
//       const data = await response.json()
//       console.log(data)
//   } catch(error){
//     console.log(error)
//   }
// }

//**************************************************************** */

// async function(){
//   response = fetch("http://localhost:3000/users")
//   data = await response.json()
// }

// function parseJsonToHtml(data){
//   return data.map((user) => {
//     return `<tr>
//     <td>${user.id}</td>
//     <td></td>
//     <td></td>`
//   })
// }

//Regular Expression---------------------------------------------------------------------------------------------

// const str = "I am learning JavaScript, We can build web app using JavaScript"
// const pattern = /Javascript/gi
// // const result = pattern.test(str)
// // console.log(result)

// // console.log(str.replace("JavaScript", "python")) // first method 


// const result2 = str.replace(pattern, "phython")
// console.log(result2)

// Exercise : 1-**************************************************************************************************************************************

// function spinalCase(abc){
//     abc.toLowerCase()
//     pattern = /\s|_/gi
//     result = abc.replace(pattern, "-")
//     console.log(result);
// }
// spinalCase("AVAS ASNDF ASNF")

// Recursion ---------------------------------------------------------------------------------------------------------------------------------------------
// function printNum(number){
//     if(number == 0)return;
//     console.log(number)
//     printNum(number-1)
// }
// console.log(printNum(10))

//*********************************************************************************************************** */

// function printNum(number){
//     if(number == 0)return;
//     printNum(number-1)
//     console.log(number)
// }
// console.log(printNum(10))

// function factorial(number){
//     if(number == 0) return "1";
//     console.log(number)
//     return number * factorial(number-1)     
// }
// console.log(factorial(5));

//Closure-------------------------------------------------------------------------------------------------
// function createGreeting(greeting){
//     return function (name) {
//         return `${greeting} ${name}`
//     }
// }
// const sayHi = createGreeting("hi")
// const sayHello = createGreeting("hello")

// const result1 = sayHi("Abdul")
// const result2 = sayHello("Rehman")

// console.log(result1)
// console.log(result2)

//Exercise -------------------------------------------------------------------

  // function multiply(a){
  //     return function (b){
  //         return a*b
  //     }
  // }
  // result = multiply(2)    
  // result2 = result(2)
  // console.log(result2)