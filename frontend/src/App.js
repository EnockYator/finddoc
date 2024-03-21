import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Appointments from './components/Appointments';
import PrivacyPolicy from './components/Privacy-policy';
import TermsOfService from './components/Terms-of-service';
import ContactDeveloper from './components/Contact-developer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/appointments" element={<Appointments />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/terms-of-service" element={<TermsOfService />}/>
        <Route path="/contact-developer" element={<ContactDeveloper />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
