import { createSlice } from "@reduxjs/toolkit";


export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            const item = state.wishlistItems.findIndex((item) => item.id === action.payload.id)
        
            if (item !== -1) {
                state.wishlistItems.splice(item, 1)
            } else {
                state.wishlistItems.push(action.payload)
            }
        },
        removeWishlist: ((state, action) => {
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id);
        }),
    },
});

export const { addToWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;   