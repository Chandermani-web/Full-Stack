import React, { useState } from 'react';
import './Projects.css';
import 'remixicon/fonts/remixicon.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/src/assets/Videos&Images/portfolio-resources/grid2.png',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include shopping cart, user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'AI Image Generator',
      category: 'ai',
      image: '/src/assets/Videos&Images/portfolio-resources/digital%20brain.png',
      description: 'An AI-powered image generation application that creates unique images based on text prompts using OpenAI API.',
      technologies: ['React', 'Node.js', 'OpenAI API', 'TailwindCSS', 'Firebase'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'WealthWisdom',
      category: 'web',
      image: '/src/assets/Videos&Images/portfolio-resources/image.png',
      description: 'WealthWisdom is an intelligent, AI-powered financial mentoring platform designed to guide users in making smarter financial decisions. The application acts as a virtual advisor, offering real-time personalized insights on budgeting, savings, investments, and financial planning. It combines modern web technologies with advanced AI and data analytics to create a seamless user experience tailored to individual financial goals.',
      technologies: ['React', 'Firebase', 'Redux', "tailwindcss"],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'web',
      image: '/src/assets/Videos&Images/portfolio-resources/astronaut.png',
      description: 'A personal portfolio website with modern UI/UX design principles, animations, and responsive layout.',
      technologies: ['React', 'CSS3', 'GSAP', 'Vite'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      category: 'mobile',
      image: '/src/assets/Videos&Images/portfolio-resources/grid2.png',
      description: 'A real-time weather application that provides accurate forecasts, radar maps, and severe weather alerts.',
      technologies: ['React Native', 'Weather API', 'Geolocation', 'Maps Integration'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Sentiment Analysis Tool',
      category: 'ai',
      image: '/src/assets/Videos&Images/portfolio-resources/digital%20brain.png',
      description: 'A natural language processing tool that analyzes sentiment in text data, useful for social media monitoring, product reviews analysis, and market research.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'NLP'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & ML' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-intro">
          <p>Here are some of my recent projects that showcase my skills and experience in various domains of software development.</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button 
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="ri-eye-line"></i>
                      <span>Live Demo</span>
                    </a>
                    <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="ri-github-line"></i>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 