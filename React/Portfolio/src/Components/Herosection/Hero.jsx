import React, { useRef, useState, useEffect, useReducer } from 'react';
import './Hero.css';
import 'remixicon/fonts/remixicon.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".hero-status",{
      x: -100,
      opacity: 0,
      duration: 0.5,
    }).from(".hero-title",{
      x: -100,
      opacity: 0,
      duration: 0.5,
    }).from(".hero-subtitle",{
      x: -100,
      opacity: 0,
      duration: 0.5,
    }).from(".hero-description",{
      x: -100,
      opacity: 0,
      duration: 0.5,
    }).from(".hero-buttons",{
      x: -100,
      opacity: 0,
      duration: 0.5,
    });
  },[])
  const loopStart = 2;
  const loopStart2 = 5;
  const loopEnd = 4;
  const loopEnd2   = 6;
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  useEffect(() => {
    const video = videoRef3.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= loopEnd) {
        video.currentTime = loopStart;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  useEffect(()=>{
    const video = videoRef4.current;
    if(!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= loopEnd2) {
        video.currentTime = loopStart2;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  },[])

  return (
    <div className='hero-container'>
      <video autoPlay playsInline muted ref={videoRef4}  src="/src/assets/Videos&Images/3d-Videos/170655-843752693.mp4" className='hero-video1'></video>
      <div className="hero-content">
        <div className="hero-status">
          <span className="status-indicator"></span>
          <h2>Available for work</h2>
        </div>
        <h1 className="hero-title">Hi, I'm a <span className="highlight">Full-Stack Developer</span></h1>
        <h1 className="hero-subtitle">I craft exceptional digital <br />experiences</h1>
        <p className="hero-description">
          A passionate full-stack developer with expertise in crafting beautiful, functional, and responsive web applications with modern technologies.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary"><li><a href="#projects">View my Work <i className='ri-arrow-right-fill'></i></a></li></button>
          <button className="btn-secondary"><a href="#contact">Contact me</a></button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="video-container">
          <video 
            autoPlay 
            playsInline 
            muted 
            ref={videoRef3} 
            src="/src/assets/Videos&Images/3d-Videos/130273-746686709.mp4" 
            className="hero-video">
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
