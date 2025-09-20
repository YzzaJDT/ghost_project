import React, {useEffect} from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsMicrosoftTeams, BsTwitter } from 'react-icons/bs';
import logo from '../assets/icons/logo.png'
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
      <div className="w-full" data-aos="fade-up">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8' >
            <a href="" className='items-center'>
                          <span class="text-l font-bold text-blue-900">MUSTARD .SEED </span>
                          <span class="text-small font-semibold text-blue-950">SYSTEMS CORPORATION</span>
            </a>  
          </div>
      
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Contact Info" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Address:   <span>Ecoland Drive, Matina, Philippines, 8000</span></Footer.Link>
              
                <Footer.Link href="#">Phone:<span> +63(82)297 6164</span> </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.facebook.com/mseedsysDavao">Facebook</Footer.Link>
                <Footer.Link href="https://twitter.com/mseedsys">Twitter</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/company/mustardseed">Linkin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
        <p className='mb-1'>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          <div className="mt-1 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/mseedsysDavao" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsMicrosoftTeams} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter