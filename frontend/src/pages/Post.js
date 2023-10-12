import React,{useState,useEffect} from 'react'
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import Header from '../components/Header'
import Cookie from '../components/Cookie'

const OwnerPost=()=>{
    const navigate=useNavigate()
    const cookie=Cookie()
    const user=cookie.getUserCookie()
    const postTitle=`${user}'s post`
    const [searchParams]=useSearchParams()
    const id=searchParams.get('id')
    
    const [comments,setComments]=useState([]) 
    const [post,setPost]=useState({})

    const [formData,setFormData]=useState({
        person:cookie.getUserCookie(),
        comment:"",
        post:id
    })

    useEffect(()=>{
        const getComments=async()=>{
            try{
            let gotComments=await axios.post('http://localhost:8000/post/getComments',{post:id})
            gotComments=gotComments.comments
            setComments(gotComments)
            
         
        }
        catch(err){
            Swal.fire('some error occured while fetching comments')
        }
        }

        const getPost=async()=>{
            try{
                const url=`http://localhost:8000/post/${id}`
                let response=await axios.get(url)
                let one_post=response.data.post
                setPost(one_post)
                console.log(post)
            }
            catch(error){
                Swal.fire('some error occured while fetching the post')
            }
        }
        getPost()
        getComments()
        
        
    },[comments])

    const handleCommentChange=(e)=>{
        setFormData({
            ...formData,
            comment:e.target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
        axios.post('http://localhost:8000/post/comment',formData)
        }
        catch(err){
            Swal.fire('something gone wrong')
        }
    }

    return(
        <div>
            <Header/>
            <div className=' flex flex-wrap justify-center mt-10'>
                <div className='w-2/4'>
                    <h3 className='border-b-4 border-gray-400 w-2/6 mb-5'>{postTitle}</h3>
                    <img 
                    className='border-2 border-black rounded-xl shadow-lg w-3/4'
                    src={post.image}/>
                    {/* <h6 className='mt-3'>{post.caption}</h6> */}
                </div>
                <div className='w-2/5'>
                <h5 className='border-b-4 border-gray-400 w-2/12'>comments</h5>
                <div className='h-5/6 shadow-md rounded-2xl'>
                    {
                       
                           
                           comments? (
                            <ul className='flex flex-wrap'>
                                {
                                
                                comments.map(comment=>{
                                    return <li className=' bg-whites mt-6 h-16 w-10/12 border-b-2 border-gray-400'><h6>{comment.person}</h6>
                                    <p>{comment.comment}</p></li>
                                })
                            
                                
                                
                                }
                            </ul>
                    )
                    
                        :(<div className='mt-4 flex justify-center'><h4>no comments yet</h4></div>)
                    
                    
                    }
                </div>
                <div className='w-full'>
                    <form onSubmit={handleSubmit}>
                        <input type='textarea' placeholder='write a comment...' name='comment'
                        className='w-3/4 h-12 rounded-tl-xl rounded-bl-xl bg-white border-3 border-gray-200'
                        onChange={handleCommentChange}
                        />
                        <button 
                        className='w-1/4 h-12  rounded-tr-xl rounded-br-xl bg-white border-3 border-gray-200 hover:bg-slate-200 hover:shadow-md hover:border-white '
                        type='submit'>comment</button> 
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerPost;