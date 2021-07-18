const API_KEY = "35e036f9a9692b85422c4630042b9cb4";
let weathericon = {
    "01" : "fas fa-sun",
    "02" : "fas fa-cloud-sun",
    "03" : "fas fa-cloud",
    "04" : "fas fa-cloud-meatball",
    "09" : "fas fa-cloud-sun-rain",
    "10" : "fas fa-cloud-showers-heavy",
    "11" : "fas fa-poo-storm",
    "13" : "fas fa-snowflake",
    "50" : "fas fa-smog",
}
function onGeoOk(position) {
    const lat = position.coords.latitude
    //위도
    const lng = position.coords.longitude
    //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather__icon")
        const tempSpan = document.querySelector(".weather__temp")
        const city = document.querySelector(".weather__city");
        const icon = (data.weather[0].icon).substr(0,2);
        const temp = Math.floor(data.main.temp) + "°";
        const weatherDes = data.weather[0].description
        city.innerText = data.name;
        weather.innerHTML = `<i class="${weathericon[icon]}" title="${weatherDes}"></i>`;
        tempSpan.innerText=temp;
     });
}
function onGeoError(){
    alert("I Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//위치 받아오기