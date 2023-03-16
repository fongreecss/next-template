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
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email"
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                />
                <p className="text-red-500 hidden text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
                Message
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                ></textarea>
                <p className="text-red-500 hidden text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full px-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send
              </button>
            </div>
            </div>
        </form>
      )}
      {responseStatus === 'error' && <p>Error!</p>}
    </>
  );
};

export default ContactForm;

