import React,{useState,useEffect,memo} from "react";
import { useNavigate } from "react-router-dom";
import Cookie from '../components/Cookie';

const SearchBar=()=>{
    const cookie=Cookie();
    const [input,setInput]=useState("")
    const navigate=useNavigate()
    const handleInputChange=(e)=>{
        const value=e.target.value;
        setInput(value)
    }

    const handleSubmit=()=>{
        cookie.setpublicUserCookie(input);
        navigate('/publicProfile')
    }

    return(
        <div>
            <div className="h-10 rounded-3xl">
            
                <form onSubmit={handleSubmit} 
                className="flex h-10 bg-gray-100 rounded-3xl">
                    <input 
                    placeholder="search someones profile"
                    className=" border-2 border-gray-100 bg-gray-100 rounded-l-3xl outline-none pl-2.5" 
                    value={input} 
                    onChange={handleInputChange}/>
                    <button type="submit" 
                    className="bg-gray-100 font-bold pl-2.5 border-l-2 border-gray-300 rounded-r-3xl pr-2.5">search</button>
                </form> 
            </div>
        </div>
    )
}

export default memo(SearchBar);