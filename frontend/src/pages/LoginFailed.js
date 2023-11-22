import React from "react";
import { useNavigate } from "react-router-dom";

const LoginFailed=()=>{
    const navigate=useNavigate();

    const redirect=async()=>{
        navigate('/');
    }

    setTimeout(redirect,3000);

    return(
        <div className="flex justify-center">
            <h2 className="font-semibold">Some error occured in login.<br/> redirecting you to you login homepage</h2>
        </div>
    )
}
export default LoginFailed;