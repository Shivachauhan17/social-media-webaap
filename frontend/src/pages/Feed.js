import React,{useState,useEffect} from "react";

import {memo} from 'react';
import axios from "axios";
import PostList from '../components/PostList'
import Header from '../components/Header' 
import { useSelector,useDispatch } from "react-redux";
import { postActions } from "../store/post-slice";
const Feed=()=>{
    const dispatch=useDispatch();
    const posts=useSelector(state=>state.post.posts);
    console.log(posts)
    useEffect(()=>{
        const fetchPosts = async () => {
            try {
              let response = await fetch('http://localhost:8000/post/getFeed',{
                method:"GET",
                credentials:"include"
              });
             
              response=await response.json();
              dispatch(postActions.setPosts(response.posts))
              
            } catch (error) {
              
            }
          };
          fetchPosts()
    },[])


    return(
        <div>
            <Header/>
            <PostList posts={posts}/>
        </div>
    )

}


export default memo(Feed);