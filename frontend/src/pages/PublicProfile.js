import React,{useState,createContext,useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Coookie from '../components/Cookie'
import Header from "../components/Header";
import FeedPost from "../components/FeedPost";
import Bio_Profile from '../components/Bio_Profile'
import AddBioIcon from '../components/AddBioIcon'
import PostForm from '../components/PostForm'
import Stats from '../components/Stats'


const PublicProfile=()=>{
    const [newPost,setNewPost]=useState(false)
     const cookie=Coookie()
     const [searchParams]=useSearchParams()
     const userName=searchParams.get('userName')
     

     return(
        <div>
            <Header/>
            <div className="flex justify-around mt-20">
                <div>
                    <Bio_Profile/>
                    <div className="flex justify-end">
                        {cookie.getUserCookie()===userName &&<AddBioIcon/>}
                    </div>
                </div>
                {cookie.getUserCookie()===userName?<PostForm/>:<Stats/>}    

            </div>
            <FeedPost/>
            
        </div>
     )

}

export default PublicProfile;



