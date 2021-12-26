import React, { Fragment, useEffect } from "react";
import CardDay from "../UI/CardDay";
import "bootstrap/dist/css/bootstrap.min.css";
import { favoritesActions } from "../../store/favorites-slice";
import { FaHeart } from "react-icons/fa";

import { Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const dispatch = useDispatch();

  const toggleFav = useSelector((state) => state.favorites.isFavorite);
  const faoriteState = useSelector((state) => state.favorites.items);
  const currentKey = useSelector((state) => state.currenWeatherApi.currentKey);
  const currentTemperature = useSelector(
    (state) => state.currenWeatherApi.currentTemperature
  );
  const currentDescription = useSelector(
    (state) => state.currenWeatherApi.currentWeatherDescription
  );

  const addToFavoritesHandler = () => {
    dispatch(
      favoritesActions.toggleFavorites({
        id: currentKey.cityId,
        name: currentKey.label,
        curWeather: currentTemperature,
        description: currentDescription,
      })
    );
  };

  useEffect(() => {
    if (currentKey.key !== null) {
      if (faoriteState.filter((x) => x.id === currentKey.key).length > 0) {
        dispatch(favoritesActions.toggleStatus(true));
      } else {
        dispatch(favoritesActions.toggleStatus(false));
      }
    }
  }, [currentKey.key, faoriteState,dispatch]);

  return (
    <Fragment>
      <Col sm={9}>
        <CardDay
          key={currentKey.cityId}
          id={currentKey.cityId}
          label={currentKey.label}
          subLabel={currentTemperature}
        />
      </Col>
      
      {!toggleFav && <Col sm={1}> <h1><FaHeart color="grey"></FaHeart></h1> </Col>}
      {toggleFav && <Col sm={1}> <h1><FaHeart color="red"></FaHeart></h1> </Col>}
      <Col sm={2}>       
        <Button variant="warning" onClick={addToFavoritesHandler}>
          {!toggleFav && "Add current city to favorites"}
          {toggleFav && "Remove current city from favorites"}
        </Button>
      </Col>
    </Fragment>
  );
};

export default CurrentWeather;
