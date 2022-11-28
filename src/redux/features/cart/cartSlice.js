import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    CartQuantity: 0
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            // const { product, attributes } = action.payload
            const selectItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === action.payload.id);
            if (selectItemIndex >= 0) {
                const updatedItem = state.cartItems[selectItemIndex];
                state.cartItems[selectItemIndex] = { ...updatedItem, quantity: updatedItem.quantity + 1 };
                state.CartQuantity += 1;
            } else {
                state.cartItems.push({ product: action.payload, quantity: 1 })
                state.CartQuantity += 1;
            }
        },
        increaseQuantity: (state, action) => {
            state.cartItems = state.cartItems.map(cartItem => {
                if (cartItem.product.id === action.payload) {
                    state.CartQuantity += 1;
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            });
        },
        decreaseQuantity: (state, action) => {
            const updatedCart = state.cartItems.map(cartItem => {
                if (cartItem.product.id === action.payload) {
                    state.CartQuantity -= 1;
                    return { ...cartItem, quantity: cartItem.quantity - 1 }
                }
                return cartItem
            });

            state.cartItems = updatedCart.filter(cartItem => cartItem.quantity > 0)
        },
        updateItemAttributes: (state, action) => {
            const { productId, oldVal, newVal } = action.payload;
            const selectedItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === productId);
            const updatedItem = state.cartItems[selectedItemIndex];
            const selectedOldAttributeIndex = updatedItem.product.selectedAttributes.findIndex(attribute => attribute.id === oldVal.id);
            updatedItem.product.selectedAttributes[selectedOldAttributeIndex] = newVal
        },
        updateItemColor: (state, action) => {
            const { productId, newVal } = action.payload;
            const selectedItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === productId);
            const updatedItem = state.cartItems[selectedItemIndex];
            updatedItem.product.selectedColor = newVal
        },
    },
})

export const { addItemToCart, increaseQuantity, decreaseQuantity, updateItemAttributes, updateItemColor } = cartSlice.actions;

export default cartSlice.reducer;