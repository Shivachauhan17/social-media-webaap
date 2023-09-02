import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/signup.css'
import {Header4LoginSignup} from './login'

export default function SignupHelper({profileUrl,feedUrl}){
    const [formdata,setFormdata]=useState({
        email:"",
        userName:"",
        password:"",
        confirmPassword:""
    })

    function handleEmailChange(e){
        setFormdata({
          ...formdata,
          email: e.target.value,
        });
      };
    
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
          const response = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
          });
    
          if (response.ok) {
            // Handle success
            console.log('Data sent successfully');
          } else {
            // Handle errors
            console.error('Error sending data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return(
        <div className='upperWrapper'>
            <Header4LoginSignup className='wrapper1' profileUrl={profileUrl} feedUrl={feedUrl}/>
            
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div>
                        <label for="exampleInputEmail1" 
                            >Email address</label
                        >
                        <input
                            type="email"
                            aria-describedby="emailHelp"
                            name="email"
                            value={formdata.email}
                            className='form-control'
                            onChange={handleEmailChange}
                        />
                    </div>
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