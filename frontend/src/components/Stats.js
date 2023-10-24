import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {AiOutlineLike} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import {GiPhotoCamera} from 'react-icons/gi'



const Stats=({userName})=>{

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
                    <h4 >Stats</h4>
                </div>
                <div className='flex gap-x-2.5'>
                    <AiOutlineLike className='text-3xl'/>
                    
                </div>

                <div className='flex gap-x-2.5'>
                    <GiPhotoCamera className='text-3xl'/>
                   
                </div>
                <div className='flex gap-x-2.5'>
                    <BiCommentDetail className='text-3xl'/>
                    
                </div>
            </div>
        </div>
    

        )
}

export default Stats;