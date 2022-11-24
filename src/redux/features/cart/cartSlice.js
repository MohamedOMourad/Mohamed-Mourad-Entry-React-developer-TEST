import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const selectItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === action.payload.id);
            if (selectItemIndex >= 0) {
                const oldItem = state.cartItems[selectItemIndex];
                state.cartItems[selectItemIndex] = { ...oldItem, quantity: oldItem.quantity + 1 }
            } else {
                state.cartItems.push({ product: action.payload, quantity: 1 })
            }
        },
    },
})

export const { addItemToCart } = cartSlice.actions

export default cartSlice.reducer