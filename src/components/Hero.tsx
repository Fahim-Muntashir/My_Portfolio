'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

const Counter = ({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return <motion.span>{displayValue}{suffix}</motion.span>;
};

const Hero = () => {
  return (
    <section id="hero" style={styles.section} className="hero-section">
      <div style={styles.content}>
        <motion.p
          className="highlight mono"
          style={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          style={styles.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Fahim Muntashir.
        </motion.h1>
        <motion.h2
          style={{ ...styles.h1, color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          style={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.
        </motion.p>
        <motion.div
          style={{ marginTop: '50px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact" className="btn-primary">GET IN TOUCH</a>
        </motion.div>

        <div style={styles.stats} className="hero-stats">
          <motion.div
            style={styles.statItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span style={styles.statNum}>
              <Counter from={0} to={5} suffix="+" />
            </span>
            <span style={styles.statLabel}>Years<br />Experience</span>
          </motion.div>
          <motion.div
            style={styles.statItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span style={styles.statNum}>
              <Counter from={0} to={100} suffix="+" />
            </span>
            <span style={styles.statLabel}>Projects <br />completed</span>
          </motion.div>
        </div>
      </div>
      <motion.div
        style={styles.imageContainer}
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div style={styles.avatarPlaceholder}>
          <motion.div
            style={styles.circleAngular}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            A
          </motion.div>
          <motion.div
            style={styles.circleJs}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            JS
          </motion.div>
          <Image
            src="/portfolioimage.png"
            alt="Fahim Muntashir Portfolio Image"
            width={300}
            height={400}
            style={styles.image}
          />
        </div>
      </motion.div>
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
