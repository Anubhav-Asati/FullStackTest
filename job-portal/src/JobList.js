import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobList = ({ onSelectJob }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job data from your backend API
    axios.get('/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Job Openings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id} onClick={() => onSelectJob(job.id)}>
            {job.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
