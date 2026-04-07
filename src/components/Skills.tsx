import React from 'react';

const Skills = () => {
  const skillsList = [
    { name: 'Next.js', icon: '⚛️' },
    { name: 'Redux', icon: '🔄' },
    { name: 'JavaScript (ES6+)', icon: 'JS' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Express Js', icon: '🚂' },
    { name: 'Mongoose', icon: '🍃' },
    { name: 'MongoDB', icon: '📊' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Framer Motion', icon: '✨' },
    { name: 'react-moralis', icon: '🔐' },
    { name: 'Elementor', icon: '🏗️' },
    { name: 'Webflow', icon: '🌊' },
    { name: 'Figma', icon: '🎨' },
    { name: 'UI/UX', icon: '💎' },
    { name: 'Docker', icon: '🐳' },
  ];

  return (
    <section id="skills" className="section" style={styles.section}>
      <h2 className="section-title" style={{ justifyContent: 'center' }}>
        My Skills
      </h2>
      
      <div style={styles.grid} className="skills-grid">
        {skillsList.map((skill, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.icon}>{skill.icon}</div>
            <div style={styles.name}>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '20px',
    marginTop: '40px',
    maxWidth: '1200px',
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    borderRadius: '8px',
    padding: '15px 10px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    textAlign: 'center' as const,
  },
  cardHighlight: {
    backgroundColor: '#ffb74d', // From the image, Ubuntu has an orange card background
    color: '#000',
  },
  icon: {
    fontSize: '32px',
  },
  name: {
    fontSize: '14px',
    fontWeight: 500,
  }
};

export default Skills;
