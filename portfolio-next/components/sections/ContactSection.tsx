import React, { useState } from 'react';
import VideoBackground from '../VideoBackground';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

const ContactSection: React.FC = () => {
  // State for form fields
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // State for form submission status
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your API
      // For now, we'll simulate a successful submission after a delay
      
      // Example API call (commented out)
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      */
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set success status
      setSubmitStatus('success');
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Clear error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setSubmitting(false);
    }
  };
  
  // Render status message
  const renderStatusMessage = () => {
    if (submitStatus === 'success') {
      return <div className="alert alert-success">Message sent successfully!</div>;
    } else if (submitStatus === 'error') {
      return <div className="alert alert-danger">Failed to send message. Please try again.</div>;
    }
    return null;
  };
  
  return (
    <VideoBackground id="contact-me" videoSrc="/videos/Wolf.mp4">
      <div className="container contact-content">
        <h2 id="contact-heading" className="section-title section-title-contact">Contact Me</h2>
        <div className="row">
          <div className="col-6 offset-3">
            <div className="contact-form">
              <div className="row">
                <form id="contact" onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Status Message */}
                    {renderStatusMessage()}
                    
                    {/* Name Field */}
                    <div className="col-12">
                      <fieldset>
                        <label htmlFor="name" className="sr-only">Your Name</label>
                        <input 
                          name="name" 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          placeholder="Your name..." 
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          aria-label="Your name"
                          aria-required="true"
                        />
                      </fieldset>
                    </div>
                    
                    {/* Email Field */}
                    <div className="col-12">
                      <fieldset>
                        <label htmlFor="email" className="sr-only">Your Email</label>
                        <input 
                          name="email" 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          placeholder="Your email..." 
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          aria-label="Your email address"
                          aria-required="true"
                        />
                      </fieldset>
                    </div>
                    
                    {/* Subject Field */}
                    <div className="col-12">
                      <fieldset>
                        <label htmlFor="subject" className="sr-only">Subject</label>
                        <input 
                          name="subject" 
                          type="text" 
                          className="form-control" 
                          id="subject" 
                          placeholder="Subject..." 
                          required
                          value={formState.subject}
                          onChange={handleInputChange}
                          aria-label="Message subject"
                          aria-required="true"
                        />
                      </fieldset>
                    </div>
                    
                    {/* Message Field */}
                    <div className="col-12">
                      <fieldset>
                        <label htmlFor="message" className="sr-only">Your Message</label>
                        <textarea 
                          name="message" 
                          rows={6}
                          className="form-control" 
                          id="message" 
                          placeholder="Your message..." 
                          required
                          value={formState.message}
                          onChange={handleInputChange}
                          aria-label="Your message"
                          aria-required="true"
                        ></textarea>
                      </fieldset>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="submit-button"
                        disabled={submitting}
                      >
                        {submitting ? 'Sending...' : 'Send'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default ContactSection;
