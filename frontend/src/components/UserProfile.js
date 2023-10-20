import React, { useEffect, useState,useContext } from "react";
import {memo} from 'react';
import axios from 'axios'
import Cookie from '../components/Cookie'
import './css/UserProfile.css'
import AddBioForm from "./AddBioForm";
import { useProfileContext } from "../pages/profile";
import {AiFillMail,AiOutlineArrowDown} from 'react-icons/ai'

import { ImProfile } from 'react-icons/im';
import { BiTennisBall } from 'react-icons/bi';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import { BiSolidPencil } from 'react-icons/bi';



const UserProfile=()=>{
  const {newPost,setNewPost}=useProfileContext()
  const [bio,setBio]=useState({})
  const [editBio,setEditBio]=useState(false)
  const cookie=Cookie()

  useEffect(()=>{
    
    const fetchBio=async()=>{
      const url=`http://localhost:8000/post/getBio/${cookie.getUserCookie()}`
      let response=await axios.get(url)
      
      setBio(response.data.bio)
    }
    fetchBio()

  },[])
    const [formData, setFormData] = useState({
        image: null,
        caption: '',
        user:cookie.getUserCookie()
      });
    
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setFormData({ ...formData, image: file });
        }
      };
    
      const handleCaptionChange = (event) => {
        const caption = event.target.value;
        setFormData({ ...formData, caption });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataToSend=new FormData();
        formDataToSend.append('myfile',formData.image)
        formDataToSend.append('caption',formData.caption)
        formDataToSend.append('user',formData.user)
    
        try {
          const response = await axios.post('http://localhost:8000/post/createPost', formDataToSend,{
            
              headers: {
                'Content-Type': 'multipart/form-data', // Set the content type to handle file uploads
              },
          });
          
            
            setFormData({
              image: null,
        caption: '',
        user:cookie.getUserCookie()
            })
          
          setNewPost(newPost=>!newPost)
          
        } catch (error) {
          console.error(error);
        }
    
        // You can access formData.selectedImage and formData.caption separately as well
        // For example: formData.selectedImage and formData.caption
      };

    return(
        <div className="UserProfile relative top-12">
            {
              editBio&&(<AddBioForm editBioProp={editBio} setEditBio={setEditBio} />)
            }
            <div className="flex w-2/4 gap-x-10">
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
                <div className="mt-4 flex gap-x-2 justify-center items-center">
                  <BiSolidPencil className="text-2xl" onClick={()=>setEditBio(!editBio)}/>
                  <h5>Edit Bio</h5>
                  
                </div>

              </div>
            </div>
            <div>
              <div>
              <h4>Post Something new</h4>
              </div>
              <div className="postForm" >
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                      <div className="flex flex-col">  
                        <div className="chooseImgDiv">
                          
                          <div className="flex gap-x-4">
                            <AiOutlineArrowDown/>
                            <label htmlFor="image">choose a image</label>
                            </div>
                            <input className="border-gray-200 rounded-md" id="image" type="file" accept="image/*" name="myfile" onChange={handleImageChange}/>
                            
                        </div>

                        <div className="captionDiv mt-2.5">
                          <div className="flex gap-x-4">
                            <AiFillMail/>
                            <label htmlFor="caption">write caption</label>
                          </div>
                          <div>
                            <input className="border-gray-200 rounded-md" placeholder="caption" value={formData.caption} id="caption" type="text" onChange={handleCaptionChange}/>
                            </div>
                        </div>
                        </div>
                      <div className="flex justify-center">
                      <button  type="submit" onSubmit={handleSubmit}>Post</button>
                      </div>
                  </form>
              </div>
              </div>
        </div>
    )

}


export default memo(UserProfile);