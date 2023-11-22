import React, {useState, useEffect,createContext,useContext } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../components/Header";
import Bio_Profile from '../components/Bio_Profile'
import AddBioIcon from '../components/AddBioIcon'
import PostForm from '../components/PostForm'
import FeedPost from "../components/FeedPost";
import LiveIcon from "../components/LiveIcon";
import './css/Profile.css'


export const ProfileContext=createContext();


export const useProfileContext=()=>useContext(ProfileContext);


export default function Profile(){
    
    const [newPost,setNewPost]=useState(false)

    

    
    return(
        <ProfileContext.Provider value={{newPost,setNewPost}}>
            <Header/>
           <Link to="/LiveNow"> <LiveIcon/></Link>
            <div className="flex justify-around mt-20">
                <div >
                    <Bio_Profile />
                    <div className="flex justify-end">
                        <AddBioIcon/>
                    </div>
                </div>
                <PostForm/>    

            </div>
            <FeedPost  newPost={newPost} setNewPost={setNewPost}/>
            
        </ProfileContext.Provider>
    )
    
}

