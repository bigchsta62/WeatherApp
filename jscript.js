$(document).ready(function(){
 const weatherKey = "1893546eadda6ea230333e67a557c549"

  const month = moment().format("MM");
  const day = moment().format("DD");
  console.log(month, day);
  const historyURL = "http://numbersapi.com/" + month + "/" + day + "/date";
  let lat = "";
  let long = "";
  let fiveday = '';
  let fivedayURL = ""

  async function geoFindMe() {

      function success(position) {
      console.log("hi i'm paul")
      console.log(position)
      lat = position.coords.latitude;
      long = position.coords.longitude;
      console.log(lat, long)
      fivedayURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon=" + long +"&appid=" + weatherKey;
      console.log(fivedayURL)
    }


    function error() {
      status.textContent = "Unable to retrieve your location";
    }

     if (!navigator.geolocation) {
       status.textContent = "Geolocation is not supported by your browser";
     } else {
       status.textContent = "Locating…";
      await navigator.geolocation.getCurrentPosition(success, error);
      
      // console.log(latitude, longitude)
    //   fiveday = await fivedaybuilder(lat, long);
      }
   }
  //  const fivedaybuilder = function(lat, long){
  //   const fivedayURL =
  //   "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon=" + long +"&appid=" +
  //   weatherKey;
  //   console.log(fivedayURL)
  // }
  // $.ajax({
  //   url: fivedayURL,
  //   method: "GET"
  // }).then(function(response) {
  //   console.log(response)
  // })

  geoFindMe()

  $("#searchBtn").on("click", function(){
    event.preventDefault()
      const basicURL =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          $("#searchSpace").val() +
          "&appid=" +
          weatherKey;
      $.ajax({
          url: basicURL,
          method: "GET",
          }).then(function (response) {
          console.log(response);
      });
  })
   



  $.ajax({
    url: historyURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#history").text(response);
  });
})
