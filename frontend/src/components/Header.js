import React from 'react';
// import './css/Header.css'
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
        <div className='header flex justify-between'>
            <h2>Friends Loop</h2>
            <div className='border-2 border-black w-1/2 headerLinks flex justify-around'>
                <a className='border-2 border-black' href="/profile">Profile</a>
                <a href="/feed" className='border-2 border-black'>Feed</a>
                <button className='logoutButton border-2 border-black' onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}

export default memo(Header);