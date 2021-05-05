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
    console.log(response.data);
    let currentTemperature = Math.round(response.data.main.temp);
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = ` ${currentTemperature}°`;

    let weatherDescription = document.querySelector("#description")
    weatherDescription.innerHTML = response.data.weather[0].description;

    let currentHumidity = response.data.main.humidity;
    let weatherHumidity = document.querySelector("#humidity");
    weatherHumidity.innerHTML = ` ${currentHumidity}%`;

    let currentWind = response.data.wind.speed;
    let weatherWind = document.querySelector("#wind");
    weatherWind.innerHTML = ` ${currentWind} km/h`;
}


function searchCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-name");
    let currentCity = document.querySelector("#current-city");
    if (searchInput.value) {
        currentCity.innerHTML = `${searchInput.value}`
    } else {
        currentCity.innerHTML = null;
        alert ("Please, enter a city")
    }
            
    let apiKey = "8c780c003118c891cdcc809594dbc9d4"
    let units = "metric"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`

    axios.get(apiUrl).then(showCurrentCityTemperature)
}

let city = document.querySelector("#search-form")
city.addEventListener("submit", searchCity)