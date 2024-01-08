import React,{useState,useEffect, memo} from 'react'
import axios from '../axios_instance/axios'
import Swal from 'sweetalert2'
import {useSelector,useDispatch} from 'react-redux';
import { postActions } from '../store/post-slice';
import { userActions } from '../store/user-slice'; 

const CommentBox=({postId})=>{
    const dispatch=useDispatch()
    const comments=useSelector(state=>state.post.comments)
    const userName=useSelector(state=>state.user.username)
    const [formData,setFormData]=useState({
        person:userName,
        comment:"",
        post:postId
    })

    useEffect(()=>{

        const fetchUser=async()=>{
            let response=await fetch("https://friends-loop.onrender.com/",{
                    credentials:"include"
                });
                response=await response.json();
                dispatch(userActions.setUsername(response.user))
                setFormData({
                    ...formData,
                    person:response.user
                })
        }

        const getComments=async()=>{
            try{
            let response=await fetch('https://friends-loop.onrender.com/post/getComments',{
                credentials:"include",
                headers: {
                    "Content-Type": "application/json",
                  },
                  method:"POST",
                body:JSON.stringify({post:postId})})
            response=await response.json();
            dispatch(postActions.setComments(response.comments))
            
         
        }
        catch(err){
            Swal.fire('some error occured while fetching comments')
        }
        }

        fetchUser();
        getComments()
    },[])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
        let response=await fetch('https://friends-loop.onrender.com/post/comment',{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type": "application/json"
        },

        body:JSON.stringify(formData)})

        response=await response.json();
        dispatch(postActions.setComments(response.comments))
        
        
        setFormData({
            ...formData,
            comment:""
        })
        }
        catch(err){
            Swal.fire('something gone wrong')
        }
    }

    const handleCommentChange=(e)=>{
        setFormData({
            ...formData,
            comment:e.target.value
        })
    }

    return(
        <div className='w-2/5'>
                <h5 className='border-b-4 border-gray-400 w-2/12'>comments</h5>
                <div className=' h-4/6 shadow-md rounded-2xl'>
                    {
                       
                           
                           comments? (
                            <ul className='flex flex-wrap h-4/6 overflow-auto'>
                                {
                                
                                comments.map(comment=>{
                                    return <li key={comment._id}className=' bg-whites mt-6 h-16 w-10/12 border-b-2 border-gray-400'><h6>{comment.person}</h6>
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
                        value={formData.comment}
                        />
                        <button 
                        className='w-1/4 h-12  rounded-tr-xl rounded-br-xl bg-white border-3 border-gray-200 hover:bg-slate-200 hover:shadow-md hover:border-white '
                        type='submit'>comment</button> 
                    </form>
                </div>
                </div>
    )
}

export default memo(CommentBox);