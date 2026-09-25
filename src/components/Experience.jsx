import React from 'react';

export default function Experience({ experience }) {
  return (
    <section className="wavy-banner">
      <svg className="wavy-top" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-58px', left: 0 }}>
        <path fill="#8B5CF6" d="M0,30 C300,-10 500,60 800,25 C1050,-5 1250,40 1440,10 L1440,60 L0,60 Z"/>
      </svg>
      <div className="wrap">
        <h2>Work Experience</h2>
        <p>Practical internships where I applied engineering principles and built real-world assets.</p>
        <div className="exp-list">
          {experience.map((item, idx) => (
            <div key={idx} className="exp-item">
              <div>
                <div className="exp-role">{item.role}</div>
                <div className="exp-org">{item.org}</div>
              </div>
              <div className="exp-when">{item.when}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
