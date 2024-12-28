import { configureStore } from '@reduxjs/toolkit';
import alldataReducer from '../../features/Api/ApiSlider';
import favoriteReducer from '../../features/Favorites/FavoriteSlice';
import basketReducer from '../../features/Basket/BasketSlice'
export const store = configureStore({
  reducer: {
    data: alldataReducer,
    fav: favoriteReducer,
    basket: basketReducer,
  },
});

export default store;
