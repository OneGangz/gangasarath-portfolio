import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="container hero-container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', letterSpacing: '0.05em' }}>
            SENIOR BACKEND ENGINEER
          </h2>
          <h1 className="hero-title">
            Building Scalable <span style={{ color: 'var(--primary)' }}>Enterprise APIs</span> & Systems.
          </h1>
          <p className="hero-text">
            I am Gangasarath S, a Senior Backend Engineer and Architect with 13+ years of experience specializing in .NET Core, Microservices, and SQL Server performance optimization.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
            <div style={{ display: 'flex', gap: '1.25rem', marginLeft: '1.5rem' }}>
              <a href="https://github.com/OneGangz" target="_blank" rel="noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center' }}><Github size={24} /></a>
              <a href="https://linkedin.com/in/gangasarath-s-19793a41" target="_blank" rel="noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center' }}><Linkedin size={24} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
