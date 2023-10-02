import React from 'react';
import './css/Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import CookieService from './Cookie';
import Swal from 'sweetalert2'
import {memo} from 'react'


const Header=()=>{
    const navigate=useNavigate()
    const cookie=CookieService()
    const handleLogout=()=>{Swal.fire({
        icon: 'warning',
        title: 'Logout',
        text: 'Are you sure you want to log out?',
        showCancelButton: true,
        confirmButtonText: 'Yes, log out',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        // Check if the user confirmed the logout
        if (result.isConfirmed) {
          cookie.removeUserCookie()
            navigate('/')
        }
      });}

    return(
        <div className='header'>
            <h2>Friends Loop</h2>
            <div className='headerLinks'>
                <a class href="/profile">Profile</a>
                <a href="/feed">Feed</a>
                <button className='logoutButton' onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}

export default memo(Header);