import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/login.css'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';


export default function LoginHelper(){
    const navigate=useNavigate();
    axios.get('http://localhost:8000/login')
        .then(response=>{
            console.log("user:",response.user)
            if(response.data.user){
                
                navigate(`/profile/${response.user}`)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    

    const [loginformdata,setLoginfromdata]=useState({
        username:"",
        password:""
    })
    

    function handleUsernameChange(e){
        setLoginfromdata({
          ...loginformdata,
          username: e.target.value,
        });
      };
    
    function handlePassChange(e){
        setLoginfromdata({
          ...loginformdata,
          password: e.target.value,
        });
      }; 

    const handleSubmit=async(e)=>{
        
        e.preventDefault();
            let response=await axios.post('http://localhost:8000/login',loginformdata)
                console.log(response)
        
            }


    return(
        <div className='upperWrapper'>
            <Header />
            
                <form className='loginForm border shadow-lg p-3 mb-5 bg-body-tertiary rounded' onSubmit={handleSubmit}>
                    <div>
                        <label for="exampleInputEmail1" 
                            >Email address</label
                        >
                        <input
                            type="text"
                            
                            name="username"
                            className='form-control'
                            value={loginformdata.username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div >
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className='form-control'
                            value={loginformdata.password}
                            onChange={handlePassChange}
                        />
                    </div>
                    <button type="submit" onSubmit={handleSubmit} className="btn btn-outline-primary">LOGIN</button>
                </form>
            
        </div>
    );
}