"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xwvwynev', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section" style={styles.section}>
      <h2 className="section-title">
        <span className="mono">04.</span> What's Next?
      </h2>

      <div style={styles.container} className="contact-grid">
        <div style={styles.contactInfo}>
          <h1 style={styles.heading}>Get in touch</h1>
          <p style={styles.desc}>
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={styles.infoCards}>
            <div style={styles.infoCard}>
              <Mail style={styles.icon} />
              <div>
                <p style={styles.infoTitle}>Email</p>
                <a href="mailto:fahimmuntashir07@gmail.com" style={styles.infoText}>fahimmuntashir07@gmail.com</a>
              </div>
            </div>

            <div style={styles.infoCard}>
              <Phone style={styles.icon} />
              <div>
                <p style={styles.infoTitle}>Call</p>
                <p style={styles.infoText}>Available on request</p>
              </div>
            </div>

            <div style={styles.infoCard}>
              <MapPin style={styles.icon} />
              <div>
                <p style={styles.infoTitle}>Location</p>
                <p style={styles.infoText}>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.contactForm}>
          {submitted ? (
            <div style={{ ...styles.infoCard, border: '1px solid var(--highlight-color)', padding: '40px', textAlign: 'center', display: 'block' }}>
              <p style={{ color: 'var(--highlight-color)', fontSize: '18px', fontWeight: 600, margin: '0 0 10px 0' }}>Thanks for your message!</p>
              <p style={styles.infoText}>I'll get back to you as soon as possible.</p>
              <button onClick={() => setSubmitted(false)} style={{ ...styles.submitBtn, width: 'auto', padding: '10px 20px', marginTop: '20px' }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <input type="text" name="name" placeholder="Name" style={styles.input} required />
              <input type="email" name="email" placeholder="Email" style={styles.input} required />
              <textarea name="message" placeholder="Message" rows={5} style={{ ...styles.input, resize: 'vertical' }} required />

              {error && (
                <p style={{ color: '#ff4d4d', fontSize: '14px', margin: '0' }}>
                  Oops! Something went wrong. Please try again.
                </p>
              )}

              <button type="submit" style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }} disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    paddingBottom: '150px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    marginTop: '50px',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  heading: {
    fontSize: '40px',
    fontWeight: 600,
    marginBottom: '20px',
  },
  desc: {
    color: 'var(--text-secondary)',
    marginBottom: '40px',
    lineHeight: 1.6,
  },
  infoCards: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  infoCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: 'var(--bg-card)',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  icon: {
    color: 'var(--text-primary)',
  },
  infoTitle: {
    margin: '0 0 5px 0',
    fontSize: '14px',
    fontWeight: 500,
  },
  infoText: {
    margin: 0,
    color: 'var(--text-secondary)',
    fontSize: '14px',
  },
  contactForm: {
    backgroundColor: 'transparent',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  input: {
    width: '100%',
    padding: '15px 20px',
    backgroundColor: 'var(--bg-card)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '16px',
    fontFamily: 'inherit',
  },
  submitBtn: {
    width: '100%',
    padding: '18px',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'opacity 0.2s',
  }
};

export default Contact;
