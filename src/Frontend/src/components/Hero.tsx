import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '1rem' }}>
            Lead Software Engineer & Architect
          </h2>
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Crafting Scalable <span style={{ color: 'var(--primary)' }}>Digital Solutions</span> with Precision.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            I am Gangasarath S, a tech enthusiast, evangelist, and self-taught developer + architect specialized in .NET and modern web technologies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#contact" className="btn btn-primary">
              Work with me <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
            <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
              <a href="https://github.com/OneGangz" target="_blank" className="nav-link"><Github size={24} /></a>
              <a href="https://in.linkedin.com/in/onegangz" target="_blank" className="nav-link"><Linkedin size={24} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
