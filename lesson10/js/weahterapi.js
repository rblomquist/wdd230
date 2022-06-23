const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

let url = 
"https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=33e88bc8cf82782fee3981add354dd2f";

async function getWeather() {
    let response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayWeather(data)
    } 
}

function displayWeather(data) {
    currentTemp.textContent = Math.round(data.main.temp);
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    captionDesc.textContent = data.weather[0].description;
}

getWeather()