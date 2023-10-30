function Experience({ data }) {
  return (
    <div className="resume-section resume-experience">
      <h2>Experience</h2>

      <div>Employer:{data.employer}</div>

      <div>Start Date:{data.exp_start}</div>

      <div>End Date:{data.exp_end}</div>

      <div>Responsibilities:{data.responsibility}</div>
    </div>
  );
}

export default Experience;
