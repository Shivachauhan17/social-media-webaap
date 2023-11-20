import React from "react";
import GoogleButton from 'react-google-button'
import { windowActions } from "../store/window-slice";
import { useDispatch } from "react-redux";


const GoogleLoginButton=()=>{
    const dispatch=useDispatch()
    const handleWindow=()=>{
        dispatch(windowActions.openWindow())  
    }

    return(
        <div>
            <GoogleButton onClick={handleWindow} />
        </div>
    )
}

export default GoogleLoginButton;