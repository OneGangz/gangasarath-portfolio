const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            Senior Backend Engineer & Software Architect
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            Senior Backend Engineer with 13+ years building enterprise-grade applications using C# and .NET/.NET Core. Expert in designing RESTful APIs, microservices architecture, and SQL Server optimization for high-performance systems.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Strong focus on clean, maintainable code, SOLID principles, and security best practices including JWT/OAuth2. Proven track record modernizing legacy systems, optimizing database query performances, and collaborating with cross-functional teams to deliver scalable, reliable solutions.
          </p>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent)' }}>Quick Details</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.9rem' }}>Location</span>
              <strong style={{ color: 'white' }}>Noida, UP, India</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.9rem' }}>Email</span>
              <strong style={{ color: 'white' }}>gangasarath@live.com</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.9rem' }}>Phone</span>
              <strong style={{ color: 'white' }}>+91-9582711726</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.9rem' }}>Education</span>
              <strong style={{ color: 'white' }}>BCA, Mahatma Gandhi University (2006 – 2009)</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
