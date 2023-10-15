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
        <div className='header flex justify-between shadow-md'>
            <h2 className='font-Cedarville-Cursive'>Friends Loop</h2>
            <div className='w-1/2 headerLinks flex justify-around'>
                <a className='bg-gray-100 rounded-3xl h-3/4 mt-1 pt-1 text-black font-extrabold px-2.5 hover:shadow-md' href="/profile">Profile</a>
                <a href="/feed" className='bg-gray-100 rounded-3xl h-3/4 mt-1 pt-1 text-black font-extrabold px-2.5 hover:shadow-md' >Feed</a>
                <button className='logoutButton border-3 border-black rounded-lg text-black font-extrabold px-2.5 
                hover:shadow-md' onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}

export default memo(Header);