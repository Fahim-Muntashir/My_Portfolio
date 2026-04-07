"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create different movement speeds for the parallax effect
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const jobs = [
    {
      company: 'Planter.Studio',
      title: 'Founder @ Planter.Studio',
      date: 'SEP 2023 - Present',
      url: 'https://www.planter.studio',
      duties: [
        'As CEO and Founder of Planter.Studio, my role as Chief Web Developer empowers our team to drive innovation and foster growth for clients.',
        'Lead the development of digital solutions, focusing on driving innovation and growth through deep technical expertise.',
        'Spearheading the development of cutting-edge digital solutions that create lasting impact and exceptional results.',
        'Managing a talented team to deliver results that drive innovation and growth for our clients.'
      ]
    },
    {
      company: 'CeMRD',
      title: 'Lead Developer @ MERN Stack',
      date: 'OCT 2023 - Present',
      url: 'https://www.cemrd.org',
      duties: [
        'As a full-stack web developer at CeMRD, I worked on front-end development in the web3 domain, leveraging my expertise in JavaScript, React JS, Next JS, Express JS, Mongoose, Tailwind CSS, Node JS, and TypeScript.',
        'Conducted testing tasks to ensure website functionality and quality. Managed a large user base on the website',
        'Implemented website design and enhanced interactivity.',
        'Collaborated closely with the team in regular meetings and interacted with smart contracts and gained expertise in CEMRD'
      ]
    },
    {
      company: 'Freelance',
      title: 'A Creative Freelancer',
      date: 'Present',
      url: '#',
      duties: [
        'As a creative freelancer, I bring a unique blend of MERN Stack development skills to my part-time work.',
        'My efficient and adaptable approach enables me to take on competitive projects, delivering exceptional results and creating meaningful impact for clients.',
        'With my MERN Stack proficiency, I create seamless, high-functioning digital solutions that drive success for clients and projects.'
      ]
    },
    {
      company: 'Content Creation',
      title: 'Instagram & YouTube Creator',
      date: '2022 - Present',
      url: '#',
      duties: [
        'Sharing my journey around life, personal branding, websites, and online trends through Instagram and YouTube.',
        'Learning to connect with audiences, understand user behavior, and turn ideas into something meaningful.',
        'Exploring how trends impact real people and using them to grow, build, and create better opportunities.',
        'Actively learning, building, and sharing insights about vision, struggles, and real-life success.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <motion.h2
        className="section-title"
        style={{ y: titleY }}
      >
        <span className="mono">02.</span> Where I've Worked
      </motion.h2>

      <motion.div
        style={{ ...styles.container, y: contentY }}
        className="experience-container"
      >
        <div style={styles.tabList} className="experience-tabs">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={activeTab === i ? { ...styles.tabButton, ...styles.activeTab } : styles.tabButton}
              className="experience-tab-button"
            >
              {job.company}
            </button>
          ))}
          <div
            style={{
              ...styles.highlighter,
              transform: `translateY(${activeTab * 42}px)`
            }}
            className="experience-highlighter"
          />
        </div>

        <div style={styles.tabContent}>
          <h3 style={styles.jobTitle}>
            {jobs[activeTab].title} <span className="highlight">@ {jobs[activeTab].company}</span>
          </h3>
          <p style={styles.jobDate}>{jobs[activeTab].date}</p>
          <ul style={{ padding: 0 }}>
            {jobs[activeTab].duties.map((duty, i) => (
              <li key={i} style={styles.dutyItem}>
                <span style={styles.dutyMarker}>▹</span> {duty}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '30px',
    marginTop: '40px',
  },
  tabList: {
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    width: 'max-content',
    borderLeft: '2px solid var(--text-secondary)',
  },
  tabButton: {
    padding: '0 20px',
    height: '42px',
    textAlign: 'left' as const,
    fontSize: '14px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-secondary)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    position: 'relative' as const,
    zIndex: 2,
    opacity: 0.5,
  },
  activeTab: {
    color: 'var(--highlight-color)',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    opacity: 1,
    fontWeight: 600,
  },
  highlighter: {
    position: 'absolute' as const,
    top: 0,
    left: '-2px',
    width: '2px',
    height: '42px',
    backgroundColor: 'var(--highlight-color)',
    transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    zIndex: 3,
  },
  tabContent: {
    flex: 1,
    paddingTop: '10px',
  },
  jobTitle: {
    fontSize: '22px',
    fontWeight: 500,
    color: 'var(--text-primary)',
    margin: '0 0 5px 0',
  },
  jobDate: {
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    marginBottom: '20px',
  },
  dutyItem: {
    position: 'relative' as const,
    paddingLeft: '30px',
    marginBottom: '10px',
    color: 'var(--text-secondary)',
    fontSize: '16px',
    display: 'flex',
  },
  dutyMarker: {
    position: 'absolute' as const,
    left: 0,
    color: 'var(--highlight-color)',
  }
};

export default Experience;
