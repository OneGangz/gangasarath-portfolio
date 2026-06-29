import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Core .NET & Microsoft Tech',
    skills: [
      { name: 'C# & .NET Framework 4.x', level: 95 },
      { name: '.NET Core & .NET 6/7/8', level: 95 },
      { name: 'ASP.NET Core MVC / Web API', level: 95 },
      { name: 'Windows Apps & Web Services', level: 90 }
    ]
  },
  {
    title: 'Architecture, Design & Security',
    skills: [
      { name: 'Microservices & REST APIs', level: 95 },
      { name: 'Clean Architecture & SOLID', level: 95 },
      { name: 'Domain-Driven Design (DDD)', level: 85 },
      { name: 'JWT, OAuth2 & Identity Server', level: 90 }
    ]
  },
  {
    title: 'Database & Caching',
    skills: [
      { name: 'SQL Server, T-SQL & Stored Procs', level: 90 },
      { name: 'Entity Framework Core & LINQ', level: 95 },
      { name: 'Query Optimization & Tuning', level: 90 },
      { name: 'In-memory Caching', level: 85 }
    ]
  },
  {
    title: 'DevOps, Cloud & Tools',
    skills: [
      { name: 'Microsoft Azure (VMs, Deployments)', level: 80 },
      { name: 'Docker & CI/CD Pipelines', level: 80 },
      { name: 'IIS Administration & Server Config', level: 90 },
      { name: 'VS Code, Git, Postman & Cursor', level: 95 }
    ]
  },
  {
    title: 'Testing, Frontend & Observability',
    skills: [
      { name: 'xUnit Testing & Mocking', level: 90 },
      { name: 'HTML5, CSS3, JS & jQuery', level: 85 },
      { name: 'React (basic exposure)', level: 70 },
      { name: 'Serilog & Observability / Logging', level: 90 }
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
