import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/signup_login_page'
import Login from './pages/login'
import Signup from './pages/signup'
import  Profile  from "./pages/profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={< LoginSignup/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/logout' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
