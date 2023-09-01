import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './css/signup_login_page.css'



export function LoginSignupHelper({loginUrl,signupUrl,button1,button2,bootclass1,bootclass2}){

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

export default function LoginSignup(){
    const [homeres, setHomeres] = useState("");
    // const [url,setUrl]=useState("");
    useEffect(() => {
      fetch("http://localhost:8000/")
        .then((res) => res.json())
        .then((data) => {
          setHomeres(data)})
        .catch(err=>{
          console.log(err)
        })
    }, []);

    return(
        <LoginSignupHelper loginUrl={homeres.loginUrl} signupUrl={homeres.signupUrl} 
        button1={homeres.button1} button2={homeres.button2} 
        bootclass1={"btn btn-outline-primary"} bootclass2={"btn btn-outline-success"}/>
    )
}