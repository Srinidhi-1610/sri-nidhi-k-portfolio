import React from 'react';

export default function About({ data }) {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <p className="sec-eyebrow">Who I am</p>
        <h2 className="sec-title">About Me</h2>
        <p className="about-text">
          A motivated <strong>Computer Science undergraduate</strong> with hands-on experience in Python programming and full-stack software development. Proficient in web technologies such as <strong>HTML, CSS, and JavaScript</strong>, along with database management using <strong>SQL and MongoDB</strong>. I've completed internships and academic projects that show strong problem-solving ability and teamwork — and I'm passionate about designing efficient, scalable, user-friendly applications.
        </p>
        <div className="chip-row">
          {data.chips.map((chip, index) => (
            <span key={index} className="chip">{chip}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
