document.addEventListener("DOMContentLoaded", function(){
    if(document.getElementById("userInfo")){
        document.getElementById("userInfo").addEventListener("submit", async function(event){
            event.preventDefault()
             user = {name: document.getElementById("name").value,
                    email: document.getElementById("email").value 
            }
             response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(user)
            })
             data = await response.json()
            sessionStorage.setItem("userId", data.id)
            window.location.href = "secondPage.html"
        })
    }

    if(document.getElementById("quiz")){
        document.getElementById("quiz").addEventListener("submit",  async function (event){
            event.preventDefault()
            let score = 0
            const answer = {q1: "4", q2: "Islamabad", q3: "Hockey", q4: "20"};
            if(document.querySelector("input[name='q1']:checked")?.value === answer.q1) score++;
            if(document.querySelector("input[name='q2']:checked")?.value === answer.q2) score++;
            if(document.querySelector("input[name='q3']:checked")?.value === answer.q3) score++;
            if(document.querySelector("input[name='q4']:checked")?.value === answer.q4) score++;

            user = sessionStorage.getItem("userId")

            await fetch(`http://localhost:3000/users/${user}`,{
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({score})
            })
            window.location.href = "thirdPage.html"
        })
    }

    if(document.getElementById("result")){
      async  function fetchResult () {
        user = sessionStorage.getItem("userId")
        response = await fetch(`http://localhost:3000/users/${user}`)
        data = await response.json()
        document.getElementById("result").innerHTML = `<p>Name: ${data.name} </p> <p>Score: ${data.score} </p>`
        }
        fetchResult()
    }
    if(document.getElementById("restart")){
        document.getElementById("restart").addEventListener("click", function (){
            sessionStorage.clear()
            window.location.href = "firstPage.html"
        })
    }



})