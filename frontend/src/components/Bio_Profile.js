import React, { useEffect, useState,useContext } from "react";
import {memo} from 'react';
import axios from 'axios'
import Cookie from '../components/Cookie'

import './css/UserProfile.css'

import { ImProfile } from 'react-icons/im';
import { BiTennisBall } from 'react-icons/bi';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { BsFillBalloonHeartFill } from 'react-icons/bs';

const Bio_Profile=()=>{
    const [bio,setBio]=useState({})
  const cookie=Cookie()
    useEffect(()=>{
    
        const fetchBio=async()=>{
          const url=`http://localhost:8000/post/getBio/${cookie.getUserCookie()}`
          let response=await axios.get(url)
          
          setBio(response.data.bio)
        }
        fetchBio()
    
      },[])

    return(<div>
        {bio ? <div className="flex w-2/4 gap-x-10">
              <div className="profileSec">
                  <img 
                  className="shadow-lg"
                  src='https://imgs.search.brave.com/AMJIF4luRDh-XqO7A9Nmb2O84SqbuDIrugtKeEL5gx4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmFuZG9td2lyZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvMzAwOTE1/NDYvSU1HXzAzMjku/anBlZw'/>
              
                  <h3>{cookie.getUserCookie()}</h3>
                  
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
            </div>:<div className="profileSec">
                  <img 
                  className="shadow-lg"
                  src='https://imgs.search.brave.com/AMJIF4luRDh-XqO7A9Nmb2O84SqbuDIrugtKeEL5gx4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmFuZG9td2lyZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvMzAwOTE1/NDYvSU1HXzAzMjku/anBlZw'/>
              
                  <h3>{cookie.getUserCookie()}</h3>
                  
              </div>}
            </div>
    )
}
export default memo(Bio_Profile)