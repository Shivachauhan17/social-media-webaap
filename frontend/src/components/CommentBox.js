import React,{useState,useEffect, memo} from 'react'
import Cookie from '../components/Cookie'
import axios from 'axios'
import Swal from 'sweetalert2'

const CommentBox=({postId})=>{
    const cookie=Cookie()
    const [newComment,setNewComment]=useState(false)
    const [comments,setComments]=useState([])
    const [formData,setFormData]=useState({
        person:cookie.getUserCookie(),
        comment:"",
        post:postId
    })

    useEffect(()=>{
        const getComments=async()=>{
            try{
            let gotComments=await axios.post('http://localhost:8000/post/getComments',{post:postId})
            gotComments=gotComments.data.comments
            setComments(gotComments)   
         
        }
        catch(err){
            Swal.fire('some error occured while fetching comments')
        }
        }
        getComments()
    },[newComment])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
        await axios.post('http://localhost:8000/post/comment',formData)
        setNewComment(!newComment)
        
        setFormData({
            ...formData,
            comment:''
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