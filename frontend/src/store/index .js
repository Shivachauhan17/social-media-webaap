import { configureStore } from "@reduxjs/toolkit";
import windowSlice from './window-slice'

const store=configureStore({
    reducer:{
        windowOpen:windowSlice.reducer
    }
})

export default store;