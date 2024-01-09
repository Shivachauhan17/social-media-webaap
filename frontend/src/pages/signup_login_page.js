import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import './css/signup_login_page.css'
import logo from '../img/icon.png'
import GoogleLoginButton from '../components/GoogleLoginButton'


const LoginSignup= ()=>{
   

    

        
            return(
        <div>
            <div>
                <img src={logo} className='h-12'></img>
            </div>
            <div >
                <h2 className="logoname font-bold text-2xl text-black outline-4 flex justify-center md:mt-10">Friends loop</h2>
                <div className="flex justify-center">
                    <div className='border-2 border-gray-300 rounded-3xl flex flex-col gap-x-10 w-72 h-2/5 mt-24 shadow-lg'>
                        <div className="flex justify-center mt-12">
                            <h3 className="font-bold pl-10 font-open-sans">Let's make you a account in one click</h3>
                        </div>
                        
                        <div className="flex justify-center mt-12 mb-10">
                            <GoogleLoginButton />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>)}
    

export default LoginSignup;

        
      
    
