import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    isFavorite: false,
  },
  reducers: {
    toggleFavorites(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          curWeather: newItem.curWeather,
          description: newItem.description,
        });
        state.isFavorite = true;
      } else {
        state.items = state.items.filter((item) => item.id !== newItem.id);
        state.isFavorite = false;
      }
    },

    toggleStatus(state, action) {
      if (action.payload===true) {
        state.isFavorite = true;
      } else {
        state.isFavorite = false;
      }
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;
