import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import  "aos/dist/aos.css";
import Feedback from './components/Feedback';
import  Floating  from './components/floating';



function App() {

  return (
    <>
 <div className="px-6 sm:px-6 lg:px-14">
          <Router>   
           <Home/>
        <Services />  
        <Blog />
        <About />
        <Contact/>
        <Feedback/>
        <Footer/>
        <Floating/>
    </Router>

</div>
 <div>
      <h1>My App</h1>
      {/* Show the floating message icon */}
      <Floating />
    </div>
    </>
  );
}

export default App
