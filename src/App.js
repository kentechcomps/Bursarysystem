import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigationbar from './Components/Navbar';
import BursaryApplication from './Components/BursaryApplication';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import Secondaryschool from './Components/Secondaryschool';
import Tertiary from './Components/Tertiaryschool';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/BursaryApplication" element={<BursaryApplication />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Adminlogin" element={<AdminLogin/>} />
          <Route path='/Secondaryschoolapplication' element={<Secondaryschool/>}/>
          <Route path='/Tertiary' element={<Tertiary/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
