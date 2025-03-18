async function getWeather(){
    city = document.getElementById("cityName").value
    apikey = "870502b743a444ed94513551251803"
    if(!city){
         alert ("Please enter a city or a country name")
        return;  
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`

    try{
    response = await fetch(url)
    if(!response.ok){
        document.getElementById("result").innerHTML = `<p style="color:red;">City not found. Please try again</p>`
    }

    data = await response.json()
    document.getElementById("result").innerHTML =
    `<h2>${data.location.name}, ${data.location.country} </h2>
    <p>Temperature: ${data.current.temp_c}°C </p>
    <p>Condition: ${data.current.condition.text} </p>
    <p>humidity: ${data.current.humidity} </p>
    <img src="${data.current.condition.icon}" alt="WeatherIcon"> `
    }
    catch(error){
        document.getElementById("result").innerHTML = `<p style="color:red;">Something went wrong. Please try again</p>`
    }
}