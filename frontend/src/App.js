import React, { useState, useEffect } from "react";
import LoginSignup from './components/signup_login_page'
// import Header from "./components/header";
import Login from './components/login'
import Signup from './components/signup'


function Decider({url}){
  if(url==='http://localhost:3000/'){
    return(
      <LoginSignup />
    )
  }
  else if(url==='http://localhost:3000/login'){
    return(
      <Login profileUrl='/profile' feedUrl='/feed'/>
    ) 
  }
  else if(url==='http://localhost:3000/signup'){
    return(
      <Signup profileUrl='/profile' feedUrl='/feed'/>)

  }
}

function App() {
  return (
    <div className="App">
      <Decider url={window.location.href} />
    </div>
  );
}

export default App;
