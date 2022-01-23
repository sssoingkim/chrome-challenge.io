const API_KEY = "fc2f77f907cbebfc5fb02860bd8280da"

function geolok(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const locationBox = document.querySelector("#location");
        const weatherBox = document.querySelector("#weather");
        locationBox.innerText = data.name;
        weatherBox.innerText = `${data.main.temp}°C / ${data.weather[0].main}`;
    });
}
function geoloerror() {
    console.log("Weather ERROR!");
}

navigator.geolocation.getCurrentPosition(geolok, geoloerror);