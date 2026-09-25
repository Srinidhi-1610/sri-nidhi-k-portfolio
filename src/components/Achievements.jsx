import React from 'react';

export default function Achievements({ achievements }) {
  return (
    <section className="block" id="achievements">
      <div className="wrap">
        <p className="sec-eyebrow">Beyond academics</p>
        <h2 className="sec-title">Achievements &amp; Activities</h2>
        <div className="achieve-grid">
          {achievements.map((group, idx) => (
            <div key={idx} className="achieve-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
