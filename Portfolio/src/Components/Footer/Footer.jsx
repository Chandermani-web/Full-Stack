import React from 'react';
import './Footer.css';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Chandermani<span>.dev</span></h2>
            <p>Creating digital experiences that make a difference.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to my newsletter for the latest updates and insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">
                <i className="ri-send-plane-line"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Portfolio.dev. All rights reserved.</p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="ri-github-fill"></i>
            </a>
            <a href="#" className="social-link">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#" className="social-link">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="social-link">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
          
          <div className="back-to-top">
            <a href="#home">
              Back to Top <i className="ri-arrow-up-line"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 