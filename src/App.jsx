import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publication from './components/Publication';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      return saved === 'light' || saved === 'dark' ? saved : 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="portfolio-app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.personal} />
      <Skills skillCategories={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Publication publication={portfolioData.publication} />
      <Experience experience={portfolioData.experience} />
      <Education education={portfolioData.education} />
      <Achievements achievements={portfolioData.achievements} />
      <Contact personal={portfolioData.personal} />
      <Footer personal={portfolioData.personal} />
    </div>
  );
}
