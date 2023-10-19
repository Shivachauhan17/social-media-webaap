import React,{useState,useEffect,memo} from "react";
import { useNavigate } from "react-router-dom";

const SearchBar=()=>{
    const [input,setInput]=useState("")
    const navigate=useNavigate()
    const handleInputChange=(e)=>{
        const value=e.target.value;
        setInput(value)
    }

    const handleSubmit=()=>{
        navigate(`/publicProfile/${input}`)
    }

    return(
        <div>
            <div className="h-12 ">
            
                <form onSubmit={handleSubmit} 
                className="flex h-12 bg-gray-100 rounded-2xl">
                    <input 
                    placeholder="search someones profile"
                    className=" border-2 border-gray-100 bg-gray-100 rounded-l-2xl" 
                    value={input} 
                    onChange={handleInputChange}/>
                    <button type="submit" className="bg-gray-100">search</button>
                </form> 
            </div>
        </div>
    )
}

export default memo(SearchBar);