const currentTemp = document.querySelector(".temp");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const windSpeed = document.querySelector(".speed");
const windChill = document.querySelector(".chill");
const type = document.querySelector("#weathertype")

const img = document.querySelector("#weatherIco");

let url = 
"https://api.openweathermap.org/data/2.5/weather?q=Sanford&units=imperial&appid=33e88bc8cf82782fee3981add354dd2f";

async function getWeather() {
    let response = await fetch(url);
    
    if (response.ok) {
        let data = await response.json();
        displayWeather(data);
    }
}

function displayWeather(data) {
    currentTemp.textContent = Math.round(data.main.temp);
    high.textContent = Math.round(data.main.temp_max);
    low.textContent = Math.round(data.main.temp_min);
    windSpeed.textContent = data.wind.speed;
    img.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    img.setAttribute("alt", data.weather[0].description);
    type.textContent = data.weather[0].description;

    let displayTemp = parseFloat(data.main.temp);
    let speed = parseFloat(data.wind.speed);
    let exponenet = Math.pow(speed, 0.16); 

    if (displayTemp <= 50 && speed > 3) {
        let chill = 35.74 + (0.6215 * displayTemp) - (35.75 * exponenet) + (0.4275 * displayTemp * exponenet);
        windChill.textContent = chill; }

    else {
        windChill.textContent = "N/A"; }
}

getWeather();