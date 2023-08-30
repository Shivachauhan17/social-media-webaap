import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/signup_login_page.css'



export default function LoginSignup({loginUrl,signupUrl,button1,button2,bootclass1,bootclass2}){

    return(
        <div>
            <div>
                <img src="../../public/img/logo.avif" alt="logo"></img>
            </div>
            <div className='wrapper'>
                <h2>Friends loop</h2>
                <div className='border shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                    <h3>learn in public</h3>
                    <div>
                        <a href={loginUrl}><button type="button" className={bootclass1} >{button1}</button></a>
                    <a href={signupUrl} > <button type="button" className={bootclass2}>{button2}</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}