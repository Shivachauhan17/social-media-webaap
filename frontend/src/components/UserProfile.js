import React, { useEffect, useState } from "react";
import {memo} from 'react';
import axios from 'axios'
import Cookie from '../components/Cookie'
import './css/UserProfile.css'

import {AiFillMail,AiOutlineArrowDown} from 'react-icons/ai'


const UserProfile=()=>{
  const cookie=Cookie()

  useEffect(()=>{
    cookie.setUserCookie('Shiva')
  })
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
          if(response.status==200){
            console.log(response.status)
            setFormData({
              image: null,
        caption: '',
        user:cookie.getUserCookie()
            })
          }
          
          // console.log(formData)
        } catch (error) {
          console.error(error);
        }
    
        // You can access formData.selectedImage and formData.caption separately as well
        // For example: formData.selectedImage and formData.caption
      };

    return(
        <div className="UserProfile">
            <div className="profileSec">
                <img 
                className="shadow-lg"
                src='https://imgs.search.brave.com/VvgsH1Hqhc651RE68EnGf2N-K_XMRd-Djc-ks8aQFbA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYS9BVnZY/c0VpdnYxeU1rekJP/SkRCdjRvYU00Ny1V/VXQtVFU0bXNEYm5p/dk9FQmdjMTR6RHpn/bTZ3NGZiOXNUQzRw/ZnFxcmVaTnhEOE5Q/Z0pjdkJxcmZlcnlu/X29zVmF1Y2ZxR1M1/N1pobE1XMmxISGpO/cGVXd3hsTEoyMzhS/cm9aNTlWeU00dkZV/YUI4WEZqWk5iM2pv/dXhkeXNySnFiaHJZ/S3pJSTYyV2RocHFD/M0xrTGtaOVh3Q05z/a1dGUVNseDNZQT13/NDMyLWg2NDA.jpeg'/>
            
                <h3>{cookie.getUserCookie()}</h3>
                
            </div>
            <div className="postForm" >
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex flex-col">  
                      <div className="chooseImgDiv">
                        
                        <div className="flex gap-x-4">
                          <AiOutlineArrowDown/>
                          <label htmlFor="image">choose a image</label>
                          </div>
                          <input id="image" type="file" accept="image/*" name="myfile" onChange={handleImageChange}/>
                          
                      </div>

                      <div className="captionDiv mt-2.5">
                        <div className="flex gap-x-4">
                          <AiFillMail/>
                          <label htmlFor="caption">write caption</label>
                        </div>
                        <div>
                          <input placeholder="caption" value={formData.caption} id="caption" type="text" onChange={handleCaptionChange}/>
                          </div>
                      </div>
                      </div>
                    <div className="flex justify-center">
                    <button  type="submit" onSubmit={handleSubmit}>Post</button>
                    </div>
                </form>
            </div>
        </div>
    )

}


export default memo(UserProfile);