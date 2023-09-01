import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/login.css'


export function Header4LoginSignup({profileUrl,feedUrl}){
    return(
        <div className='bg-dark'>
            <div className='header'>
                <h2>Friends loop</h2>
                    <a href={profileUrl}>Profile</a>
                    <a href={feedUrl} >Feed</a>
            </div>
        </div>
    )
}

export default function LoginHelper({profileUrl,feedUrl}){
    return(
        <div className='upperWrapper'>
            <Header4LoginSignup className='wrapper1' profileUrl={profileUrl} feedUrl={feedUrl}/>
            
                <form className='loginForm' action="/login" method="POST">
                    <div>
                        <label for="exampleInputEmail1" 
                            >Email address</label
                        >
                        <input
                            type="email"
                            aria-describedby="emailHelp"
                            name="email"
                            className='form-control'
                        />
                    </div>
                    <div >
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className='form-control'
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                </form>
            
        </div>
    );
}