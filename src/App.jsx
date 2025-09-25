import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import  "aos/dist/aos.css";

function App() {

  return (
    <>
  <div className='px-10 sm:px-5 lg:px-12'>
          <Router>   
           <Home/>
        <Services />  
        <Blog />
        <About />
        <Contact/>
        <Footer/>
    </Router>
</div>
    </>
  );
}

export default App
