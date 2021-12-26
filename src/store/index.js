import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import favoritesSlice from "./favorites-slice";
import autocompleteApiSlice from "./autocompleteApi-slice";
import currenWeatherApiSlice from "./currenWeatherApi-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    favorites: favoritesSlice.reducer,
    autocompleteApi: autocompleteApiSlice.reducer,
    currenWeatherApi : currenWeatherApiSlice.reducer
  },
});

export default store;
