import { createSlice } from "@reduxjs/toolkit";

const currenWeatherApiSlice = createSlice({
  name: "currenWeatherApi",
  initialState: {
    cities: [],
    currentWeatherDescription: "",
    currentTemperature: "",
    currentKey: {
      key: "215854",
      cityId: "215854",
      label: "Tel Aviv - Tel Aviv - Israel",
    },
    nextDaysDetails: [],
  },
  reducers: {
    setCurrentCities(state, action) {
      const newInput = action.payload;
      state.cities = newInput;
    },

    setCurrentKey(state, action) {
      const newInput = action.payload;
      if(newInput!==null){
        state.currentKey = newInput;
      }
     
    },
    setCurrentCityDetails(state, action) {
      const newInput = action.payload;
      state.currentWeatherDescription = newInput[0].subLabel;
      state.currentTemperature = newInput[0].temperature;
    },
    setNextDaysDetails(state, action) {
      const newInput = action.payload;
      state.nextDaysDetails = [];
      for (let index = 0; index < newInput.length; index++) {
        state.nextDaysDetails.push({
          id:newInput[index].EpochDate.toString(),
          date: new Date (newInput[index].EpochDate* 1000).toString().split(" ")[0]   ,
          maxTemp: newInput[index].Temperature.Maximum.Value,
          minTemp: newInput[index].Temperature.Minimum.Value,
        });
      }

    //  state.nextDaysDetails = displayDetails;
    },
  },
});

export const currenWeatherApiActions = currenWeatherApiSlice.actions;
export default currenWeatherApiSlice;
