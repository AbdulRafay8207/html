// Dom Exercise: 1
// mytext = document.getElementById("text")
// mytext.style.backgroundColor = "lightgray"
// mytext.style.color = "green"
// mytext.style.fontsize = "18px"

// Dom Exercise: 2 ---------------------------------------------------------------------------

// mytext = document.querySelector("paragraph")
// testing = mytext.textContent = "New paragraph text"

// myheading = document.querySelector("heading")
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

// PROBLEM----------------------------------------------------------------------------------------------------------------

// Deleting element from DOM--------------------------------------------------------------------------------

// THis is used to remove child from an element
// section = document.getElementById("sec")
// p = document.getElementById("para")
// section.removeChild(p)
// //This is used to remove element
// heading = document.getElementById("head")
// heading.remove()

// Event Listener--------------------------------------------------------------------------------

// section = document.getElementById("sec")
// p = document.getElementById("para")
// function action(e){
//   p.remove()
//   console.log("Child is removed",e)
// }
// p.addEventListener("click",action)

// function inputAction(e){
//   console.log(e)
//   console.log(input.value)
//   h1.textContent = input.value
//   h1.textContent = e.target.value
//   h1.textContent = this.value
// }

// Assignment Counter

// function Counter(initialValue){
//   this.value = initialValue
//   this.reset = function(){
//     this.value = initialValue
//   }
//   this.increment = function(){}
// }
// counter = new Counter(0)

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

//MAP Exercise : 1

// students = [
//   {firstName:"Abdul", lastName:"Rafay"},
//   {firstName:"Muhammad", lastName:"Ahmed"},
//   {firstName:"Abdul", lastName:"Rafay"}
// ]

// action = (students) => students.firstName + " " + students.lastName
// result = students.map(action)
// console.log(result)