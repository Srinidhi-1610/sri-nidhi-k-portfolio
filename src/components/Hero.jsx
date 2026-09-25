import React from 'react';

export default function Hero({ data }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1 className="hero-title">Hi, I'm Sri Nidhi,</h1>
          <p className="hero-role">{data.role}</p>
          <p className="hero-desc">{data.description}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#projects">View My Work</a>
            <a className="btn btn-line" href="#contact">Contact Me</a>
          </div>
        </div>
      </div>
      <svg className="hero-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0A0A0B" d="M0,40 C280,90 480,0 720,20 C960,40 1160,90 1440,30 L1440,90 L0,90 Z"/>
      </svg>
    </section>
  );
}
