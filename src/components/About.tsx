'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript',
    'React', 'Next.js',
    'Node.js', 'Python'
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">
        <span className="mono">01.</span> About Me
      </h2>

      <div className="about-grid">
        {/* Image on LEFT */}
        <motion.div
          style={styles.videoWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={styles.glowEffect}></div>
          <div style={styles.videoOutline}></div>
          <motion.div
            style={styles.iframeContainer}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zvY8pTWAXfg?si=AQX1qI97RCCCFZuG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: '4px', zIndex: 2, position: 'relative' }}
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Text on RIGHT */}
        <div style={styles.textContainer}>
          <p style={styles.p}>
            Hello! I'm <strong>Fahim Muntashir</strong>, a software engineer dedicated to building impactful digital experiences. My journey began in 2020 through <strong>Jhankar Mahbub's</strong> classes, eventually leading me to specialize in the MERN stack at <strong>Programming Hero</strong>.
          </p>
          <p style={styles.p}>
            What started as a solo freelance venture quickly blossomed into a full-scale agency, where I've had the privilege of collaborating with organizations like <strong>CEMRD</strong>.
          </p>
          <p style={styles.p}>
            Through perseverance and passion, I've transformed sleepless nights into flourishing projects, always striving to create code that solves real-world problems.
          </p>



        </div>
      </div>
    </section>
  );
};

const styles = {
  // grid moved to css

  textContainer: {
    color: 'var(--text-secondary)',
  } as React.CSSProperties,

  p: {
    marginBottom: '15px',
    fontSize: '18px',
  } as React.CSSProperties,

  skillsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
    gap: '10px',
    padding: 0,
    marginTop: '20px',
    listStyle: 'none',
  } as React.CSSProperties,

  skillItem: {
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    color: 'var(--text-secondary)',
  } as React.CSSProperties,

  videoWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '650px',
    margin: '0 auto',
  } as React.CSSProperties,

  iframeContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    zIndex: 2,
    backgroundColor: 'var(--bg-color)',
    borderRadius: '4px',
    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
  } as React.CSSProperties,

  videoOutline: {
    border: '2px solid var(--highlight-color)',
    width: '100%',
    aspectRatio: '16 / 9',
    position: 'absolute',
    top: '20px',
    left: '20px',
    zIndex: 1,
    borderRadius: '4px',
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  } as React.CSSProperties,

  glowEffect: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '110%',
    height: '110%',
    background: 'radial-gradient(circle, rgba(100, 255, 218, 0.15) 0%, rgba(100, 255, 218, 0) 70%)',
    zIndex: 0,
    filter: 'blur(20px)',
    pointerEvents: 'none',
  } as React.CSSProperties,
};
export default About;