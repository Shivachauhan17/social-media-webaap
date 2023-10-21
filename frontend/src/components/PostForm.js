import React,{useState} from "react";
import {memo} from 'react';
import axios from 'axios'
import Cookie from '../components/Cookie'
import { useProfileContext } from "../pages/profile";
import {AiFillMail,AiOutlineArrowDown} from 'react-icons/ai'


const PostForm=()=>{
  const {newPost,setNewPost}=useProfileContext()

    const cookie=Cookie()

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
    )
}

export default memo(PostForm);