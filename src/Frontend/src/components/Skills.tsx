import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Settings, ShieldCheck } from 'lucide-react';

const skills = [
  { name: '.NET 10 / C#', icon: <Server />, level: 95 },
  { name: 'React 18 / TS', icon: <Layout />, level: 90 },
  { name: 'Clean Architecture', icon: <Code2 />, level: 95 },
  { name: 'SQL Server / EF Core', icon: <Database />, level: 85 },
  { name: 'DevOps / Azure', icon: <Settings />, level: 80 },
  { name: 'Security / OWASP', icon: <ShieldCheck />, level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills & Expertise</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            whileHover={{ scale: 1.05 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              {React.cloneElement(skill.icon as React.ReactElement, { size: 48 })}
            </div>
            <h3 style={{ marginBottom: '1rem' }}>{skill.name}</h3>
            <div style={{ background: 'var(--glass-border)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ background: 'var(--primary)', height: '100%' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
