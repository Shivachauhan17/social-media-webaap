import React,{useState,useEffect} from "react";
import { useProfileContext } from "../pages/profile";

import {memo} from 'react';
import axios from "axios";
import PostList from "./PostList";



const FeedPost=()=>{
  const {newPost}=useProfileContext()
    const [posts,setPosts]=useState([])
    
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.post('http://localhost:8000/post/');
           
            const postArray=response.data.posts
            setPosts(postArray)
          } catch (error) {
            
          }
        };
      
        fetchPosts();
      }, [newPost]);

      useEffect(() => {
        // This useEffect will run whenever `posts` changes.
        const returnCompo=()=>{
          
        }
        returnCompo()

      }, []);
    return(

    //   <div>
    //     <div className="main  flex flex-col justify-center mt-4 items-center">
    //       <div className="postheading">
    //       <h3 >Posts</h3>
    //       </div>
    //   <div>
    //   <ul className="postlist flex gap-x-14 flex-wrap justify-center " style={{ listStyleType: 'none' }}>{
    //     posts.map(post=>{
    //       const link=`getOwnPost/?id=${post._id}`
    //        return <li 
    //         className="h-60 mb-5"
    //        key={post._id}>
    //         <a href={link}><
    //         img 
    //         className="w-1/4 h-40 border border-black rounded-xl"
    //         src={post.image}/></a>
    //         <h6>{post.caption}</h6>
    //         </li>
    //     })}
    //   </ul>
    //   </div>
    //   </div>
    // </div>
       
    <PostList posts={posts} />
    )
}

export default memo(FeedPost);
