import { createSlice } from "@reduxjs/toolkit";

const postSlice=createSlice({
    name:"post",
    initialState:{
        posts:[],
        feedPosts:[],
        comments:[],
        post:{
            image:"",
            cloudinaryId:"",
            caption:"",
            likes:"",
            user:""
        }
    },
    reducers:{
        setPosts(state,action){
            state.posts=action.payload;
        },
        setFeedPosts(state,action){
            state.feedPosts=action.payload;
        },
        setComments(state,action){
            state.comments=action.payload;
        },
        setPost(state,action){
            state.post=action.payload;
        }

    }
})

export const postActions=postSlice.actions;
export default postSlice;