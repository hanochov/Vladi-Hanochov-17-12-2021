import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import CardWeather from "../UI/CardWeather";
import { Container, Col, Row, Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import img from "../UI/img/pexels-david-jakab-1080722.jpg";

function Favorites() {
  const favoritesCities = useSelector((state) => state.favorites.items);

  return (
    <Container>
      {favoritesCities.length<1 && <Alert variant="warning">
        <Alert.Heading>Oh ! The Favorites page is empty!</Alert.Heading>
        <p>
          To see your favorite cities on this page, please navigate to the
          homepage and add the cities you like to your favorites page using the
          "Add current to favorites" button
        </p>
      </Alert>}
      <Row>
        {favoritesCities.map((city) => (
          <Col key={city.id}>
            <CardWeather
              key={city.id}
              id={city.id}
              label={city.name}
              subLabel={city.curWeather}
              description={city.description}
            />
          </Col>
        ))}
      </Row>
      <br></br>
      <Row>
        <Image src={img} fluid />
      </Row>
    </Container>
  );
}

export default Favorites;
