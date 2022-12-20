import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 categories: [],
 category: {},
};

export const categorySlice = createSlice({
 name: "Category",
 initialState,
 reducers: {
  storeCategories: (state, action) => {
   state.categories = action.payload;
  },
  storeSelectedCategory: (state, action) => {
   state.category = action.payload;
  },
 },
});

// Action creators are generated for each case reducer function
export const { storeCategories, storeSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
