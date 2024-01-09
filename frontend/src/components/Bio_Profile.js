import React, { useEffect } from "react";
import {memo} from 'react';
import { useSelector } from "react-redux/es/hooks/useSelector";
import {useDispatch} from 'react-redux';
import { userActions } from "../store/user-slice";
import './css/UserProfile.css'

import { ImProfile } from 'react-icons/im';
import { BiTennisBall } from 'react-icons/bi';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { BsFillBalloonHeartFill } from 'react-icons/bs';

const Bio_Profile=()=>{
  const dispatch=useDispatch()
  const username=useSelector(state=>state.user?.username)
    const bio=useSelector(state=>state.user.bio);
    const user=useSelector(state=>state.user);
    console.log(user)
    useEffect(()=>{
    
        const fetchBio=async()=>{
          const url='https://friends-loop.onrender.com/post/getBio';
          let response=await fetch(url,{
            credentials: "include",
        });
         response=await response.json();
         
          if(response.bio){
            dispatch(userActions.setBio(response.bio));
          }
          if(username===""){
            dispatch(userActions.setUsername(response.username))
          }
          
        }
        fetchBio()
    
      },[])

    return(<div>
        {bio.profession!=="" ? <div className="flex gap-x-10">
              <div className="profileSec">
                  <img 
                  className="shadow-lg"
                  src='https://imgs.search.brave.com/AMJIF4luRDh-XqO7A9Nmb2O84SqbuDIrugtKeEL5gx4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmFuZG9td2lyZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvMzAwOTE1/NDYvSU1HXzAzMjku/anBlZw'/>
              
                  <h3 >{username}</h3>
                  
              </div>

              <div className="mt-4 flex flex-col gap-x-2 justify-around">
                
                <div className=" flex gap-x-2">
                  <ImProfile className="text-2xl"/>
                  <h5>Profession</h5>
                  <p>{bio.profession}</p>
                </div>
                <div className=" flex gap-x-2">
                  <LiaBirthdayCakeSolid className="text-2xl"/>
                  <h5>BirthDay</h5>
                  <p>{bio.birthday}</p>
                </div>
                <div className=" flex gap-x-2">
                  <BiTennisBall className="text-2xl"/>
                  <h5>Hobby</h5>
                  <p>{bio.hobby}</p>
                </div>
                <div className=" flex gap-x-2">
                  <BsFillBalloonHeartFill className="text-2xl"/>
                  <h5>Love to do</h5>
                  <p>{bio.love_to_do}</p>
                </div>

              </div>
            </div>:<div className="profileSec ">
                <img 
                  className="shadow-lg"
                  src='https://imgs.search.brave.com/AMJIF4luRDh-XqO7A9Nmb2O84SqbuDIrugtKeEL5gx4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmFuZG9td2lyZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvMzAwOTE1/NDYvSU1HXzAzMjku/anBlZw'/>
              
                  <h3>{username}</h3>
                  
              </div>}
            </div>
    )
}
export default Bio_Profile;