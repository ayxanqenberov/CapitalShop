import { configureStore } from '@reduxjs/toolkit';
import alldataReducer from '../../features/Api/ApiSlider';
import favoriteReducer from '../../features/Favorites/FavoriteSlice';

export const store = configureStore({
  reducer: {
    data: alldataReducer,
    fav: favoriteReducer,
  },
});

export default store;
