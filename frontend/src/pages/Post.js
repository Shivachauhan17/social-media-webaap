import React,{useState,useEffect} from 'react'
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import Header from '../components/Header'
import Cookie from '../components/Cookie'
import CommentBox from '../components/CommentBox'
import {FcLike} from "react-icons/fc";
import {RiDeleteBinLine} from 'react-icons/ri'

const OwnerPost=()=>{
    const navigate=useNavigate()
    const cookie=Cookie()
    const user=cookie.getUserCookie()
    console.log(user)
    const [searchParams]=useSearchParams()
    const id=searchParams.get('id')
    const userName=searchParams.get('userName')
    const postTitle=`${userName}'s post`
    const [newComment,setNewComment]=useState('')
    const [comments,setComments]=useState([]) 
    const [post,setPost]=useState({})

    const [formData,setFormData]=useState({
        person:userName,
        comment:"",
        post:id
    })

    useEffect(()=>{
        
        const getPost=async()=>{
            try{
                const url=`http://localhost:8000/post/${id}`
                let response=await axios.get(url)
                let one_post=response.data.post
                setPost(one_post)
                
            }
            catch(error){
                Swal.fire('some error occured while fetching the post')
            }
        }
        getPost()
        
    },[newComment])

    const handleCommentChange=(e)=>{
        setFormData({
            ...formData,
            comment:e.target.value
        })
    }

    

    const putLike=async()=>{
         
            let response=await axios.put('http://localhost:8000/post/like',{
                post_id:post._id,
                is_liked:1,
                user:cookie.getUserCookie()
            })
            setPost(response.data.post)
        }

    const handleDelete=async()=>{
        await axios.delete(`http://localhost:8000/post/delete?id=${post._id}&c_id=${post.cloudinaryId}`)

        navigate('/profile')

    }
    
    return(
        <div>
            <Header/>
            <div className=' flex flex-wrap justify-center relative top-14'>
                <div className='w-2/4'>
                    <h3 className='border-b-4 border-gray-400 w-2/6 mb-5'>{postTitle}</h3>
                    <img 
                    className='border-2 border-black rounded-xl shadow-lg w-3/4'
                    src={post.image}/>
                    <h6 className='mt-3'>{post.caption}</h6>
                    <div className='flex gap-x-1.5'>
                    <FcLike className='text-4xl' onClick={putLike}/>
                    <h5 className='mt-2'>{post.likes}</h5>
                    </div>
                    {cookie.getUserCookie()===post.user && (<RiDeleteBinLine className='text-3xl mt-5 hover:text-4xl' onClick={handleDelete}/>)}
                </div>
               
            <CommentBox postId={id}/>
            </div>
        </div>
    )
}

export default OwnerPost;