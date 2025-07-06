import React from 'react'
import './About.css'
import 'remixicon/fonts/remixicon.css'
import { gsap } from "gsap";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src="/src/assets/Videos&Images/portfolio-resources/astronaut.png" alt="Developer" />
            </div>
          </div>
          
          <div className="about-text">
            <h3>Full-Stack Developer & UI/UX Enthusiast</h3>
            <p> I am a passionate full-stack developer with a strong focus on creating clean, efficient, and user-friendly applications. With expertise in modern web technologies, I strive to build digital experiences that are both beautiful and functional. </p> 
            <p> My journey in web development began 2 years ago, and since then, I've worked on a diverse range of projects—from e-commerce platforms to enterprise-level applications. WealthWisdom is one of the projects that reflects not only my technical skills but also my intent to build meaningful solutions that solve real problems. </p>
            <p> I believe in writing optimized, scalable code, and building systems that are both easy to use and maintain. For me, every project is an opportunity to learn something new and push my skills to the next level. </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <i className="ri-code-s-slash-line"></i>
                <h4>Clean Code</h4>
                <p>I write clean, maintainable code following best practices and industry standards.</p>
              </div>
              
              <div className="highlight-item">
                <i className="ri-responsive-line"></i>
                <h4>Responsive Design</h4>
                <p>Creating interfaces that work flawlessly across all devices and screen sizes.</p>
              </div>
              
              <div className="highlight-item">
                <i className="ri-speed-line"></i>
                <h4>Performance</h4>
                <p>Optimizing applications for speed and efficiency to provide the best user experience.</p>
              </div>
              
              <div className="highlight-item">
                <i className="ri-user-heart-line"></i>
                <h4>User-Centric</h4>
                <p>Developing with the end-user in mind to create intuitive and accessible interfaces.</p>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#contact" className="btn-primary">Get In Touch</a>
              <a href="#" className="btn-secondary">Download Resume <i className="ri-download-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 