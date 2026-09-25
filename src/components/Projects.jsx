import React from 'react';

export default function Projects({ projects }) {
  return (
    <section className="block" id="projects">
      <div className="wrap">
        <p className="sec-eyebrow">Recent work</p>
        <h2 className="sec-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <p className="project-when">{project.when}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">{tag}</span>
                ))}
              </div>
              {project.githubLink && (
                <a className="project-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
