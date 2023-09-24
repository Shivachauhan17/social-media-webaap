import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignupHelper(){
    const navigate=useNavigate();
    const [status,setStatus]=useState("");
    const [errors,setErrors]=useState([]);
    const [formdata,setFormdata]=useState({

        userName:"",
        password:"",
        confirmPassword:""
    })
    
      function handleNameChange(e){
        setFormdata({
          ...formdata,
          userName: e.target.value,
        });
      };
      function handlePassChange(e){
        setFormdata({
          ...formdata,
          password: e.target.value,
        });
      };  
      function handleConfpassChange(e){
        setFormdata({
          ...formdata,
          confirmPassword: e.target.value,
        });
      };  

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          let response = await axios.post('http://localhost:8000/signup',formdata)
          response=await response.data;
          if(response.error){
            setErrors(response.error)
            console.log(errors)
          }
          else{
            setStatus(response.status)
            if(status){
            navigate('/login')}
          }
          
          
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return(
        <div className='upperWrapper'>
            
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div>
                        <label for="exampleInputEmail1" 
                            >username</label
                        >
                        <input
                            name="userName"
                            className='form-control'
                            value={formdata.userName}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div >
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formdata.password}
                            className='form-control'
                            onChange={handlePassChange}
                        />
                    </div>
                    <div >
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formdata.confirmPassword}
                            className='form-control'
                            onChange={handleConfpassChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary signupbtn">SIGNUP</button>
                </form>
            
        </div>
    );
}