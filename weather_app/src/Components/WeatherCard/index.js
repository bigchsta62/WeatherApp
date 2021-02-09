import React from "react";

import { Card } from "react-bootstrap";

const WeatherCard = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* <Card.Img src={product.image} variant="top" /> */}

      <Card.Body>
        

        <Card.Text as="div">
          
        </Card.Text>

        <Card.Text as="h5">$ </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
