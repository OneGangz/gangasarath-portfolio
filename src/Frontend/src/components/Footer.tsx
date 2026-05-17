import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ fontWeight: '700', fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>GANGASARATH S</p>
          <p style={{ color: 'var(--text-muted)' }}>© 2026 Senior Backend Engineer</p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/OneGangz" target="_blank" rel="noreferrer" className="nav-link"><Github size={20} /></a>
          <a href="https://linkedin.com/in/gangasarath-s-19793a41" target="_blank" rel="noreferrer" className="nav-link"><Linkedin size={20} /></a>
          <a href="mailto:gangasarath@live.com" className="nav-link"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
