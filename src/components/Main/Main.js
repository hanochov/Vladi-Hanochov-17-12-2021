import React, {useEffect } from "react";
import { Container,Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import winterImg from "../UI/img/winter.jpg";
import springImg from "../UI/img/spring.jpg";
import summerImg from "../UI/img/summer.jpg";
import { currenWeatherApiActions } from "../../store/currenWeatherApi-slice";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CurrentWeather from "./CurrentWeather";
import NextDaysWeather from "./NextDaysWeather";
import SearchCity from "./SearchCity";
import ErrorNotifactions from "../UI/ErrorNotifactions";
import {dummyCities , dummyCity ,dummyForecasts} from "../UI/dummyData"


const Main = () => {
  const accuweatherKey = "aTCAtdkX97ann5skSEVGWihmFt1JA7JK&q"; 
  const currentInput = useSelector(
    (state) => state.autocompleteApi.currentInput
  );
  const currentKey = useSelector((state) => state.currenWeatherApi.currentKey);
  const currentTemperature = useSelector(
    (state) => state.currenWeatherApi.currentTemperature
  );
  const currentDescription = useSelector(
    (state) => state.currenWeatherApi.currentWeatherDescription
  );

  const autocompleteErroeMessage = useSelector(
    (state) => state.ui.autocompleteNotification
  );
  const currentconditionsErroeMessage = useSelector(
    (state) => state.ui.currentconditionsNotification
  );
  const forecastsErroeMessage = useSelector(
    (state) => state.ui.forecastsNotification
  );

  const faoriteState = useSelector((state) => state.favorites.isFavorite);

  const dispatch = useDispatch();

  const getWeatherKey = async () => {
    try {
       const response = await fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${accuweatherKey}=${currentInput}`
      );
      
      if (!response.ok) {

        throw new Error("Something went wrong!");
      }

      const data = await response.json();    
      //const data = dummyCities;

      const transformedCities = data.map((city) => {
        return {
          key: city.Key,
          cityId: city.Key,
          label:
            city.LocalizedName +
            " - " +
            city.AdministrativeArea.LocalizedName +
            " - " +
            city.Country.LocalizedName,
        };
      });

      dispatch(currenWeatherApiActions.setCurrentCities(transformedCities));
    } catch (error) {
      if (error.message !== "Unexpected end of JSON input") {
        dispatch(
          uiActions.showAutocompleteNotification({
            status: "error",
            title: "Error!",
            message: error.message,
            type:"autocomplete"
          })
        );
      }
    }
  };

  const getCityWeatherByKey = async () => {
    try {
          const response = await fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${currentKey.cityId}?apikey=${accuweatherKey}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      //const data = dummyCity;
  
      const transformedCityDetails = data.map((city) => {
        return {
          key: city.EpochTime,
          cityId: currentKey.cityId,
          label: currentKey.label,
          subLabel: city.WeatherText,
          temperature:
            city.Temperature.Imperial.Value + city.Temperature.Imperial.Unit,
        };
      });
      dispatch(
        currenWeatherApiActions.setCurrentCityDetails(transformedCityDetails)
      );
    } catch (error) {
       if (error.message !== "Unexpected end of JSON input") {
        dispatch(
          uiActions.showCurrentconditionsNotification({
            status: "error",
            title: "Error!",
            message: error.message,
            type:"Currentconditions"
          })
        );
      }
    }
  };

  const getCity5dayWeatherByKey = async () => {
    try {
       const response = await fetch(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentKey.cityId}?apikey=${accuweatherKey}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
     // const data = dummyForecasts
    
      dispatch(currenWeatherApiActions.setNextDaysDetails(data.DailyForecasts));
    } catch (error) {
      if (error.message !== "Unexpected end of JSON input") {
        dispatch(
          uiActions.showForecastsNotification({
            status: "error",
            title: "Error!",
            message: error.message,
            type:"Forecasts"
          })
        );
      }
    }
  };

  useEffect(() => {
    getWeatherKey();
  }, [currentInput]);

  useEffect(() => {
    getCityWeatherByKey();
    getCity5dayWeatherByKey();
  }, [currentKey]);

  return (
    <Container>
      {autocompleteErroeMessage !== null && (
        <ErrorNotifactions
          label={autocompleteErroeMessage.title}
          subLabel={autocompleteErroeMessage.message}
          description={autocompleteErroeMessage.type}
        />
      )}
       {currentconditionsErroeMessage !== null && (
        <ErrorNotifactions
          label={currentconditionsErroeMessage.title}
          subLabel={currentconditionsErroeMessage.message}
          description={currentconditionsErroeMessage.type}
        />
      )}
       {forecastsErroeMessage !== null && (
        <ErrorNotifactions
          label={forecastsErroeMessage.title}
          subLabel={forecastsErroeMessage.message}
          description={forecastsErroeMessage.type}
        />
      )}
      <Row>
        <SearchCity />
      </Row>
      <br></br>
      <Row>
        <CurrentWeather />
      </Row>
      <br></br>
      <Row>
        <Container>
          {parseInt(currentTemperature) < 60 && <Image src={winterImg} fluid />}
          {parseInt(currentTemperature) >= 60 &&
            parseInt(currentTemperature) <= 77 && (
              <Image src={springImg} fluid />
            )}
          {parseInt(currentTemperature) > 77 && <Image src={summerImg} fluid />}
        </Container>
      </Row>
      <br></br>
      <Row>
        <NextDaysWeather />
      </Row>
    </Container>
  );
};

export default Main;
