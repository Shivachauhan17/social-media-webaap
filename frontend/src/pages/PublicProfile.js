import React,{useState,createContext,useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import FeedPostForPublic from "../components/FeedPostForPublic";
import Stats from '../components/Stats'
import BioProfile4Public from "../components/BioProfile4Puclic";

const PublicProfile=()=>{
    const [newPost,setNewPost]=useState(false)
     const [searchParams]=useSearchParams()
     const userName=searchParams.get('userName')
     

     return(
        <div>
            <Header/>
            <div className="flex justify-around mt-20 ">
                <div>
                    <BioProfile4Public username={userName}/>
                    <div className="flex justify-end ">
                        
                    </div>

                </div>
                <Stats userName={userName}/>    

            </div>
            <FeedPostForPublic userName={userName}/>
            
        </div>
     )

}

export default PublicProfile;



