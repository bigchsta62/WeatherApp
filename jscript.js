$(document).ready(function () {
  const weatherKey = "1893546eadda6ea230333e67a557c549";

  const month = moment().format("MM");
  const day = moment().format("DD");
  console.log(month, day);
  const historyURL = "http://numbersapi.com/" + month + "/" + day + "/date";
  let lat = "";
  let long = "";
  let fivedayURL = "";
  let basicURL = "";

  function basicData(location) {
    basicURL =
      "https://api.openweathermap.org/data/2.5/weather?" +
      location +
      "&appid=" +
      weatherKey;
  }

  function fiveDay() {
    fivedayURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    long +
    "&appid=" +
    weatherKey;
  }
  function weatherAjax() {
    $.ajax({
      url: basicURL,
      method: "GET",
    }).then(function (cityData) {
      console.log(cityData);
      lat = cityData.coord.lat;
      long =cityData.coord.lon;
      console.log("current coords", lat, long)
      fiveDay()
      console.log("fiveDayUrl", fivedayURL)
      
    });
  }

  function geoFindMe() {
    function success(position) {
      console.log("hi i'm paul");
      console.log(position);
      basicData("lat=" + position.coords.latitude + "&lon=" + position.coords.longitude)
      console.log("i'm praying", basicURL)
      weatherAjax()
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

  geoFindMe();

  $("#searchBtn").on("click", function () {
    event.preventDefault();
    basicData("q=" + $("#searchSpace").val())
    weatherAjax()
  });

  $.ajax({
    url: historyURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#history").text(response);
  });
});
