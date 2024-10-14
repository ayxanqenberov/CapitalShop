import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

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
  },
});


export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
