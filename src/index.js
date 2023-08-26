import React from 'react';
import ReactDOM from 'react-dom';
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import IndexLogin from "./components/index_login_page";

console.log("getting button")


loginUrl="/login"
signupUrl="signup"
firstButton={
    padding:"5px",
    border:"1px solid white",
    backgroud:"blue",
    radius:"50px",
    color:"white",
    width:"60px",
    height:"40px",
    value:"LOGIN",
}
secondButton={
    padding:"5px",
    border:"1px solid white",
    backgroud:"blue",
    radius:"50px",
    color:"white",
    width:"60px",
    height:"40px",
    value:"LOGIN",
}
// const indexRootElement=document.getElementById("index_root")
// const indexRoot=createRoot(indexRootElement)
ReactDOM.render(<IndexLogin loginUrl={loginUrl} signupUrl={signupUrl} firstButton={firstButton} secondButton={secondButton} />, 
        document.getElementById("index_root")
)
registerServiceWorker();