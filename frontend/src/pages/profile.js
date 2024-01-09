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
import { userActions } from "../store/user-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";


export const ProfileContext=createContext();


export const useProfileContext=()=>useContext(ProfileContext);


export default function Profile(){
    
    const [newPost,setNewPost]=useState(false);
    const dispatch=useDispatch();
    const username=useSelector(state=>state.user?.username);


    useEffect(()=>{
        const getUser=async()=>{
            let response=await fetch("https://friends-loop.onrender.com/home",{
                credentials: "include",
            });
            response=await response.json();
            const user=response.user;
            dispatch(userActions.setUsername(user));
        }

        getUser();
    }
    ,[]);

    
    return(
        <ProfileContext.Provider value={{newPost,setNewPost}}>
            <Header/>
           {/* <Link to="/LiveNow"> <LiveIcon/></Link> */}
            <div className="flex justify-around mt-20">
                <div >
                    <Bio_Profile />
                    <div className="flex justify-end pr-5">
                        <AddBioIcon/>
                    </div>
                </div>
                <PostForm/>    

            </div>
            <FeedPost  newPost={newPost} setNewPost={setNewPost}/>
            
        </ProfileContext.Provider>
    )
    
}

