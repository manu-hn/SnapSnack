import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import userReducer from "./userLoginSlice.js"



const appStore = configureStore({
    reducer: {
        cart: cartReducer,
       userInfo : userReducer,
    }
});
export default appStore;