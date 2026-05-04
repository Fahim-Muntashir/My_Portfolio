import Image from 'next/image';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'OnlineHat',
      type: 'Featured Project',
      description: 'A Fiverr-style freelancing marketplace tailored for the Bangladeshi market. Supports distinct dashboards for Admins, Sellers, and Buyers. Features multi-tier service packages, secure SSLCommerz payments, and dynamic order tracking.',
      tech: ['Next.js 14', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
      frontend: 'https://github.com/Fahim-Muntashir/OnlineHat_Client.git',
      backend: 'https://github.com/Fahim-Muntashir/OnlineHat_Server',
      live: 'https://online-hat.vercel.app/',
      image: '/freelancingiamge.png',
      imageAlign: 'left',
    },
    {
      title: 'MediStore',
      type: 'Featured Project',
      description: 'A dedicated, online marketplace for buying and selling medicines. It provides role-based dashboards for customers, sellers, and admins with AI-powered features and a modern UI.',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'Node.js'],

      frontendRepo: 'https://github.com/Fahim-Muntashir/MediStore_Client',
      backendRepo: 'https://github.com/Fahim-Muntashir/MediStore',

      frontendLive: 'https://medistore-client-flax.vercel.app/',
      backendLive: 'https://medistore-eight.vercel.app',

      demoVideo: 'https://youtu.be/WmwqLMje7aM',
      image: '/medistore.png',
      imageAlign: 'right',
      date: '2026-05-04'
    },
    {
      title: 'Car Rent',
      type: 'Featured Project',
      description: 'A car rental application that allows users to find and book cars for rent. Admins can manage the car inventory, approve rentals, and track users. Integrates payment gateways and robust authentication.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
      frontend: '#',
      backend: '#',
      live: '#',
      imageAlign: 'left',
    }
  ];

  return (
    <section id="work" className="section">
      <h2 className="section-title">
        <span className="mono">03.</span> Some Things I've Built
      </h2>

      <div style={styles.projectsList}>
        {projects.map((project, i) => (
          <div key={i} style={styles.projectNode} className="project-node">
            {project.imageAlign === 'left' && (
              <div style={{ ...styles.projectImage, ...styles.imageLeft }} className="project-image-container">
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={styles.imageLink}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="project-img-content"
                    />
                  ) : (
                    <div style={styles.imagePlaceholder}>Web App Preview</div>
                  )}
                  <div className="image-tint"></div>
                </a>
              </div>
            )}

            <div style={{
              ...styles.projectContent,
              ...(project.imageAlign === 'left' ? styles.contentRight : styles.contentLeft)
            }} className="project-content">
              <p style={styles.projectType}>{project.type}</p>
              <h3 style={styles.projectTitle}>
                <a href={project.live} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>

              <div style={{
                ...styles.projectDescription,
                ...(project.imageAlign === 'right' ? styles.descLeft : styles.descRight)
              }}>
                <p>{project.description}</p>
              </div>

              <ul style={{
                ...styles.techList,
                ...(project.imageAlign === 'left' ? styles.techListRight : styles.techListLeft)
              }} className="tech-list-responsive">
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>

              <div style={{
                ...styles.links,
                ...(project.imageAlign === 'left' ? styles.linksRight : styles.linksLeft)
              }} className="links-responsive">
                <a href={project.frontend} target="_blank" rel="noopener noreferrer" style={styles.linkItem} title="Frontend Code">
                  <Code size={20} /> <span style={styles.linkText}>Frontend</span>
                </a>
                <a href={project.backend} target="_blank" rel="noopener noreferrer" style={styles.linkItem} title="Backend Code">
                  <Code size={20} /> <span style={styles.linkText}>Backend</span>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={styles.linkItem} title="Live Site">
                  <ExternalLink size={20} /> <span style={styles.linkText}>Live</span>
                </a>
              </div>
            </div>

            {project.imageAlign === 'right' && (
              <div style={{ ...styles.projectImage, ...styles.imageRight }} className="project-image-container">
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={styles.imageLink}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="project-img-content"
                    />
                  ) : (
                    <div style={styles.imagePlaceholder}>Web App Preview</div>
                  )}
                  <div className="image-tint"></div>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  projectsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '100px',
    marginTop: '50px',
  },
  projectNode: {
    position: 'relative' as const,
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    alignItems: 'center',
  },
  projectImage: {
    position: 'relative' as const,
    zIndex: 1,
    height: '350px',
    backgroundColor: 'var(--text-secondary)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  imageLeft: {
    gridColumn: '1 / 8',
    gridRow: '1 / -1',
  },
  imageRight: {
    gridColumn: '6 / -1',
    gridRow: '1 / -1',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--bg-card)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    opacity: 0.5,
  },
  projectContent: {
    position: 'relative' as const,
    zIndex: 2,
    gridRow: '1 / -1',
  },
  contentRight: {
    gridColumn: '7 / -1',
    textAlign: 'right' as const,
  },
  contentLeft: {
    gridColumn: '1 / 7',
    textAlign: 'left' as const,
  },
  projectType: {
    margin: '10px 0',
    color: 'var(--highlight-color)',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    fontWeight: 'normal',
  },
  projectTitle: {
    color: 'var(--text-primary)',
    fontSize: '28px',
    margin: '0 0 20px 0',
  },
  projectDescription: {
    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    position: 'relative' as const,
    zIndex: 2,
    padding: '25px',
    borderRadius: '4px',
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-primary)',
    fontSize: '16px',
    lineHeight: 1.5,
  },
  descRight: {
    textAlign: 'right' as const,
  },
  descLeft: {
    textAlign: 'left' as const,
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    position: 'relative' as const,
    zIndex: 2,
    margin: '25px 0 10px',
    padding: 0,
    listStyle: 'none',
    gap: '20px',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    color: 'var(--text-secondary)',
  },
  techListRight: {
    justifyContent: 'flex-end',
  },
  techListLeft: {
    justifyContent: 'flex-start',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
    zIndex: 2,
    marginTop: '10px',
    color: 'var(--text-primary)',
  },
  linksRight: {
    justifyContent: 'flex-end',
    gap: '20px',
  },
  linksLeft: {
    justifyContent: 'flex-start',
    gap: '20px',
  },
  linkIcon: {
    color: 'var(--text-primary)',
    transition: 'color 0.2s',
  },
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.2s',
  },
  linkText: {
    fontFamily: 'var(--font-mono)',
  },
  imageLink: {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'relative' as const,
  }
};

export default Projects;
