function Experience({ data }) {
  return (
    <div className="entry">
      <div>Employer:{data.name}</div>

      <div>Start Date:{data.exp_start}</div>

      <div>End Date:{data.exp_end}</div>

      <div>Responsibilities:{data.responsibility}</div>
    </div>
  );
}

export default Experience;
