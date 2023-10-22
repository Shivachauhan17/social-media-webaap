import React, {useState, useEffect,createContext,useContext } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Cookie from '../components/Cookie'
import Header from "../components/Header";
import Bio_Profile from '../components/Bio_Profile'
import AddBioIcon from '../components/AddBioIcon'
import PostForm from '../components/PostForm'
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
            <div className="flex justify-around mt-20">
                <div >
                    <Bio_Profile userName={cookie.getUserCookie()}/>
                    <div className="flex justify-end">
                        <AddBioIcon/>
                    </div>
                </div>
                <PostForm/>    

            </div>
            <FeedPost userName={userName} newPost={newPost} setNewPost={setNewPost}/>
            
        </ProfileContext.Provider>
    )
    
}

