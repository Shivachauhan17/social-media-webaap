import React, { memo } from 'react'
import {FcLike} from "react-icons/fc";


const Postlist=({posts})=>{
        
    return(
    <div className='relative top-14'>
        <div className="flex flex-col gap-x-9 ">
            <div className="postheading flex justify-center">
                <h3 >Posts</h3>
            </div>
        
            {posts && (<div className='grow'>
                <ul className="flex justify-center flex-wrap mt-10 gap-x-14" style={{ listStyleType: 'none' }}>{
                    posts.map(post=>{
                    const link=`getOwnPost/?id=${post._id}`
                    return <li 
                        className=" w-1/4 h-64  mb-10"
                    key={post._id}>
                        <a href={link}>
                        <div className='border-2 border-black rounded-3xl h-full '
                        style={{
                            background: `url(${post.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                            
                        >   <div className='flex justify-center gap-x-1 mt-52 ml-64'>
                                <FcLike className='text-4xl'/>
                                <h4 className='outlined-text mt-2 text-black'>{post.likes} </h4>
                            </div>
                        </div></a>
                        <h6>{post.caption}</h6>
                        </li>
                    })}
                </ul>
            </div>)}
        
        </div>
    </div>)
}

export default Postlist;