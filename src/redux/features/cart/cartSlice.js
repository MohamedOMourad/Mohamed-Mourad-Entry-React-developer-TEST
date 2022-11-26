import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [
        {
            product: {
                "id": "huarache-x-stussy-le",
                "name": "Nike Air Huarache Le",
                "brand": "Nike x Stussy",
                "img": "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
                "prices": [
                    {
                        "currency": {
                            "label": "USD",
                            "symbol": "$"
                        },
                        "amount": 144.69
                    },
                    {
                        "currency": {
                            "label": "GBP",
                            "symbol": "£"
                        },
                        "amount": 104
                    },
                    {
                        "currency": {
                            "label": "AUD",
                            "symbol": "A$"
                        },
                        "amount": 186.65
                    },
                    {
                        "currency": {
                            "label": "JPY",
                            "symbol": "¥"
                        },
                        "amount": 15625.24
                    },
                    {
                        "currency": {
                            "label": "RUB",
                            "symbol": "₽"
                        },
                        "amount": 10941.76
                    }
                ],
                "attributes": [
                    {
                        "id": "Size",
                        "name": "Size",
                        "type": "text",
                        "items": [
                            {
                                "displayValue": "40",
                                "value": "40",
                                "id": "40"
                            },
                            {
                                "displayValue": "41",
                                "value": "41",
                                "id": "41"
                            },
                            {
                                "displayValue": "42",
                                "value": "42",
                                "id": "42"
                            },
                            {
                                "displayValue": "43",
                                "value": "43",
                                "id": "43"
                            }
                        ]
                    }
                ],
                "attribute": {
                    "displayValue": "40",
                    "value": "40",
                    "id": "40"
                },
                "price": {
                    "currency": {
                        "label": "USD",
                        "symbol": "$"
                    },
                    "amount": 144.69
                }
            },
            quantity: 1
        },
        {
            product: {
                "id": "huarache-x-stussy-le",
                "name": "Nike Air Huarache Le",
                "brand": "Nike x Stussy",
                "img": "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
                "prices": [
                    {
                        "currency": {
                            "label": "USD",
                            "symbol": "$"
                        },
                        "amount": 144.69
                    },
                    {
                        "currency": {
                            "label": "GBP",
                            "symbol": "£"
                        },
                        "amount": 104
                    },
                    {
                        "currency": {
                            "label": "AUD",
                            "symbol": "A$"
                        },
                        "amount": 186.65
                    },
                    {
                        "currency": {
                            "label": "JPY",
                            "symbol": "¥"
                        },
                        "amount": 15625.24
                    },
                    {
                        "currency": {
                            "label": "RUB",
                            "symbol": "₽"
                        },
                        "amount": 10941.76
                    }
                ],
                "attributes": [
                    {
                        "id": "Size",
                        "name": "Size",
                        "type": "text",
                        "items": [
                            {
                                "displayValue": "40",
                                "value": "40",
                                "id": "40"
                            },
                            {
                                "displayValue": "41",
                                "value": "41",
                                "id": "41"
                            },
                            {
                                "displayValue": "42",
                                "value": "42",
                                "id": "42"
                            },
                            {
                                "displayValue": "43",
                                "value": "43",
                                "id": "43"
                            }
                        ]
                    }
                ],
                "attribute": {
                    "displayValue": "40",
                    "value": "40",
                    "id": "40"
                },
                "price": {
                    "currency": {
                        "label": "USD",
                        "symbol": "$"
                    },
                    "amount": 144.69
                }
            },
            quantity: 1
        },
    ]
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