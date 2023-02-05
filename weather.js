const weather = document.querySelector(".first-weather");
const city = document.querySelector(".last-weather");
const API_KEY = "866f35ca3ee6dfb766754e2a6e31a3b5";

function onGeoOk(position) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.66105077627503&lon=126.83973517740169&appid=866f35ca3ee6dfb766754e2a6e31a3b5`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}`;
    });
}
function onGeoError() {
    alert("Your weather SUCKS!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);