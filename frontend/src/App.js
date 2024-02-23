import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Appointments from './components/Appointments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/appointments" element={<Appointments />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
