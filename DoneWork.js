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