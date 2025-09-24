import './App.css'
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aos from 'aos';
import  "aos/dist/aos.css";

function App() {

  return (
    <>
    <Router>
        <Navbar /> 
        <Home/>
        <Services />  
        <Blog />
        <About />
        <Contact/>
        <Footer/>
    </Router>

    </>
  );
}

export default App
