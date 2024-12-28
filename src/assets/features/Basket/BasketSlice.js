import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: JSON.parse(localStorage.getItem('baskets')) || []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: { 
        addBasket: (state, action) => {
            const itemBasket = state.basket.find(item => item.id === action.payload.id);
            if (!itemBasket) {
                state.basket.push(action.payload); 
                localStorage.setItem('baskets', JSON.stringify(state.basket)); 
            }
        },
        removeBasket: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload.id);
            localStorage.setItem('baskets', JSON.stringify(state.basket)); 
        }
    }
});

export const { addBasket, removeBasket } = basketSlice.actions; 
export default basketSlice.reducer;
