import React from "react";
import moment from "moment";
import { geolocated } from "react-geolocated";
import { Card } from "react-bootstrap";


const weatherKey = "1893546eadda6ea230333e67a557c549";
const date = moment().format("MMMM Do YYYY");

const month = moment().format("MM");
const day = moment().format("DD");

const WeatherCard = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* <Card.Img src={product.image} variant="top" /> */}

      <Card.Body>
        <Card.Text as="div">
          
        </Card.Text>

        <Card.Text as="h5">$ </Card.Text>
      </Card.Body>

      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    </Card>
  );
};

export default WeatherCard;
