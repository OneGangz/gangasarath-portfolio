import { useState } from 'react';
import { Send } from 'lucide-react';
import { sendMessage } from '../services/api';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setStatusMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      await sendMessage({ name, email, message });
      setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact Us</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: '0.75rem', borderRadius: '0.5rem' }} 
              placeholder="Your Name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '0.75rem', borderRadius: '0.5rem' }} 
              placeholder="Your Email"
              required
              disabled={isSubmitting}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Message</label>
            <textarea 
              rows={5} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ padding: '0.75rem', borderRadius: '0.5rem', resize: 'none' }} 
              placeholder="How can I help you?"
              required
              disabled={isSubmitting}
            />
          </div>
          
          {statusMessage && (
            <div style={{ 
              padding: '0.75rem 1rem', 
              borderRadius: '0.5rem', 
              fontSize: '0.9rem',
              fontWeight: '600',
              backgroundColor: statusMessage.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
              color: statusMessage.type === 'success' ? '#059669' : '#dc2626',
              border: `1px solid ${statusMessage.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
            }}>
              {statusMessage.text}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} 
            {!isSubmitting && <Send size={18} style={{ marginLeft: '0.5rem' }} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
