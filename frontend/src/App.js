import React, { useState, useEffect } from "react";
import LoginSignup from './components/signup_login_page'
// import Header from "./components/header";
import Login from './components/login'

function Decider({url}){
  if(url==='http://localhost:3000/'){
    return(
      <LoginSignup />
    )
  }
  else{
    return(
      <Login profileUrl='/profile' feedUrl='/feed'/>
    ) 
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
