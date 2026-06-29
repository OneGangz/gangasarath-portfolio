import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Nominate IT Pvt Ltd',
    location: 'Noida, UP',
    duration: 'Oct 2016 – Present',
    highlights: [
      'Revised, updated, refactored and debugged existing applications to improve maintainability and scalability.',
      'Built and maintained frontend components using React.js with Vite for fast development builds and API integration with .NET Core backend services.',
      'Designed and maintained scalable REST APIs and microservices following Clean Architecture, SOLID principles and dependency injection patterns.',
      'Designed, built and maintained efficient, reusable and reliable code for enterprise-grade backend services using C# and .NET Core.',
      'Acted as technical lead in Agile delivery, driving sprint planning, prioritization, and release coordination. Worked with product owners to refine scope, resolve dependencies, and ensure predictable delivery of sprint commitments.',
      'Identified bottlenecks and implemented solutions to improve application performance and responsiveness, maintaining 99.99% system availability.',
      'Leveraged AI-assisted development tools to improve code quality, accelerate debugging, automate test creation, and enhance technical documentation.',
      'Optimized SQL Server database performance through query tuning, advanced indexing, and stored procedure refactoring, reducing report execution time by 88% (from 18s to 2s) for datasets exceeding 50K records.',
      'Developed automated unit tests using xUnit and performed integration testing to ensure software quality and reliability.',
      'Guided junior team members and reviewed deliverables to maintain software quality standards.',
      'Participated in project development meetings and collaborated with architects, business analysts and QA teams throughout the SDLC.',
      'Participated in requirements analysis and collaborated with stakeholders to define system functionality and technical specifications.',
      'Contributed to technical documentation and deployment activities.',
      'Provisioned and configured Azure Virtual Machines supporting high availability and secure backend deployments.',
      'Leveraged deep knowledge of IIS server administration to manage web hosting environments, configure SSL/TLS certificates, tune application pools, and optimize request routing.',
      'Implemented secure coding practices and addressed OWASP Top 10 vulnerabilities through authentication, authorization, input validation and secure API design.',
      'Provided technical leadership, mentoring and code reviews to junior developers to ensure adherence to coding standards and best practices.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Consummate Technologies Pvt Ltd',
    location: 'Noida, UP',
    duration: 'Jul 2015 – Sep 2016',
    highlights: [
      'Designed and developed secure ASP.NET Web API services and cloud-native applications deployed on Microsoft Azure, enhancing service scalability.',
      'Optimized complex T-SQL queries and reporting modules, accelerating reporting engine execution times by 35%.',
      'Created interactive data visualization dashboards using Google Charts, JavaScript, and jQuery, improving user access to business intelligence.',
      'Collaborated with business analysts to translate complex business requirements into robust, technical specifications and backend implementations.',
      'Conducted unit testing, troubleshooting, and application maintenance, ensuring high code reliability and minimal post-release bugs.',
      'Produced detailed technical documentation, including API specifications and system flowcharts, to standardize team onboarding.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Prasad Solutions',
    location: 'New Delhi',
    duration: 'Nov 2014 – Apr 2015',
    highlights: [
      'Developed REST APIs and backend modules for Xamarin Forms mobile applications.',
      'Customized and extended nopCommerce (open-source e-commerce platform) core components to support custom checkout flows and payment gateway integrations.',
      'Integrated third-party APIs and optimized background processing tasks, reducing server-side latency.',
      'Debugged legacy issues and enhanced application performance, resolving critical bugs in database transactions.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Progressive Cybernetics Pvt Ltd',
    location: 'Kerala',
    duration: 'Jan 2013 – Aug 2014',
    highlights: [
      'Developed and maintained enterprise ERP applications using C#, ASP.NET, and SQL Server, supporting core business inventory and accounting operations.',
      'Created SOAP/RESTful web services to facilitate efficient data exchange with HTML5/CSS3/JavaScript-based frontends.',
      'Administered SVN server, creating repositories, configuring user permissions, and coordinating code merges across distributed teams.',
      'Installed, configured, and maintained client and server operating systems, including Windows Server, Ubuntu, and RedHat Linux, supporting test environments.',
      'Configured and maintained secure FTP server and client software for encrypted internal and client facing file transfers.',
      'Troubleshot database bottlenecks and implemented software patches, enhancing overall system stability by 15%.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'AlignMinds Technologies',
    location: 'Kerala',
    duration: 'Nov 2011 – Jan 2013',
    highlights: [
      'Developed and configured complex reporting modules using RDLC (Report Definition Language Client-Side) and SQL Server for business intelligence reporting.',
      'Integrated third-party APIs, including Google Calendar, enabling automated scheduling features within the core platform.',
      'Built lightweight JSON-based web services and implemented client-side input validation using JavaScript and jQuery to improve UI responsiveness.',
      'Participated in debugging, code maintenance, and performance enhancement cycles for client-facing web applications.'
    ]
  }
];

const Experience = () => {
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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

        {experiences.map((exp, index) => {
          const isExpanded = !!expandedIndices[index];
          const hasMore = exp.highlights.length > 5;
          const visibleHighlights = hasMore && !isExpanded 
            ? exp.highlights.slice(0, 5) 
            : exp.highlights;

          return (
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
                  {visibleHighlights.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem' }}>{item}</li>
                  ))}
                </ul>

                {hasMore && (
                  <button 
                    onClick={() => toggleExpand(index)} 
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      marginTop: '1.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '0.375rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(139, 92, 246, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(139, 92, 246, 0.1)';
                    }}
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        Show More ({exp.highlights.length - 5} highlights) <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
