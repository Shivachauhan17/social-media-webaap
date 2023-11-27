import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {AiOutlineLike} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import {GiPhotoCamera} from 'react-icons/gi'
import Cookie from '../components/Cookie';


const Stats=()=>{
    const cookie=Cookie();
    const userName=cookie.getpublicUserCookie();
    const [stats,setStats]=useState({ })

    useEffect(()=>{
        const getStats=async()=>{
            let response=await axios.get(`http://localhost:8000/post/getStats/${userName}`)
            response=response.data.stats 
            setStats(response)
        }
        getStats()
    },[])

    

    return(
        

        <div className=' w-1/4' >
            <div className='flex flex-col gap-y-7'>
                <div className='flex justify-center'>
                    <h4 className='border-b-4 border-gray-200'>Stats</h4>
                </div>
                <div className='flex gap-x-5 justify-center'>
                    <h3>{stats.likes}</h3>
                    <AiOutlineLike className='text-3xl text-red-600'/>
                    <h4>Total likes</h4>
                    
                </div>

                <div className='flex gap-x-5 justify-center'>
                    <h3>{stats.posts}</h3>
                    <GiPhotoCamera className='text-3xl text-blue-600'/>
                    <h4>Total posts</h4>
                </div>
                <div className='flex gap-x-5 justify-center'>
                    <h3>{stats.comments}</h3>
                    <BiCommentDetail className='text-3xl'/>
                    <h4>Total comments</h4>
                </div>
            </div>
        </div>
    

        )
}

export default Stats;