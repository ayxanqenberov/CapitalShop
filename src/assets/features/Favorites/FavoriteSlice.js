import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: JSON.parse(localStorage.getItem("favs")) || []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const itemFav = state.favs.find(item => item.id === action.payload.id);
      if (!itemFav) {
        state.favs.push(action.payload);
        localStorage.setItem('favs', JSON.stringify(state.favs));
      }
    },
    removeFav: (state, action) => {
      if (action.payload && action.payload.id) {
        state.favs = state.favs.filter(item => item.id !== action.payload.id);
        localStorage.setItem('favs', JSON.stringify(state.favs)); 
      }
    },
  },
});

export const { addFav, removeFav } = favoritesSlice.actions;
export default favoritesSlice.reducer;
