import React from 'react';
import './css/Header.css'
import 'bootstrap/dist/css/bootstrap.css';


const Header=()=>{
    return(
        <div className='header'>
            <h2>Friends Loop</h2>
            <div className='headerLinks'>
                <a class href="/profile">Profile</a>
                <a href="/feed">feed</a>
            </div>
        </div>
    )
}

export default Header;