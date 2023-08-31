import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/header.css'

export default function Header({profileUrl,feedUrl,logoutUrl}){
    return(
        <div className='bg-dark'>
            <div className='header'>
                <h2>Friends loop</h2>
                <form action="">
                    <input placeholder='search geek friend'></input>
                    <button type='submit' className='material-symbols-outlined'>search</button>
                </form>
                <a href={profileUrl} >Profile</a>
                <a href={feedUrl} >Feed</a>
                <a href={logoutUrl} >LogOut</a>
            </div>
        </div>
    )
}