import React, { useState, useEffect } from 'react'
import './Nav.css'
import 'remixicon/fonts/remixicon.css'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'

const Nav = () => {
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".logo",{
      y: -150,
      opacity: 0,
      duration: 1,
    }).from(".nav-links",{
      x: -1000,
      opacity: 0,
      duration: 1,
    }).from(".social-links li",{
      scale: 0,
      duration: 1,
      stagger: 0.5,
    })
  },[])

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <div className="logo">
          <h1>Chandermani<span>.dev</span></h1>
        </div>
        
        <div className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`nav-container ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <ul className='social-links'>
            <li><a href="https://github.com/Chandermani-web" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill"></i></a></li>
            <li><a href="https://www.linkedin.com/in/chandermani-mishra-a25473304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill"></i></a></li>
          </ul>
        </div>
      </nav>
    </header>      
  )
}

export default Nav
