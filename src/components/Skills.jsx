import React from 'react';

export default function Skills({ skillCategories }) {
  return (
    <section className="block" id="skills">
      <div className="wrap">
        <p className="sec-eyebrow">What I work with</p>
        <h2 className="sec-title">Skills</h2>
        <div className="skill-cols">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <h3>{cat.category}</h3>
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bar-row">
                  <div className="bar-label">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${item.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
