'use client'
import React, { useState } from 'react';

// API Endpoint for PocketBase Rest API
const apiEndpoint = 'http://127.0.0.1:8090';

function ContactForm() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [responseStatus, setResponseStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(`${apiEndpoint}/api/collections/messages/records/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Sets response status based on HTTP Status Code
      if (response.ok) {
        setResponseStatus('success');
      }
      else if(response.status >= 400 && response.status < 500) {
        setResponseStatus('client-error')
      }
      else {
        setResponseStatus('server-error');
      }
      
    } catch (error) {
      setResponseStatus('error');
    }
  };

  return (
    <>
      {responseStatus === 'success' && <p style={{ color: 'green' }}>Submitted Successfully!</p>}
      {responseStatus === 'client-error' && <p style={{ color: 'maroon' }}>Invalid data or request.</p>}
      {responseStatus === 'server-error' && <p style={{ color: 'darkred' }}>An error occured on server-side</p>}
      {responseStatus === 'error' && <p style={{ color: 'orange' }}>Something went wrong while submitting the form</p>}
    
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
            type="text" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            required
          />
        </label>

        <label>
          Message:
          <textarea 
            value={formData.message} 
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ContactForm;
