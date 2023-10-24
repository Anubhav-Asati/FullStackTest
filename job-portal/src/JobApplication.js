import React, { useState } from 'react';
import axios from 'axios';

const JobApplication = ({ jobId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send job application data to the backend API
    axios.post(`/api/jobs/${jobId}/apply`, { name, email })
      .then(response => {
        console.log('Application submitted successfully:', response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplication;
