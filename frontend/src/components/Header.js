import React from 'react';
// import './css/Header.css'
import logo from 'C:/Users/Hp/Desktop/social-network-webaap/frontend/src/img/icon.png'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import CookieService from './Cookie';
import Swal from 'sweetalert2'
import {memo} from 'react'
import SearchBar from './SearchBar';

const Header=()=>{
    const navigate=useNavigate()
    const cookie=CookieService()
    const handleLogout=()=>{
      console.log("directing")
      Swal.fire({
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
      })
      .catch((error)=>{
        console.log(error)
      })

      }

    return(
      <div className='fixed w-full top-0 bg-white z-50 '>
        <div className='header flex justify-between border-b border-3 border-gray'>
            <img src={logo} className='h-12'/>
            <div className='flex flex-col justify-center'>
              <SearchBar/>
            </div>
            <div className='w-1/2 headerLinks flex justify-around'>
                <a className='bg-gray-100 rounded-3xl h-3/4 mt-1 pt-1 text-black font-extrabold px-2.5 hover:shadow-md' href="/profile">Profile</a>
                <a href="/feed" className='bg-gray-100 rounded-3xl h-3/4 mt-1 pt-1 text-black font-extrabold px-2.5 hover:shadow-md' >Feed</a>
                <button className='logoutButton border-3 border-black rounded-lg text-black font-extrabold px-2.5 
                hover:shadow-md' onClick={handleLogout}>Logout</button>

            </div>
        </div>
        </div>
    )
}

export default memo(Header);