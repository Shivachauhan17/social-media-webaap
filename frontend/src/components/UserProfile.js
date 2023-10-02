import React, { useState } from "react";
import {memo} from 'react';
import './css/UserProfile.css'

import {AiFillMail,AiOutlineArrowDown} from 'react-icons/ai'


const UserProfile=({username,profile_url})=>{
    const userName=username
    const profile=profile_url
    const [formData, setFormData] = useState({
        selectedImage: null,
        caption: '',
      });
    
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setFormData({ ...formData, selectedImage: file });
        }
      };
    
      const handleCaptionChange = (event) => {
        const caption = event.target.value;
        setFormData({ ...formData, caption });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Access the combined object
        console.log('Form Data:', formData);
    
        // You can access formData.selectedImage and formData.caption separately as well
        // For example: formData.selectedImage and formData.caption
      };

    return(
        <div className="UserProfile">
            <div className="profileSec">
                <img src='https://imgs.search.brave.com/-BHk2hrIGYGndzLSPDGN74NzhBlfUF4E7b13kBz8OzI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/OC8wNy8xOS8zNy9y/b3NlLTgxNzU4MzBf/NjQwLmpwZw'/>
            
                <h3>{username}</h3>
                
            </div>
            <div className="postForm">
                <form onSubmit={handleSubmit}>
                    
                    <div className="chooseImgDiv">
                        <AiOutlineArrowDown/>
                        <label htmlFor="image">choose a image</label>
                        <br/>
                        <input id="image" type="file" accept="image/*" onChange={handleImageChange}/>
                        <br/>
                    </div>

                    <div className="captioDiv">
                        <AiFillMail/>
                        <label htmlFor="caption">write caption</label>
                        <br/>
                        <input placeholder="caption" value={formData.caption} id="caption" type="text" onChange={handleCaptionChange}/>
                        <br/>
                    </div>
                    <button class="makePostSubmit" type="submit">Post</button>
                </form>
            </div>
        </div>
    )

}


export default memo(UserProfile);