import { configureStore } from '@reduxjs/toolkit';
import alldataReducer from '../../features/Api/ApiSlider';
import { favoriteSlice } from '../../features/Favorites/FavoriteSlice';

export const store = configureStore({
  reducer: {
    data: alldataReducer,
    favorite: favoriteSlice.reducer,
  },
});


export default store;
