import React from 'react';

export default function Footer({ personal }) {
  return (
    <footer>
      <div className="wrap">{personal.name} · {personal.location}</div>
    </footer>
  );
}
