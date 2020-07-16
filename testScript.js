// geolocation api key AIzaSyD8NOoVeiNBU2ErY6J_Sy3apS_D-QCw-Tg
// const geolocateKey = "AIzaSyD8NOoVeiNBU2ErY6J_Sy3apS_D-QCw-Tg";
// const golocateURL =
//   "https://www.googleapis.com/geolocation/v1/geolocate?key=" + geolocateKey;
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
    } else {
     x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
   x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    console.log(position)
  }


const weatherKey = "1893546eadda6ea230333e67a557c549"

const month = moment().format("MM");
const day = moment().format("DD");
console.log(month, day);
const historyURL = "http://numbersapi.com/" + month + "/" + day + "/date";

const basicURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  $("#citySearch").val() +
  "&appid=" +
  weatherKey;

// const fivedayURL =
// "https://api.openweathermap.org/data/2.5/forecast?q=" +
// $("#citySearch").val() +
// "&appid=" +
// apiKey;

// $.ajax({
//     url: golocateURL,
//     method: "POST"
//     data: 
// }).then(function(response) {
//     console.log("geolocate", response)

// })

$.ajax({
  url: historyURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  $("#history").text(response);
});

$.ajax({
  url: basicURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
