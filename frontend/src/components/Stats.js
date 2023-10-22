import React, { useState } from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import {GiPhotoCamera} from 'react-icons/gi'



const Stats=({userName})=>{

    const [rangeObj,setRangeObj]=useState({
        like:"50",
        post:"5",
        comment:"50"
    })


    

    return(
        

        <div className=' w-1/4' >
            <div className='flex flex-col gap-y-7'>
                <div className='flex justify-center'>
                    <h4 >Stats</h4>
                </div>
                <div className='flex gap-x-2.5'>
                    <AiOutlineLike className='text-3xl'/>
                    <input 
                    type="range" 
                    min="0"
                    max="100"
                    values={rangeObj.like}
                    
                    className='w-3/4 bg-black'
                    style={{color:"green",
                    border:"2px  solid green"
                 }}
                    
                    />
                </div>

                <div className='flex gap-x-2.5'>
                    <GiPhotoCamera className='text-3xl'/>
                    <input 
                    type="range" 
                    min="0"
                    max="20"
                    values={rangeObj.post}
                    disabled
                    className='w-3/4'
                    />
                </div>
                <div className='flex gap-x-2.5'>
                    <BiCommentDetail className='text-3xl'/>
                    <input 
                    type="range" 
                    min="0"
                    max="100"
                    values={rangeObj.comment}
                    disabled
                    className='w-3/4'
                    />
                </div>
            </div>
        </div>
    

        )
}

export default Stats;