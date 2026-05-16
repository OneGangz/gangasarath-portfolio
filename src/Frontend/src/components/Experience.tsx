import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Nominate IT PVT LTD',
    location: 'Noida, UP',
    duration: 'Oct 2016 – Present',
    highlights: [
      'Developed, optimized, and maintained 15+ backend services and RESTful APIs using .NET Core and C#, serving high-traffic enterprise applications with <200ms response time.',
      'Designed microservices architecture following Clean Architecture and SOLID principles, improving code maintainability and enabling independent deployments.',
      'Tuned SQL Server schemas, stored procedures, and indexing strategies, reducing complex report query time from 18s to 2s for 50K+ records.',
      'Implemented security best practices including JWT-based authentication and role-based authorization for enterprise APIs.',
      'Mentored 3 junior developers, conducted code reviews, and enforced coding standards.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Consummate Technologies PVT LTD',
    location: 'Noida, UP',
    duration: 'Jul 2015 – Sep 2016',
    highlights: [
      'Built REST APIs using ASP.NET Web API for cloud-based applications deployed on Microsoft Azure.',
      'Developed SQL-driven reports and optimized T-SQL queries for data visualizations using Google Charts.',
      'Implemented backend logic for enterprise modules with focus on clean, efficient, and maintainable code.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Prasad Solutions',
    location: 'New Delhi',
    duration: 'Nov 2014 – Apr 2015',
    highlights: [
      'Developed backend components and REST APIs for mobile applications using Xamarin Forms.',
      'Customized and extended NopCommerce framework, enhancing backend e-commerce workflows.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Progressive Cybernetics PVT LTD',
    location: 'Muvattupuzha, Kerala',
    duration: 'Jan 2013 – Aug 2014',
    highlights: [
      'Maintained ERP-based Windows and web applications using ASP.NET and SQL Server.',
      'Developed web services for HTML5-based applications and managed SVN server for team collaboration.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'AlignMinds Technologies',
    location: 'Cochin, Kerala',
    duration: 'Nov 2011 – Jan 2013',
    highlights: [
      'Developed backend reporting modules using RDLC and integrated JSON-based APIs.',
      'Implemented Google Calendar API integrations and client-side validation using jQuery.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2 className="section-title">Work Experience</h2>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* Timeline center line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '10px',
          bottom: '10px',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--primary), var(--accent))'
        }} />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '2rem', position: 'relative' }}
          >
            {/* Timeline dot */}
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'var(--bg-dark)',
              border: '3px solid var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              flexShrink: 0,
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
            }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 'bold' }}>{index + 1}</span>
            </div>

            <div className="glass-card" style={{ width: '100%', padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'white' }}>{exp.role}</h3>
                  <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{exp.company}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginLeft: '0.5rem' }}>| {exp.location}</span>
                </div>
                <div>
                  <span style={{ 
                    background: 'rgba(139, 92, 246, 0.1)', 
                    color: 'var(--primary)', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}>
                    {exp.duration}
                  </span>
                </div>
              </div>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.highlights.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.95rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
