const { createSlice } = require("@reduxjs/toolkit");

const initialState = ({
    wishlistItems: []
})

const wishlist = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const item = state.wishlistItems.findIndex((state) => (
                state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id)
            ))
            if (item !== -1) {
                state.wishlistItems.splice(item, 1)
            } else {
                state.wishlistItems.push(action.payload)
            }
        },
        removeWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id);
        }
    }
})

export const { addToWishlist, removeWishlist } = wishlist.actions;
export default wishlist.reducer;   