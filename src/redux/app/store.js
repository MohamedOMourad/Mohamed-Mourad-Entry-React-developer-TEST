import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../features/currency/currencySlice';
import categoryReducer from '../features/category/categorySlice';
import cartReducer from '../features/cart/cartSlice'
export const store = configureStore({
    reducer: {
        Currency: currencyReducer,
        Category: categoryReducer,
        Cart: cartReducer
    },
})