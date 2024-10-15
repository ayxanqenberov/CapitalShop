import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const isExist = state.favorites.some(
        (product) => product.id === action.payload.id
      );
      if (!isExist) {
        state.favorites.push(action.payload);
      } else {
        alert('This product is already in your favorites!');
      }
    },
    // removeFavorite: (state, action) => {
    //   state.favorites = state.favorites.filter(
    //     (product) => product.id !== action.payload.id
    //   );
    // },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
