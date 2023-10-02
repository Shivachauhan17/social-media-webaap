import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/signup_login_page.css'
import Cookie from '../components/Cookie'
import axios from "axios";

const LoginSignup= ()=>{
    const cookieData=Cookie();
    const navigate=useNavigate();
       
        useEffect(()=>{
          if(cookieData.getUserCookie()){
            
            const user=cookieData.getUserCookie();

            navigate('/profile');
          }
        },[])

        
            return(
        <div>
            <div>
                <img src="../../public/img/logo.avif" alt="logo"></img>
            </div>
            <div className='wrapper'>
                <h2 className="font-bold text-2xl text-black outline-4">Friends loop</h2>
                <div className='border shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                    <h3>Learn in Public</h3>
                    <div>
                        <a href='/login'><button type="button" className="btn btn-outline-primary" >Login</button></a>
                    <a href='/signup' > <button type="button" className="btn btn-outline-success">Signup</button></a>
                    </div>
                </div>
            </div>
            
        </div>)}
    

export default LoginSignup;

        
      
    
