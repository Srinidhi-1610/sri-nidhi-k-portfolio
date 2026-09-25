import React from 'react';

export default function Education({ education }) {
  return (
    <section className="block" id="education">
      <div className="wrap">
        <p className="sec-eyebrow">Academics</p>
        <h2 className="sec-title">Education</h2>
        {education.map((item, idx) => (
          <div key={idx} className="edu-item">
            <div className="edu-when">{item.when}</div>
            <div>
              <div className="edu-name">{item.degree}</div>
              <div className="edu-sub">{item.institution}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
