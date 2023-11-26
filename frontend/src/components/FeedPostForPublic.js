import React,{useState,useEffect} from "react";

import {memo} from 'react';
import axios from "axios";

import PostList from "./PostList";
import {useSelector,useDispatch} from 'react-redux';
import { postActions } from "../store/post-slice";

const FeedPostForPublic=({userName})=>{
    const dispatch=useDispatch();
    const posts=useSelector(state=>state.post.posts)
    console.log(posts)
    const data={
        user:userName
    }
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const url='http://localhost:8000/post/4public'
            let response = await fetch(url, {
              credentials:"include",
              headers:{
                "Content-Type": "application/json",
              },
              method:"GET",
              body:JSON.stringify(data)
            });
           
            response=await response.json();
            dispatch(postActions.setPosts(response.posts))
          } catch (error) {
            
          }
        };
      
        fetchPosts();
      }, []);

      
    return(
    <PostList posts={posts} userName={userName}/>
    )
}

export default memo(FeedPostForPublic);
