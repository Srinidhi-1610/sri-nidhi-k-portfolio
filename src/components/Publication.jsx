import React from 'react';

export default function Publication({ publication }) {
  return (
    <section className="block" id="publication">
      <div className="wrap">
        <p className="sec-eyebrow">Research</p>
        <h2 className="sec-title">Publication</h2>
        <div className="pub-box">
          <p className="pub-title">{publication.title}</p>
          <p className="pub-meta">{publication.meta}</p>
        </div>
      </div>
    </section>
  );
}
