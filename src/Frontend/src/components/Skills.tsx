import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Backend Development',
    skills: [
      { name: 'C# & .NET Core', level: 95 },
      { name: 'ASP.NET Core Web API', level: 95 },
      { name: 'Microservices & Clean Architecture', level: 95 },
      { name: 'SOLID Principles & Design Patterns', level: 90 }
    ]
  },
  {
    title: 'Data & Optimization',
    skills: [
      { name: 'SQL Server & T-SQL', level: 90 },
      { name: 'Stored Procedures & Indexing', level: 90 },
      { name: 'Query & DB Performance Tuning', level: 90 },
      { name: 'LINQ & Entity Framework Core', level: 95 }
    ]
  },
  {
    title: 'Security & Cloud & DevOps',
    skills: [
      { name: 'Authentication & JWT & OAuth2', level: 95 },
      { name: 'Microsoft Azure Services', level: 80 },
      { name: 'CI/CD Pipelines & IIS', level: 85 },
      { name: 'Linux (Ubuntu) & Git', level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills & Expertise</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: '500', color: 'white' }}>{skill.name}</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: '600' }}>{skill.level}%</span>
                  </div>
                  <div style={{ background: 'var(--glass-border)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      style={{ background: 'linear-gradient(to right, var(--primary), var(--accent))', height: '100%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
