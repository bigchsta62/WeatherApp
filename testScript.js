// geolocation api key AIzaSyD8NOoVeiNBU2ErY6J_Sy3apS_D-QCw-Tg
// const geolocateKey = "AIzaSyD8NOoVeiNBU2ErY6J_Sy3apS_D-QCw-Tg";
// const golocateURL =
//   "https://www.googleapis.com/geolocation/v1/geolocate?key=" + geolocateKey;
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);

const weatherKey = "1893546eadda6ea230333e67a557c549";

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
