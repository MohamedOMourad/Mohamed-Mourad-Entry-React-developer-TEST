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

            //check by id and same attributes
            const selectedItemIndex = state.cartItems.findIndex((cartItem) => {
                let sameAttributes = false, sameColor = false;

                if (cartItem.product.id === product.id) {
                    //check item attributes so if the same just update quantity if not add another item
                    cartItem.product.selectedAttributes.forEach((itemAttribute, index) => {
                        sameAttributes = itemAttribute.id === selectedAttributes[index].id ? true : false;
                    });

                    //check item Color attribute if has one so if the same just update quantity if not add another item
                    if (selectedColor.id) {
                        sameColor = selectedColor.id === cartItem.product.selectedColor.id ? true : false
                    } else {
                        sameColor = true
                    }
                }

                return sameAttributes && sameColor
            });

            if (selectedItemIndex >= 0) {
                const updatedItem = state.cartItems[selectedItemIndex];
                state.cartItems[selectedItemIndex] = { ...updatedItem, quantity: updatedItem.quantity + 1 };
                state.CartQuantity += 1;
            } else {
                state.cartItems.push({ product: { ...product, uniqueId: Date.now() }, quantity: 1 });//add another identifier for updates
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
            const { productId, uniqueId, oldVal, newVal } = action.payload;
            const selectedItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === productId && cartItem.product.uniqueId === uniqueId);
            if (selectedItemIndex >= 0) {
                const updatedItem = state.cartItems[selectedItemIndex];
                const selectedOldAttributeIndex = updatedItem.product.selectedAttributes.findIndex(attribute => attribute.id === oldVal.id);
                if (selectedOldAttributeIndex >= 0) {
                    updatedItem.product.selectedAttributes[selectedOldAttributeIndex] = newVal
                }
            }
        },
        updateItemColor: (state, action) => {
            const { productId, uniqueId, newVal } = action.payload;
            const selectedItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === productId && cartItem.product.uniqueId === uniqueId);
            if (selectedItemIndex >= 0) {
                const updatedItem = state.cartItems[selectedItemIndex];
                updatedItem.product.selectedColor = newVal
            }

        },
        resetCart: (state) => {
            state.cartItems = [];
            state.CartQuantity = 0;
        },
    },
})

export const { addItemToCart, increaseQuantity, decreaseQuantity, updateItemAttributes, updateItemColor, resetCart } = cartSlice.actions;

export default cartSlice.reducer;