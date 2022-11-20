import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currencies: [],
    currency: '',
}

export const currencySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCurrencies: (state, action) => {
            state.currencies = action.payload;
        },
        selectCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCurrencies, selectCurrency } = currencySlice.actions

export default currencySlice.reducer