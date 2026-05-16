import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div className="glass-card">
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          With over 13 years of experience in the software industry, I've evolved from a self-taught developer to a Lead Software Engineer and Architect. My journey is fueled by a passion for clean code, robust architectures, and continuous learning.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          I specialize in building high-performance backend systems using .NET 10 and ASP.NET Core, while also delivering premium frontend experiences with React. I am an advocate for Clean Architecture, DDD, and SOLID principles.
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          Beyond coding, I am deeply committed to mentoring teams and evangelizing best practices in software engineering. I believe that the best solutions are born from a combination of technical excellence and collaborative growth.
        </p>
      </div>
    </section>
  );
};

export default About;
