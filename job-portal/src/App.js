import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '', requirements: '', responsibilities: '' });

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching job listings:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob(prevJob => ({
      ...prevJob,
      [name]: value
    }));
  };

  const addJob = () => {
    axios.post('/api/jobs', newJob)
      .then(response => {
        setJobs([...jobs, response.data]);
        setNewJob({ title: '', description: '', requirements: '', responsibilities: '' });
      })
      .catch(error => {
        console.error('Error adding job:', error);
      });
  };

  return (
    <div className="App">
      <h1>Job Portal</h1>
      <div className="job-form">
        <input type="text" name="title" placeholder="Title" value={newJob.title} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" value={newJob.description} onChange={handleInputChange} />
        <input type="text" name="requirements" placeholder="Requirements" value={newJob.requirements} onChange={handleInputChange} />
        <input type="text" name="responsibilities" placeholder="Responsibilities" value={newJob.responsibilities} onChange={handleInputChange} />
        <button onClick={addJob}>Add Job</button>
      </div>
      <div className="job-listings">
        {jobs.map(job => (
          <div key={job._id} className="job">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Requirements: {job.requirements}</p>
            <p>Responsibilities: {job.responsibilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
