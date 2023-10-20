import React, {useState, useEffect,createContext,useContext } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Cookie from '../components/Cookie'
import Header from "../components/Header";
import UserProfile from '../components/UserProfile'
import FeedPost from "../components/FeedPost";
import './css/Profile.css'

// import Header from './header'

export const ProfileContext=createContext();


export const useProfileContext=()=>useContext(ProfileContext);


export default function Profile(){
    const cookie=Cookie()
    const userName =cookie.getUserCookie();

    const [newPost,setNewPost]=useState(false)



    
    return(
        <ProfileContext.Provider value={{newPost,setNewPost}}>
            <Header/>
            <UserProfile username={userName} profile_url={"app"} newPost={newPost} setNewPost={setNewPost}/>
            <FeedPost userName={userName} newPost={newPost} setNewPost={setNewPost}/>
            
        </ProfileContext.Provider>
    )
    
}

