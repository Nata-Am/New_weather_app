//https://fervent-agnesi-854393.netlify.app

function formatDate (time){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[time.getDay()];
    
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[time.getMonth()];
    let date = time.getDate();
    let year = time.getFullYear();
    
    return `${day}, ${month} ${date} ${year}`
}
  
let today = new Date();
let currentDay = document.querySelector(`#date`)
currentDay.innerHTML = formatDate(today)
    
function formatHour (timming) {
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
  
  let hour = document.querySelector("#time")
  hour.innerHTML = formatHour(today)






let apiKey = "8c780c003118c891cdcc809594dbc9d4"