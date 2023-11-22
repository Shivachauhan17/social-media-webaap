import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        userName:"",
    },
    reducers:{
        setUserName(state,payload){
            state.userName=payload.name;
        }
    }
})
export const authActions=authSlice.actions;

export default authSlice;