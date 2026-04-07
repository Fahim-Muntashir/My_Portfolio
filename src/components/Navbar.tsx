"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <a href="/" style={styles.logoLink}>Fahim</a>
      </div>
      <div 
        style={styles.hamburger} 
        onClick={toggleMenu}
        className="hamburger-icon"
      >
        {isOpen ? <X size={32} color="var(--highlight-color)" /> : <Menu size={32} color="var(--highlight-color)" />}
      </div>

      <nav 
        style={styles.nav} 
        className={isOpen ? "nav-menu open" : "nav-menu"}
      >
        <ul style={styles.navLinks}>
          <li><a href="#about" onClick={closeMenu}><span className="highlight mono" style={styles.num}>01.</span> About</a></li>
          <li><a href="#experience" onClick={closeMenu}><span className="highlight mono" style={styles.num}>02.</span> Experience</a></li>
          <li><a href="#work" onClick={closeMenu}><span className="highlight mono" style={styles.num}>03.</span> Work</a></li>
          <li><a href="#contact" onClick={closeMenu}><span className="highlight mono" style={styles.num}>04.</span> Contact</a></li>
        </ul>
        <a href="/resume.pdf" className="btn-primary" style={{ padding: '0.75rem 1rem' }} onClick={closeMenu}>Resume</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
    height: '100px',
    backgroundColor: 'var(--bg-color)',
    position: 'fixed' as const,
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#ccd6f6',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
  },
  num: {
    marginRight: '5px',
  },
  hamburger: {
    display: 'none',
    cursor: 'pointer',
    zIndex: 110,
  } as React.CSSProperties
};

export default Navbar;
