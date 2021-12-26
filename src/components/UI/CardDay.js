import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function CardDay(props) {
  return (
    <div>
      <Card style={{ width: "12rem" }}>
        <Card.Body>
          <Card.Title>{props.label}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.subLabel}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDay;
