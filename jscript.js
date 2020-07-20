$(document).ready(function () {
  const weatherKey = "1893546eadda6ea230333e67a557c549";
  const date = moment().format("MMMM Do YYYY");
  console.log(date);
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
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      long +
      "&exclude=current,minutely,hourly&appid=" +
      weatherKey;
  }
  function weatherAjax() {
    $.ajax({
      url: basicURL,
      method: "GET",
    }).then(function (cityData) {
      console.log(cityData);
      lat = cityData.coord.lat;
      long = cityData.coord.lon;
      console.log("current coords", lat, long);
      fiveDay();
      console.log("fiveDayUrl", fivedayURL);
      const unix = cityData.dt;
      const milli = unix * 1000;
      const date = new Date(milli);
      const humanized = date.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      $("#cityName").text(cityData.name);
      $("#date").text(humanized);

      $.ajax({
        url: fivedayURL,
        method: "GET",
      }).then(function (onecall) {
        console.log(onecall);
        for (let i = 0; i < 6; i++) {
          $("#day" + i).empty();
          console.log(i);
          const todayIcon = onecall.daily[i].weather[0].icon;
          console.log(todayIcon);

          const weatherIcon = $("<img>");
          weatherIcon.attr(
            "src",
            "https://openweathermap.org/img/w/" + todayIcon + ".png"
          );

          const temp = $("<p>");
          temp.text("Temperature: ");

          const ul = $("<ul>");
          const morn = $("<li>");
          morn.text(
            "Morning: " +
            Math.floor((onecall.daily[i].temp.morn - 273.15) * 1.8 + 32) +
            "°F"
          );

          const day = $("<li>");
          day.text(
            "Day: " +
            Math.floor((onecall.daily[i].temp.day - 273.15) * 1.8 + 32) +
            "°F"
          );

          const eve = $("<li>");
          eve.text(
            "Evening: " +
            Math.floor((onecall.daily[i].temp.eve - 273.15) * 1.8 + 32) +
            "°F"
          );

          const humid = $("<p>");
          humid.text("Humidity: " + onecall.daily[i].humidity + "%");

          const uvi = $("<p>");
          uvi.text("UV Index: " + onecall.daily[i].uvi);

          ul.append(morn, day, eve);
          $("#day" + i).append(weatherIcon, temp, ul, humid, uvi);

          //Weather icon `<img src="https://openweathermap.org/img/w/${todayIcon}.png"></img>`
          //Temperature: morn, day, eve  (Math.floor(((onecall.daily[i].temp.morn) - 273.15) * 1.8 + 32)); °
          // morn =
          // day =
          // eve =
          //Humidity:  %
          //uv index:
        }
      });
    });
  }

  function geoFindMe() {
    function success(position) {
      console.log("hi i'm paul");
      console.log(position);
      basicData(
        "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude
      );
      console.log("i'm praying", basicURL);
      weatherAjax();
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
    basicData("q=" + $("#searchSpace").val());
    weatherAjax();
  });

  $.ajax({
    url: historyURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#history").text(response);
  });

  var newsurl = "https://api.breakingapi.com/news?q=climate&type=headlines&locale=en-US&api_key=84B453ED54DF49BB93F91EC89296F29B"
  $.ajax({
    url: newsurl,
    method: "GET",
  }).then(function (newsStuff) {
    console.log(newsStuff);
  });
})  
