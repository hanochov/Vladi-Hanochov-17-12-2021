import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isVisible: true,
    autocompleteNotification: null,
    currentconditionsNotification: null,
    forecastsNotification:null

  },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
    showAutocompleteNotification(state, action) {
      state.autocompleteNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    showCurrentconditionsNotification(state, action) {
      state.currentconditionsNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    showForecastsNotification(state, action) {
      state.forecastsNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
