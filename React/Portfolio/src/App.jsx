import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Nav from "./Components/Navbar/Nav";
import Hero from "./Components/Herosection/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Project/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const [enterContent, setEnterContent] = useState(true);
  const [videoPlay, setVideoPlay] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // This all the for the video 2 which in the click on check profile
  // Play the video when `videoPlay` is true and the ref is ready
  useEffect(() => {
    if (videoPlay && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoPlay]);

  const handleVideoPlay = () => {
    setEnterContent(false);     // Hide enter screen
    setVideoPlay(true);         // Show and play the second video
  };

  const handleVideoEnded = () => {
    setVideoPlay(false);        // Hide video
    setShowContent(true);       // Show portfolio content
  };

  // This is for the home page video .video1
  const loopStart = 5;
  const loopEnd = 6;
  const videoRef2 = useRef(null);

  useEffect(() => {
    const video = videoRef2.current;

    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= loopEnd) {
        video.currentTime = loopStart;
        video.play();  // resume from loopStart
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App">
      <div className="cover"></div>
      
      {/* Loading Screen */}
      {!isLoaded && (
        <div className="loading-screen">
          <video src="/src/assets/Videos&Images/"></video>
          <div className="loader"></div>
          <p>Loading Amazing Experience...</p>
        </div>
      )}
      
      {/* Initial Screen */}
      {isLoaded && enterContent && (
        <div className="entercontainer">
          <video
            src="/src/assets/Videos&Images/3d-Videos/1992-153555258.mp4"
            autoPlay
            playsInline
            muted
            loop
            className="galaxy"
          ></video>

          <div className="enter">
            <h1>WELCOME TO MY PORTFOLIO</h1>
            <button onClick={handleVideoPlay}>Check My Portfolio</button>
          </div>
        </div>
      )}

      {/* Play Video on Click */}
      {videoPlay && (
        <div>
          <video
            ref={videoRef}
            onEnded={handleVideoEnded}
            controls={false}
            className="galaxy"
            src="/src/assets/Videos&Images/3d-Videos/52743-470449536_medium.mp4"
          ></video>
        </div>
      )}

      {/* Final Portfolio Content */}
      {showContent && (
        <div className="container">
          <video 
            autoPlay 
            playsInline 
            controlsList="nodownload nofullscreen noremoteplayback" 
            onContextMenu={(e) => e.preventDefault()} 
            muted 
            loop
            ref={videoRef2} 
            src="/src/assets/Videos&Images/portfolio-resources/glob.mp4" 
            className="video1">
          </video>
          
          <Nav />
          
          <main>
            <section id="home">
              <Hero />
            </section>
            
            <div className="parallax-video-container">
              <video
                autoPlay
                playsInline
                muted
                loop
                src="/src/assets/Videos&Images/portfolio-resources/blackhole.mp4"
                className="parallax-video"
              ></video>
              <div className="parallax-content">
                <h2>Crafting Digital Experiences</h2>
                <p>Combining creativity with technical expertise to build solutions that matter</p>
              </div>
            </div>
            
            <About />
            
            <div className="tech-banner">
              <div className="tech-banner-overlay"></div>
              <div className="tech-icons">
                <i className="ri-html5-fill"></i>
                <i className="ri-css3-fill"></i>
                <i className="ri-javascript-fill"></i>
                <i className="ri-reactjs-fill"></i>
                <i className="ri-nodejs-fill"></i>
                <i className="ri-database-2-fill"></i>
                <i className="ri-git-branch-fill"></i>
                <i className="ri-terminal-box-fill"></i>
              </div>
              <h3>Building with Modern Technologies</h3>
            </div>
            
            <Skills />
            
            <div className="image-showcase">
              <img src="/src/assets/Videos&Images/portfolio-resources/digital%20brain.png" alt="Digital Brain" />
              <div className="image-showcase-content">
                <h2>Innovative Solutions</h2>
                <p>Leveraging cutting-edge technologies to create intelligent and responsive applications</p>
              </div>
            </div>
            
            <Projects />
            
            <div className="parallax-video-container reverse">
              <video
                autoPlay
                playsInline
                muted
                loop
                src="/src/assets/Videos&Images/portfolio-resources/galaxy.mp4"
                className="parallax-video"
              ></video>
              <div className="parallax-content">
                <h2>Let's Work Together</h2>
                <p>Have a project in mind? I'm always open to discussing new ideas and collaborations</p>
              </div>
            </div>
            
            <Contact />
            
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
