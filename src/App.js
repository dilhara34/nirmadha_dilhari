import React, { useState } from 'react';
import { personalInfo, projects } from './data';
import './App.css'; // අලුත් CSS ගොනුව සම්බන්ධ කර ඇත

function App() {
  const [filter, setFilter] = useState('All');

  // Filter logic: All, Web App හෝ Mobile App අනුව වෙන් කර පෙන්වීම
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container">
      {/* HEADER SECTION */}
      <header>
        <h1>{personalInfo.name}</h1>
        <p className="title">{personalInfo.title}</p>
        <p className="about">{personalInfo.about}</p>
        
        <div className="links-container">
          
          <a href={personalInfo.vercelStore} target="_blank" rel="noreferrer" className="btn btn-accent">
            🧶 Visit Niruwool Live Store
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{backgroundColor: '#475569'}}>
            ✉️ Contact Me
          </a>
        </div>
      </header>

      {/* FILTER TABS */}
      <div className="filter-tabs">
        <button className={`tab ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>
          All Projects ({projects.length})
        </button>
        <button className={`tab ${filter === 'Web App' ? 'active' : ''}`} onClick={() => setFilter('Web App')}>
          🌐 Web Applications
        </button>
        <button className={`tab ${filter === 'Mobile App' ? 'active' : ''}`} onClick={() => setFilter('Mobile App')}>
          📱 Mobile Applications
        </button>
      </div>

      {/* PROJECTS GRID SECTION */}
      <main className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="card" key={project.id}>
            <div>
              {/* Dynamic Badges */}
              <span className={`badge ${project.category === 'Web App' ? 'badge-web' : 'badge-mobile'}`}>
                {project.category}
              </span>
              
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Tech Tags */}
              <div className="tech-tags">
                {project.tech.map((t, index) => (
                  <span className="tag" key={index}>{t}</span>
                ))}
              </div>
            </div>

            {/* Core Features List */}
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 {personalInfo.name}. Built with React.js & Hosted on Vercel.</p>
      </footer>
    </div>
  );
}

export default App;
