import { Lightbulb, Cpu, Users } from 'lucide-react';

const services = [
  {
    title: 'Architecture Design',
    description: 'Specializing in Clean Architecture, DDD, and Microservices to build scalable and maintainable systems.',
    icon: <Cpu size={40} />
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end development using .NET 10 and React 18, ensuring high performance and premium UX.',
    icon: <Lightbulb size={40} />
  },
  {
    title: 'Technical Mentorship',
    description: 'Guiding development teams through code reviews, architecture sessions, and technical workshops.',
    icon: <Users size={40} />
  }
];

const Services = () => {
  return (
    <section id="services" className="container">
      <h2 className="section-title">Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {services.map((service, index) => (
          <div key={index} className="glass-card">
            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
