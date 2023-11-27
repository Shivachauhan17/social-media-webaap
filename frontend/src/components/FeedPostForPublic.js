import React,{useState,useEffect} from "react";

import {memo} from 'react';
import Swal from 'sweetalert2'

import PostList from "./PostList";
import {useSelector,useDispatch} from 'react-redux';
import { postActions } from "../store/post-slice";
import Cookie from '../components/Cookie';


const FeedPostForPublic=()=>{
  const cookie=Cookie();
    const userName=cookie.getpublicUserCookie();
    const dispatch=useDispatch();
    const posts=useSelector(state=>state.post.posts)
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
              method:"POST",
              body:JSON.stringify(data)
            });
           
            response=await response.json();
            dispatch(postActions.setPosts(response.posts))
          } catch (error) {
            console.log(error)
                Swal.fire('some error occured while fetching the post')
          }
        };
      
        fetchPosts();
      }, []);

      
    return(
    <PostList posts={posts} userName={userName}/>
    )
}

export default memo(FeedPostForPublic);
