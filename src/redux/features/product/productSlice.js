import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedAttributes: [],
    selectedColor: {},
}

export const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        selectAttribute: (state, action) => {
            const { oldVal, newVal } = action.payload
            const selectedAttributeIndex = state.selectedAttributes.findIndex((attribute) => attribute.id === oldVal.id)
            if (selectedAttributeIndex >= 0) {
                state.selectedAttributes[selectedAttributeIndex] = newVal;
            } else {
                state.selectedAttributes = [...state.selectedAttributes, newVal]
            }
        },
        selectColor: (state, action) => {
            state.selectedColor = action.payload
        },
    },
})

export const { selectAttribute, selectColor } = productSlice.actions

export default productSlice.reducer