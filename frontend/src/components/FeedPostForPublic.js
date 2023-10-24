import React,{useState,useEffect} from "react";

import {memo} from 'react';
import axios from "axios";

import PostList from "./PostList";



const FeedPostForPublic=({userName})=>{
    const [posts,setPosts]=useState([])
    const data={
        user:userName
    }
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.post('http://localhost:8000/post/', data);
           
            const postArray=response.data.posts
            setPosts(postArray)
          } catch (error) {
            
          }
        };
      
        fetchPosts();
      }, []);

      useEffect(() => {
        const returnCompo=()=>{
          
        }
        returnCompo()

      }, []);
    return(
    <PostList posts={posts} userName={userName}/>
    )
}

export default memo(FeedPostForPublic);
