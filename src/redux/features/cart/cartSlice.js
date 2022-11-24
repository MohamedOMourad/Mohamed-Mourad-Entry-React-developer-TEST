import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [{ product: {}, quantity: 0 }]
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const selectItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === action.payload.id);
            if (selectItemIndex > 0) {
                const oldItem = state.cartItems[selectItemIndex];
                state.cartItems[selectItemIndex] = { ...oldItem, quantity: oldItem.quantity + 1 }
                // state.cartItems.map(cartItem => cartItem.product.id === selectedProduct.product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
            } else {
                state.cartItems.push({ product: action.payload, quantity: 1 })
            }
            console.log([...state.cartItems])
        },
    },
})

export const { addItemToCart } = cartSlice.actions

export default cartSlice.reducer