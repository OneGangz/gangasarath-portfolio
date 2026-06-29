import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact Us</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Name</label>
            <input 
              type="text" 
              style={{ padding: '0.75rem', borderRadius: '0.5rem' }} 
              placeholder="Your Name"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Email</label>
            <input 
              type="email" 
              style={{ padding: '0.75rem', borderRadius: '0.5rem' }} 
              placeholder="Your Email"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Message</label>
            <textarea 
              rows={5} 
              style={{ padding: '0.75rem', borderRadius: '0.5rem', resize: 'none' }} 
              placeholder="How can I help you?"
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>
            Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
