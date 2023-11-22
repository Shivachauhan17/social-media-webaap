import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/signup_login_page.css'
import logo from 'C:/Users/Hp/Desktop/social-network-webaap/frontend/src/img/icon.png'
import axios from "axios";
import GoogleLoginButton from '../components/GoogleLoginButton'

const LoginSignup= ()=>{
    const [user,setUser]=useState(null)  
    console.log(user)
        useEffect(()=>{
            const getUser=async()=>{
                let response=await fetch("http://localhost:8000",{
                    credentials: "include",
                });
                response=await response.json();
                setUser(response)
            }

            getUser();
        }
        ,[])
        
            return(
        <div>
            <div>
                <img src={logo} className='h-12'></img>
            </div>
            <div >
                <h2 className="logoname font-bold text-2xl text-black outline-4 flex justify-center">Friends loop</h2>
                <div className="flex justify-center">
                    <div className='border-2 border-gray-300 rounded-3xl flex flex-col gap-x-10 w-1/4 h-2/5 mt-24 shadow-lg'>
                        <div className="flex justify-center mt-12">
                            <h3 className="font-bold">Learn in Public</h3>
                        </div>
                        <div className="flex justify-center mt-12">
                            <div>
                                <a href='/login'><button type="button" className="btn btn-outline-primary" >Login</button></a>
                                <a href='/signup' > <button type="button" className="btn btn-outline-success">Signup</button></a>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-12 mb-10">
                            <GoogleLoginButton />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>)}
    

export default LoginSignup;

        
      
    
