import React from 'react';

const JobDetails = ({ job }) => {
  if (!job) {
    return <div>Please select a job to view details.</div>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;
