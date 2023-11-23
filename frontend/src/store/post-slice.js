import { createSlice } from "@reduxjs/toolkit";

const postSlice=createSlice({
    name:"post",
    initialState:{
        posts:[],
        feedPosts:[]
    },
    reducers:{
        setPosts(state,action){
            state.posts=action.payload;
        },
        setFeedPosts(state,action){
            state.feedPosts=action.payload;
        }
    }
})

export const postActions=postSlice.actions;
export default postSlice;