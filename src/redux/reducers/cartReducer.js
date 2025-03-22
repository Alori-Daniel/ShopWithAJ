import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const exsitingItem = state.items.find(item => item.id === action.payload.id)
            if (exsitingItem) {
                exsitingItem.count = action.payload.count
            } else {
                state.items.push(action.payload)
            }
        },
        removeItem: (state, action) => {
            state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer