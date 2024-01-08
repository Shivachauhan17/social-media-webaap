import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/signup_login_page'
import Login from './pages/login'
import Signup from './pages/signup'
import  Profile  from "./pages/profile";
import Post from './pages/Post'
import Feed from "./pages/Feed";
import PublicProfile from "./pages/PublicProfile";
import LiveIcon from "./components/LiveIcon";
import LoginSuccessFull from "./pages/LoginSuccessFull";
import LoginFailed from "./pages/LoginFailed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<LoginSignup/>}/>
      {/* <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/> */}
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/logout' element={<Profile/>}/>
      <Route path='/getOwnPost' exact element={<Post/>}/>
      <Route path='/publicProfile/getOwnPost' exact element={<Post/>}/>
      <Route path='/feed' element={<Feed/>}/>
      <Route path='/publicProfile' element={<PublicProfile/>}/>
      <Route path='/loginSuccessful' element={<LoginSuccessFull/>}/>
      <Route path='/loginFailure' element={<LoginFailed/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;