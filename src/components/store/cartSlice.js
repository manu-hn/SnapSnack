import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => { 
            state.items.splice(action.payload, 1);
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }

})

export const {addToCart, removeFromCart, clearCart}= cartSlice.actions;
export default cartSlice.reducer;