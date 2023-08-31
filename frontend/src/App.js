import React, { useState, useEffect } from "react";
import LoginSignup from './components/signup_login_page'
// import Header from "./components/header";
import Login from './components/login'

function App() {
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


  console.log("curr url is:",window.location.href)
  return (
    <div className="App">
      {/* <LoginSignup loginUrl={homeres.loginUrl} signupUrl={homeres.signupUrl} 
       button1={homeres.button1} button2={homeres.button2} 
       bootclass1={"btn btn-outline-primary"} bootclass2={"btn btn-outline-success"}/>  */}

      <Login profileUrl='/profile' feedUrl='/feed'/>

    </div>
  );
}

export default App;
