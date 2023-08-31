import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/header.css'


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

export default function Login({profileUrl,feedUrl}){
    return(
        <div>
            <Header4LoginSignup profileUrl={profileUrl} feedUrl={feedUrl}/>
                <div>
                    <form action="/login" method="POST">
                        <div>
                            <label for="exampleInputEmail1" 
                                >Email address</label
                            >
                            <input
                                type="email"
                                aria-describedby="emailHelp"
                                name="email"
                            />
                        </div>
                        <div >
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                name="password"
                            />
                        </div>
                        <button type="submit" class="">Submit</button>
                    </form>
                </div>
        </div>
    );
}