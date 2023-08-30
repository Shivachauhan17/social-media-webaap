import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Header(){
    return(
        <div>
            <div className='header'>
                <form action="">
                    <input placeholder='search geek friend'></input>
                    <button type='submit'>search</button>
                </form>
                <a><button type='button' className='btn btn-info'>Profile</button></a>
                <a><button type='button' className='btn btn-info'>Feed</button></a>
                <a><button type='button' className='btn btn-outline-primary'>LogOut</button></a>
            </div>
        </div>
    )
}