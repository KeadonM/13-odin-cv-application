function Experience({ data }) {
  return (
    <div className="resume-section resume-experience">
      <h2>Experience</h2>

      <div>Employer:{data.employer}</div>

      <div>Start Date:{data.emp_start}</div>

      <div>End Date:{data.emp_end}</div>

      <div>Location:{data.responsibility}</div>
    </div>
  );
}

export default Experience;
