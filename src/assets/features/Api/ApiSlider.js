import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value: [],
  status: 'idle', 
  error: null,
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
});

const alldata = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
  
});

export default alldata.reducer; 
