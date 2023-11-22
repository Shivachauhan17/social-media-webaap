import React from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccessFull=()=>{
    const navigate=useNavigate();

    const redirectSetCookie=async()=>{
       
        navigate('/profile');
    }

    setTimeout(redirectSetCookie,3000);

    return(
        <div className="flex justify-center">
            <h2 className="font-semibold">Thank you for the login.<br/> redirecting you to you profile</h2>
        </div>
    )
}
export default LoginSuccessFull;