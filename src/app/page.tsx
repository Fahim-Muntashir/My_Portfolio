import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '30px 0', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>
        <p>Built with ❤️ by @fahim-muntashir © 2026</p>
      </footer>
    </>
  );
}
