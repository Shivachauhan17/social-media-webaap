import React,{useState,useEffect} from 'react'
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Header from '../components/Header'
import CommentBox from '../components/CommentBox'
import {FcLike} from "react-icons/fc";
import {RiDeleteBinLine} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../store/post-slice';
import { userActions } from '../store/user-slice'; 
const OwnerPost=()=>{

    const navigate=useNavigate()
    const [searchParams]=useSearchParams()
    const id=searchParams.get('id')
    const [userName,setUsername]=useState("")
    const [myUserName,setMyUserName]=useState("");
    console.log(myUserName)
    const post=useSelector(state=>state.post.post);
    const postTitle=`${userName}'s post`
    
    const dispatch=useDispatch();

    const [formData,setFormData]=useState({
        person:userName,
        comment:"",
        post:id
    })

    useEffect(()=>{
        
        const fetchUser=async()=>{
            let response=await fetch("http://localhost:8000/home",{
                    credentials:"include"
                });
                response=await response.json();
                setMyUserName(response.user);
        }

        const getPost=async()=>{
            try{
                
                let response=await fetch("http://localhost:8000/post/particular",{
                    credentials:"include",
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body:JSON.stringify({postId:id}),
                    method:"POST"
                });
                response=await response.json();
                setUsername(response.post.user)
                dispatch(postActions.setPost(response.post))
                
            }
            catch(error){
                console.log(error)
                Swal.fire('some error occured while fetching the post')
            }
        }
        fetchUser();
        getPost();
        
    },[])

    // const handleCommentChange=(e)=>{
    //     setFormData({
    //         ...formData,
    //         comment:e.target.value
    //     })
    // }

    

    const putLike=async()=>{
         
            let response=await fetch('http://localhost:8000/post/like',{
                method:"PUT",
                credentials:"include",
                headers: {
                    "Content-Type": "application/json",
                  },
                body:JSON.stringify({
                    post_id:post._id,
                    is_liked:1
                })
        })
        response= await response.json();
        dispatch(postActions.setPost(response.post))
            // setPost(response.data.post)
        }

    const handleDelete=async()=>{
        await fetch(`http://localhost:8000/post/delete?id=${post._id}&c_id=${post.cloudinaryId}`,{
            method:"DELETE",
                credentials:"include"
        })

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
                    {userName===myUserName && (<RiDeleteBinLine className='text-3xl mt-5 hover:text-4xl' onClick={handleDelete}/>)}
                </div>
               
            <CommentBox postId={id}/>
            </div>
        </div>
    )
}

export default OwnerPost;