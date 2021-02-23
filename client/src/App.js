import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";
import Nav from "./Components/Nav";
import moment from "moment";
import axios from "axios"

import { Card } from "react-bootstrap";
import { geolocated } from "react-geolocated";


  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    console.log("Longitude is :", position);
  });

  axios({
    method: 'get',
    url: 'https://bit.ly/2mTM3nY',
    responseType: 'stream'
  })
    .then(function (response) {
      
    });


function App() {
  // const innerRef = useRef();

  // getLocation = () => {
  //   innerRef.current && innerRef.current.getLocation();
  // };
  return (
    <div className="App">
      <Nav />
      <h5>{moment().format("LLLL")}</h5>
      <WeatherCard />
    </div>
  );
}

export default App;
