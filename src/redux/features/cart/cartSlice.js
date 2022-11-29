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
            const { product, selectedAttributes, selectedColor } = action.payload;
            const selectItemIndex = state.cartItems.findIndex((cartItem) => cartItem.product.id === product.id);

            //check if the item already in cart so just update quantity if not add it for first time
            if (selectItemIndex >= 0) {
                const updatedItem = state.cartItems[selectItemIndex];
                let sameAttributes = true, sameColor = true;

                //check item attributes so if the same just update quantity if not add another item
                updatedItem.product.selectedAttributes.forEach((itemAttribute, index) => {
                    sameAttributes = itemAttribute.id === selectedAttributes[index].id ? true : false;
                });

                //check item Color attribute if has one so if the same just update quantity if not add another item
                if (selectedColor.id) {
                    sameColor = selectedColor.id === updatedItem.product.selectedColor.id ? true : false
                }

                if (sameAttributes && sameColor) {
                    state.cartItems[selectItemIndex] = { ...updatedItem, quantity: updatedItem.quantity + 1 };
                    state.CartQuantity += 1;
                } else {
                    state.cartItems.push({ product: { ...product, uniqueId: Date.now() }, quantity: 1 })//add another identifier for updates
                    state.CartQuantity += 1;
                }
            } else {
                state.cartItems.push({ product, quantity: 1 })
                state.CartQuantity += 1;
            }
        },
        increaseQuantity: (state, action) => {
            const { productId, uniqueId } = action.payload;
            //add uniqueId for the the items with the same id
            state.cartItems = state.cartItems.map(cartItem => {
                if (cartItem.product.uniqueId === uniqueId && cartItem.product.id === productId) {
                    state.CartQuantity += 1;
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            });
        },
        decreaseQuantity: (state, action) => {
            const { productId, uniqueId } = action.payload;
            //add uniqueId for the the items with the same id
            const updatedCart = state.cartItems.map(cartItem => {
                if (cartItem.product.uniqueId === uniqueId && cartItem.product.id === productId) {
                    state.CartQuantity -= 1;
                    return { ...cartItem, quantity: cartItem.quantity - 1 }
                }
                return cartItem
            });

            //remove any item with zero quantity
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