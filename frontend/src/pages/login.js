import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/login.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookie from '../components/Cookie'
import Header from '../components/Header';
import axios from 'axios';


export default function LoginHelper(){
    const cookie=Cookie()
    const navigate=useNavigate();
    axios.get('http://localhost:8000/login')
        .then(response=>{
            
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
        try{
            let response=await axios.post('http://localhost:8000/login',loginformdata)
            response=await response.data;
            
          if(response.error){
            const error=response.error
            const errorListHTML = `<ul>${error.map((err) => `<li>${err}</li>`).join("")}</ul>`;

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: errorListHTML,
            })
            
          }
          else{
            cookie.setUserCookie(response.user)
            navigate('/profile')
            }
        
            }
        catch(error){
            console.log(error)
        }
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