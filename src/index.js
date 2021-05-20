//https://fervent-agnesi-854393.netlify.app
function formatedDate(dateElements) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[dateElements.getDay()];

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[dateElements.getMonth()];

    let date = dateElements.getDate();
    let year = dateElements.getFullYear();

    return `${day}, ${month} ${date} ${year}`
}

let today = new Date();
let currentDate = document.querySelector("#current-date")
currentDate.innerHTML = formatedDate(today)

function formatedHour(timming) {
    let hours = timming.getHours();
    if (hours < 10) {
        hours = `0${hours}`
    }
    let minutes = timming.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`

}

let hour = document.querySelector("#current-time")
hour.innerHTML = formatedHour(today)




function showCurrentCityTemperature(response) {
    celsiusTemperture = response.data.main.temp;
    let currentTemperature = Math.round(celsiusTemperture);
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = ` ${currentTemperature}`;

    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = `${response.data.name}`;

    let weatherDescription = document.querySelector("#description")
    weatherDescription.innerHTML = response.data.weather[0].description;

    let currentHumidity = response.data.main.humidity;
    let weatherHumidity = document.querySelector("#humidity");
    weatherHumidity.innerHTML = ` ${currentHumidity}%`;

    let currentWind = response.data.wind.speed;
    let weatherWind = document.querySelector("#wind");
    weatherWind.innerHTML = ` ${currentWind} km/h`;

    let weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    weatherIcon.setAttribute("alt", response.data.weather[0].description)
}

function search(city) {
    let apiKey = "8c780c003118c891cdcc809594dbc9d4"
    let units = "metric"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

    axios.get(apiUrl).then(showCurrentCityTemperature)
}


function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-name");
    let currentCity = document.querySelector("#current-city");
    
    if(searchInput.value){
      currentCity.innerHTML = search(searchInput.value)
    } else {
      currentCity.innerHTML = null;
      alert ("Please, enter a city")
    }
}

search("Montreal")

let form = document.querySelector("#search-form")
form.addEventListener("submit", handleSubmit)




function showCurrentTemperature(response) {
    celsiusTemperture = response.data.main.temp;
    let currentTemperature = Math.round(celsiusTemperture);
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = ` ${currentTemperature}`;

    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = `${response.data.name} 📌`;

    let weatherDescription = document.querySelector("#description")
    weatherDescription.innerHTML = response.data.weather[0].description;

    let currentHumidity = response.data.main.humidity;
    let weatherHumidity = document.querySelector("#humidity");
    weatherHumidity.innerHTML = ` ${currentHumidity}%`;

    let currentWind = response.data.wind.speed;
    let weatherWind = document.querySelector("#wind");
    weatherWind.innerHTML = ` ${currentWind} km/h`;
}

function fetchCurrentLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    let apiKey = "8c780c003118c891cdcc809594dbc9d4"
    let units = "metric"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`

    axios.get(apiUrl).then(showCurrentTemperature)
}

function linkCurrentLocation() {
    navigator.geolocation.getCurrentPosition(fetchCurrentLocation)
}

let currentLocation = document.querySelector("#currentInfo");
currentLocation.addEventListener("click", linkCurrentLocation)




function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature")
    let fahrenheitTemperature = (celsiusTemperture * 9) / 5 + 32
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature")
    temperatureElement.innerHTML = Math.round(celsiusTemperture);
}

let celsiusTemperture = null
let fahrenheitLink = document.querySelector("#fahrenheit-link")
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature)
let celsiusLink = document.querySelector("#celsius-link")
celsiusLink.addEventListener("click", displayCelsiusTemperature)
