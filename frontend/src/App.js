import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/signup_login_page'
import Login from './pages/login'
import Signup from './pages/signup'
import  Profile  from "./pages/profile";
import FeedPost from "./components/FeedPost";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={< FeedPost postLink='https://imgs.search.brave.com/VvgsH1Hqhc651RE68EnGf2N-K_XMRd-Djc-ks8aQFbA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYS9BVnZY/c0VpdnYxeU1rekJP/SkRCdjRvYU00Ny1V/VXQtVFU0bXNEYm5p/dk9FQmdjMTR6RHpn/bTZ3NGZiOXNUQzRw/ZnFxcmVaTnhEOE5Q/Z0pjdkJxcmZlcnlu/X29zVmF1Y2ZxR1M1/N1pobE1XMmxISGpO/cGVXd3hsTEoyMzhS/cm9aNTlWeU00dkZV/YUI4WEZqWk5iM2pv/dXhkeXNySnFiaHJZ/S3pJSTYyV2RocHFD/M0xrTGtaOVh3Q05z/a1dGUVNseDNZQT13/NDMyLWg2NDA.jpeg' caption='you are on my list'/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/logout' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
