import React from 'react';
// import './css/Header.css'
import logo from '../img/icon.png'
import 'bootstrap/dist/css/bootstrap.css';
import { useActionData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import {memo} from 'react'
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user-slice';

const Header=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()



    const handleLogout=()=>{
      Swal.fire({
        icon: 'warning',
        title: 'Logout',
        text: 'Are you sure you want to log out?',
        showCancelButton: true,
        confirmButtonText: 'Yes, log out',
        cancelButtonText: 'Cancel',
      }).then(async(result) => {
        // Check if the user confirmed the logout
        if (result.isConfirmed) {
           let response=await fetch('https://friends-loop.onrender.com/logout');
           console.log(response)
           response=await response.json();
           
           navigate('/');
            
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