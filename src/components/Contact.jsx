import React from 'react';

export default function Contact({ personal }) {
  return (
    <section id="contact">
      <div className="wrap">
        <h2 className="contact-title">CONTACT</h2>
        <div className="contact-card">
          <div className="contact-links">
            <a className="contact-item" href={`mailto:${personal.email}`}>
              <div className="label">Email</div>
              <div className="value">{personal.email}</div>
            </a>
            <a className="contact-item" href={`tel:${personal.phone.replace(/\s+/g, '')}`}>
              <div className="label">Phone</div>
              <div className="value">{personal.phone}</div>
            </a>
            <a className="contact-item" href={personal.github} target="_blank" rel="noopener noreferrer">
              <div className="label">GitHub</div>
              <div className="value">{personal.githubDisplay}</div>
            </a>
          </div>
          <div className="contact-links">
            <a className="contact-item" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="label">LinkedIn</div>
              <div className="value">{personal.linkedinDisplay}</div>
            </a>
            <a className="contact-item" href={personal.leetcode} target="_blank" rel="noopener noreferrer">
              <div className="label">LeetCode</div>
              <div className="value">{personal.leetcodeDisplay}</div>
            </a>
            <div className="contact-item contact-note">
              <p>Based in {personal.location}. Open to full-stack developer roles and internships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
