import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', progress: 99 },
    { name: 'CSS3', progress: 96 },
    { name: 'JavaScript', progress: 95 },
    { name: 'React', progress: 88 },
    { name: 'Vue.js', progress: 60 },
    { name: 'TypeScript', progress: 80 }
  ];

  const backendSkills = [
    { name: 'Node.js', progress: 85 },
    { name: 'Express', progress: 87 },
    { name: 'Python', progress: 50 },
    { name: 'Django', progress: 10 },
    { name: 'MongoDB', progress: 3 },
    { name: 'SQL', progress: 20 }
  ];

  const otherSkills = [
    { name: 'Git/GitHub', progress: 90 },
    { name: 'Docker', progress: 0 },
    { name: 'AWS', progress: 0 },
    { name: 'UI/UX Design', progress: 82 },
    { name: 'RESTful APIs', progress: 40 },
    { name: 'GraphQL', progress: 35 }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-intro">
          <p>I specialize in full-stack development with a particular focus on modern JavaScript frameworks and responsive design. Below are my core technical skills and proficiency levels.</p>
        </div>

        <div className="skills-categories">
          <div className="skills-category">
            <div className="category-header">
              <i className="ri-layout-masonry-line"></i>
              <h3>Frontend Development</h3>
            </div>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.progress}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div 
                      className="skill-progress-fill" 
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <i className="ri-server-line"></i>
              <h3>Backend Development</h3>
            </div>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.progress}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div 
                      className="skill-progress-fill" 
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <i className="ri-tools-line"></i>
              <h3>Other Skills</h3>
            </div>
            <div className="skills-list">
              {otherSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.progress}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div 
                      className="skill-progress-fill" 
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="orbs">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
      </div>
    </section>
  );
};

export default Skills; 