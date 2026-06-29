const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            Senior Technical Analyst & Senior .NET Developer
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            Senior .NET Professional with 13+ years of experience in requirement analysis, software design, architecture, development, testing, deployment, and maintenance of enterprise applications using Microsoft technologies.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Expertise in C#, .NET Framework, .NET Core, ASP.NET Core, REST APIs, Microservices Architecture, SQL Server, and design patterns. Proven ability to lead development teams, mentor engineers, perform code reviews, troubleshoot production issues, and deliver scalable, maintainable, and high-quality solutions.
          </p>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.15)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Quick Details</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.9rem' }}>Location</span>
              <strong style={{ color: 'var(--text-main)' }}>Noida, UP, India</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.9rem' }}>Email</span>
              <strong style={{ color: 'var(--text-main)' }}>gangasarath@live.com</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.9rem' }}>Phone</span>
              <strong style={{ color: 'var(--text-main)' }}>+91-9582711726</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.9rem' }}>Education</span>
              <strong style={{ color: 'var(--text-main)' }}>BCA, Mahatma Gandhi University (2006 – 2009)</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
