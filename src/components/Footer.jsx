import React, {useEffect} from 'react'
import { Footer } from 'flowbite-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const MyFooter = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
   <Footer container>
  <div className="w-full " data-aos="fade-up">
    <Footer.Divider />
    <div className="w-full sm:items-center text-gray-800">
      <p className="mb-1 text-center">
        © Copyright 2025 Rolling Hills Towing - All rights reserved
      </p>
    </div>
  </div>
</Footer>
  )
}

export default MyFooter