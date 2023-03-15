'use client'
import React, { useState } from 'react';

const apiEndpoint = 'http://127.0.0.1:8090';

interface FormData {
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', message: '' });
  const [responseStatus, setResponseStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiEndpoint}/api/collections/messages/records/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
      if (response.ok) {
        setResponseStatus('success');
      }
    } catch (error) {
      setResponseStatus('error');
    }
  };

  return (
    <>
      {responseStatus === 'success' ? (
        <p>Success!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>

          <label>
            Message:
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      )}
      {responseStatus === 'error' && <p>Error!</p>}
    </>
  );
};

export default ContactForm;
