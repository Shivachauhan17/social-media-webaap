import { configureStore } from "@reduxjs/toolkit";
import windowSlice from './window-slice'
import authSlice from "./auth-slice";
import userSlice from "./user-slice";

const store=configureStore({
    reducer:{
        windowOpen:windowSlice.reducer,
        auth:authSlice.reducer,
        user:userSlice.reducer

    }
})

export default store;