import React,{useState,useEffect} from "react";
import { useProfileContext } from "../pages/profile";

import {memo} from 'react';
import { useSelector,useDispatch } from "react-redux";
import PostList from "./PostList";
import { postActions } from "../store/post-slice";


const FeedPost=()=>{
  const {newPost}=useProfileContext()
  const dispatch=useDispatch();
   const posts=useSelector(state=>state.post.posts);
    
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            let response = await fetch('https://friends-loop.onrender.com/post/',{
              method:"POST",
              credentials:"include"
            });
           
            response=await response.json();
            dispatch(postActions.setPosts(response.posts))
            
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
