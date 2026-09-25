import React from 'react';

export default function Header({ theme, toggleTheme }) {
  return (
    <header>
      <nav className="wrap">
        <div className="logo">Sri Nidhi <span>K.</span></div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a className="hire-btn" href="#contact">Hire Me</a>
          <button 
            className="theme-toggle" 
            id="themeToggle" 
            type="button" 
            aria-label="Toggle light and dark mode"
            onClick={toggleTheme}
          >
            <span className="icon-sun">☀️</span>
            <span className="icon-moon">🌙</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
