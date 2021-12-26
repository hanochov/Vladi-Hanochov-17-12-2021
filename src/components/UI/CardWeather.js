import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currenWeatherApiActions } from "../../store/currenWeatherApi-slice";

function CardWeather(props) {
  const dispatch = useDispatch();
  const showFullDetailsHandler = () => {
    dispatch(
      currenWeatherApiActions.setCurrentKey({
        key: props.id,
        cityId: props.id,
        label: props.label,
      })
    );
  };

  return (
    <div>
      <Card style={{ width: "14rem" ,minHeight:"14em"}}>
        <Card.Body>
          <Card.Title>{props.label}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.subLabel}
          </Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>

          <Link to="/">
            <Button variant="warning" onClick={showFullDetailsHandler}>
              Show full details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardWeather;
