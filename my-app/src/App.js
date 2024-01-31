import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import React, { useState } from 'react';
import Login from './component/Login';
import Register from './component/Register';
import Signup from './component/Signup';
import Services from './component/Services';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Thank from './component/Thank';
import Contact from './component/Contact';
import Plogin from './component/Plogin';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/tas" element={<Home/>}/>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="contact" element={<Contact />} />  */}
          <Route path="/register" element={<Register/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/Thankyou" element={<Thank/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/prologin" element={<Plogin/>} />
      </Routes>
    </BrowserRouter>
    </>



  );
}
export default App;






