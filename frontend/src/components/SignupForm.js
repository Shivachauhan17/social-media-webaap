import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/SignupForm.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function SignupHelper(){
    const navigate=useNavigate();
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
            const error=response.error
            const errorListHTML = `<ul>${error.map((err) => `<li>${err.msg}</li>`).join("")}</ul>`;
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: errorListHTML,
            })
            
          }
          else{
            
            navigate('/profile')
            }
          }
          
          
         catch (error) {
          console.log(error)
        }
      };

    return(<div>
        <div className='upperWrapper'>
            
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="exampleInputEmail1" 
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
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formdata.password}
                            className='form-control'
                            onChange={handlePassChange}
                        />
                    </div>
                    <div >
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
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
        
        </div>
    );
}