import React,{memo} from 'react'
import {CiStreamOn} from 'react-icons/ci'

const LiveIcon=()=>{
    return(
        <div className='absolute left-1/4 top-2/4'>
            <div className='flex gap-x-1 bg-red-600 w-24 rounded-md text-white justify-center'>
                <h5>Go Live</h5>
                <div className='flex flex-col justify-center text-2xl font-bold'>
                    <CiStreamOn/>
                </div>
            </div>
        </div>
    )
}

export default memo(LiveIcon);