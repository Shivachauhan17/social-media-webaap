import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Cookie from '../components/Cookie'
import Header from "../components/Header";
import UserProfile from '../components/UserProfile'
import FeedPost from "../components/FeedPost";
import './css/Profile.css'

// import Header from './header'

export default function Profile(){
    const cookie=Cookie()
    const userName =cookie.getUserCookie();

    
    return(
        <div>
            <Header/>
            <UserProfile username={userName} profile_url={"app"}/>
            <FeedPost userName={userName}/>
            
        </div>
    )
    
}

