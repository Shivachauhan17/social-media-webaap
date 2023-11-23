import { configureStore } from "@reduxjs/toolkit";
import windowSlice from './window-slice'
import authSlice from "./auth-slice";
import userSlice from "./user-slice";
import postSlice from "./post-slice";

const store=configureStore({
    reducer:{
        windowOpen:windowSlice.reducer,
        auth:authSlice.reducer,
        user:userSlice.reducer,
        post:postSlice.reducer

    }
})

export default store;