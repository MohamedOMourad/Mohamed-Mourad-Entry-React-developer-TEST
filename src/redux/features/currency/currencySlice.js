import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currencies: [],
    selectedCurrencyIndex: 0,
    selectedCurrency: {},
}

export const currencySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCurrencies: (state, action) => {
            state.currencies = action.payload;
        },
        selectCurrencyIndex: (state, action) => {
            state.selectedCurrencyIndex = action.payload;
        },
        selectCurrency: (state) => {
            const { currencies, selectedCurrencyIndex } = state
            state.selectedCurrency = currencies[selectedCurrencyIndex];
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCurrencies, selectCurrencyIndex, selectCurrency } = currencySlice.actions

export default currencySlice.reducer