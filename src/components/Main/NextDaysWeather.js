import React, { Fragment } from "react";
import { Col} from "react-bootstrap";
import CardDay from "../UI/CardDay";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
const NextDaysWeather = () => {
  const nextDaysDetails = useSelector(
    (state) => state.currenWeatherApi.nextDaysDetails
  );

  return (
    <Fragment>
      {nextDaysDetails.map((day) => (
     
        <Col key={day.date}>
          <CardDay
            key={day.date}
            label={day.date}
            subLabel={"Max  : " + day.maxTemp + "F"}
            description={"Min  : " + day.minTemp + "F"}
          />
        </Col>
  
      ))}
    </Fragment>
  );
};

export default NextDaysWeather;
