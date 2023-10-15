import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';
// import LoginSignup from './pages/signup_login_page'
import Login from './pages/login'
// import Signup from './pages/signup'
import  Profile  from "./pages/profile";
// import Post from './pages/Post'
// import Feed from "./pages/Feed";
import AddBioForm from "./components/AddBioForm";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={< AddBioForm/>}/>
      {/* <Route path='/login' element={<Login />}/> */}
      {/* <Route path='/signup' element={<Signup />}/> */}
      <Route path='/profile' element={<Profile/>}/>
      {/* <Route path='/logout' element={<Profile/>}/> */}
      {/* <Route path='/getOwnPost' element={<Post/>}/> */}
      {/* <Route path='/feed' element={<Feed/>}/> */}
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
