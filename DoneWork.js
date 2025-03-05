// Dom Exercise: 1
// mytext = document.getElementById("text")
// mytext.style.backgroundColor = "lightgray"
// mytext.style.color = "green"
// mytext.style.fontsize = "18px"

// Dom Exercise: 2 ---------------------------------------------------------------------------

// mytext = document.querySelector("#paragraph")
// mytext.textContent = "New paragraph text"

// myheading = document.querySelector("#heading")
// myheading.innerText = "New heading text"

// Adding Elements to the DOM-----------------------------------------------------------------
// subtitle = document.createElement("h2")
// newtext = document.createTextNode("Baitussalam tech Park")
// subtitle.appendChild(newtext)
// document.body.appendChild(subtitle)

// Dom Exercise:4------------------------------------------------------------------------------------

// p = document.createElement("p")
// textofp = document.createTextNode("Hello Students")
// p.appendChild(textofp)
// p.style.color = "green"
// p.style.fontSize = "200px"
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
