import React,{useState,useEffect} from "react";

import {memo} from 'react';
import axios from "axios";
import PostList from '../components/PostList'
import Header from '../components/Header' 

const Feed=()=>{
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const fetchAllPosts=async()=>{
            let response=await axios.get('http://localhost:8000/post/getFeed')
            // response=response.data.posts
            console.log("response:",response)

            setPosts(response.data.posts)
        }
        fetchAllPosts()
    },[])


    return(
        <div>
            <Header/>
            <PostList posts={posts}/>
        </div>
    )

}


export default memo(Feed);