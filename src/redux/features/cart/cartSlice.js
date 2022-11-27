import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [
        // {
        //     product: {
        //         "id": "huarache-x-stussy-le",
        //         "name": "Nike Air Huarache Le",
        //         "brand": "Nike x Stussy",
        //         "img": "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
        //         "prices": [
        //             {
        //                 "currency": {
        //                     "label": "USD",
        //                     "symbol": "$"
        //                 },
        //                 "amount": 144.69
        //             },
        //             {
        //                 "currency": {
        //                     "label": "GBP",
        //                     "symbol": "£"
        //                 },
        //                 "amount": 104
        //             },
        //             {
        //                 "currency": {
        //                     "label": "AUD",
        //                     "symbol": "A$"
        //                 },
        //                 "amount": 186.65
        //             },
        //             {
        //                 "currency": {
        //                     "label": "JPY",
        //                     "symbol": "¥"
        //                 },
        //                 "amount": 15625.24
        //             },
        //             {
        //                 "currency": {
        //                     "label": "RUB",
        //                     "symbol": "₽"
        //                 },
        //                 "amount": 10941.76
        //             }
        //         ],
        //         "attributes": [
        //             {
        //                 "id": "Size",
        //                 "name": "Size",
        //                 "type": "text",
        //                 "items": [
        //                     {
        //                         "displayValue": "40",
        //                         "value": "40",
        //                         "id": "40"
        //                     },
        //                     {
        //                         "displayValue": "41",
        //                         "value": "41",
        //                         "id": "41"
        //                     },
        //                     {
        //                         "displayValue": "42",
        //                         "value": "42",
        //                         "id": "42"
        //                     },
        //                     {
        //                         "displayValue": "43",
        //                         "value": "43",
        //                         "id": "43"
        //                     }
        //                 ]
        //             }
        //         ],
        //         "attribute": {
        //             "displayValue": "40",
        //             "value": "40",
        //             "id": "40"
        //         },
        //         "price": {
        //             "currency": {
        //                 "label": "USD",
        //                 "symbol": "$"
        //             },
        //             "amount": 144.69
        //         }
        //     },
        //     quantity: 1
        // },
        // {
        //     product: {
        //         "id": "huarache-x-stussy-le",
        //         "name": "Nike Air Huarache Le",
        //         "brand": "Nike x Stussy",
        //         "img": "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
        //         "prices": [
        //             {
        //                 "currency": {
        //                     "label": "USD",
        //                     "symbol": "$"
        //                 },
        //                 "amount": 144.69
        //             },
        //             {
        //                 "currency": {
        //                     "label": "GBP",
        //                     "symbol": "£"
        //                 },
        //                 "amount": 104
        //             },
        //             {
        //                 "currency": {
        //                     "label": "AUD",
        //                     "symbol": "A$"
        //                 },
        //                 "amount": 186.65
        //             },
        //             {
        //                 "currency": {
        //                     "label": "JPY",
        //                     "symbol": "¥"
        //                 },
        //                 "amount": 15625.24
        //             },
        //             {
        //                 "currency": {
        //                     "label": "RUB",
        //                     "symbol": "₽"
        //                 },
        //                 "amount": 10941.76
        //             }
        //         ],
        //         "attributes": [
        //             {
        //                 "id": "Size",
        //                 "name": "Size",
        //                 "type": "text",
        //                 "items": [
        //                     {
        //                         "displayValue": "40",
        //                         "value": "40",
        //                         "id": "40"
        //                     },
        //                     {
        //                         "displayValue": "41",
        //                         "value": "41",
        //                         "id": "41"
        //                     },
        //                     {
        //                         "displayValue": "42",
        //                         "value": "42",
        //                         "id": "42"
        //                     },
        //                     {
        //                         "displayValue": "43",
        //                         "value": "43",
        //                         "id": "43"
        //                     }
        //                 ]
        //             }
        //         ],
        //         "attribute": {
        //             "displayValue": "40",
        //             "value": "40",
        //             "id": "40"
        //         },
        //         "price": {
        //             "currency": {
        //                 "label": "USD",
        //                 "symbol": "$"
        //             },
        //             "amount": 144.69
        //         }
        //     },
        //     quantity: 1
        // },
    ],
    CartQuantity: 0
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const selectItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === action.payload.id);
            if (selectItemIndex >= 0) {
                const oldItem = state.cartItems[selectItemIndex];
                state.cartItems[selectItemIndex] = { ...oldItem, quantity: oldItem.quantity + 1 };
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
            const { productId , newVal } = action.payload;

            const selectedItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === productId);

            const updatedItem = state.cartItems[selectedItemIndex];
            updatedItem.product.selectedColor = newVal
        },
    },
})

export const { addItemToCart, increaseQuantity, decreaseQuantity, updateItemAttributes, updateItemColor } = cartSlice.actions

export default cartSlice.reducer