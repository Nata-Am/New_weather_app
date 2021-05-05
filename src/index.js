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


let apiKey = "8c780c003118c891cdcc809594dbc9d4"