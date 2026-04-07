import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={styles.section} className="hero-section">
      <div style={styles.content}>
        <p className="highlight mono" style={styles.intro}>Hi, my name is</p>
        <h1 style={styles.h1}>Fahim Muntashir.</h1>
        <h2 style={{ ...styles.h1, color: 'var(--text-secondary)' }}>I build things for the web.</h2>
        <p style={styles.desc}>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.
        </p>
        <div style={{ marginTop: '50px' }}>
          <a href="#contact" className="btn-primary">GET IN TOUCH</a>
        </div>
        
        <div style={styles.stats} className="hero-stats">
          <div style={styles.statItem}>
            <span style={styles.statNum}>12</span>
            <span style={styles.statLabel}>Years<br/>Experience</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNum}>165</span>
            <span style={styles.statLabel}>Projects completed<br/>on 18 countries</span>
          </div>
        </div>
      </div>
      <div style={styles.imageContainer} className="hero-image">
        {/* Placeholder for the hoodie avatar image */}
        <div style={styles.avatarPlaceholder}>
          <div style={styles.circleAngular}>A</div>
          <div style={styles.circleJs}>JS</div>
          <Image 
            src="/portfolioimage.png" 
            alt="Fahim Muntashir Portfolio Image" 
            width={300} 
            height={400} 
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 150px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    flex: 1,
  },
  intro: {
    margin: '0 0 20px 0',
    fontSize: '16px',
    fontWeight: 'normal',
  },
  h1: {
    margin: 0,
    fontSize: 'clamp(40px, 8vw, 70px)',
    fontWeight: 600,
    lineHeight: 1.1,
  },
  desc: {
    marginTop: '20px',
    color: 'var(--text-secondary)',
    fontSize: '20px',
    maxWidth: '500px',
    lineHeight: 1.5,
  },
  stats: {
    display: 'flex',
    gap: '40px',
    marginTop: '60px',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  statNum: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'var(--text-primary)',
  },
  statLabel: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase' as const,
    lineHeight: 1.2,
  },
  imageContainer: {
    flex: 0.8,
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative' as const,
  },
  avatarPlaceholder: {
    width: '300px',
    height: '400px',
    backgroundColor: 'var(--bg-card)',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '100px',
    position: 'relative' as const,
    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  circleAngular: {
    position: 'absolute' as const,
    left: '-20px',
    bottom: '80px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#dd0031',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    color: 'white',
    fontWeight: 'bold',
  },
  circleJs: {
    position: 'absolute' as const,
    right: '-30px',
    bottom: '40px',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#3e863d',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '28px',
    color: 'white',
    fontWeight: 'bold',
  }
};

export default Hero;
