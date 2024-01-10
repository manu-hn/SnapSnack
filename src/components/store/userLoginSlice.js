import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: true
}

const userLoginSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        loginUser: (state) => {
            state.isLoggedIn = true;
        },
        logoutUser : (state)=>{
            state.isLoggedIn = false;
        }
    }

})

export const { loginUser, logoutUser}= userLoginSlice.actions;
export default userLoginSlice.reducer;