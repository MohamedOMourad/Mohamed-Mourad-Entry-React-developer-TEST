import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    category: {},
}

export const categorySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        storeCategories: (state, action) => {
            state.categories = action.payload;
        },
        storeSelectedCategory: (state, action) => {
            state.category = state.categories.find(category => category.name === action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const { storeCategories, storeSelectedCategory } = categorySlice.actions

export default categorySlice.reducer