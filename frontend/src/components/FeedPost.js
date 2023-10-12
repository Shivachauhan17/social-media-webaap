import React,{useState,useEffect} from "react";
import {memo} from 'react';
import axios from "axios";
import Cookie from './Cookie'
import styles from './css/FeedPost.css'

const FeedPost=({userName})=>{
    const [posts,setPosts]=useState([])
    // const cookie=Cookie()
    const data={
        // user:cookie.getUserCookie()
        user:userName
    }
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.post('http://localhost:8000/post/', data);
            console.log(response.data); // Make sure the response data is what you expect
            
            console.log("posts:",response.data.posts)
            const postArray=response.data.posts
            setPosts(postArray)
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchPosts();
      }, []);

      useEffect(() => {
        // This useEffect will run whenever `posts` changes.
        const returnCompo=()=>{
          console.log(posts)
        }
        returnCompo()

      }, [posts]);
    return(

      <div>
        <div className="main  flex flex-col justify-center mt-4 items-center">
          <div className="postheading">
          <h3 >Posts</h3>
          </div>
      <div>
      <ul className="postlist flex gap-x-14 flex-wrap justify-center " style={{ listStyleType: 'none' }}>{
        posts.map(post=>{
          const link=`getOwnPost/?id=${post._id}`
           return <li 
            className="h-60 mb-5"
           key={post._id}>
            <a href={link}><
            img 
            className="w-1/4 h-40 border border-black rounded-xl"
            src={post.image}/></a>
            <h6>{post.caption}</h6>
            </li>
        })}
      </ul>
      </div>
      </div>
    </div>
       
    )
}

export default memo(FeedPost);
