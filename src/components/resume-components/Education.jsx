function Education({ data }) {
  return (
    <div className="entry">
      <div>School:{data.name}</div>

      <div>Location:{data.location}</div>

      <div>Start Date:{data.ed_start}</div>

      <div>End Date:{data.ed_end}</div>

      <div>Degree/program:{data.program}</div>

      <div>Additional Info:{data.additional}</div>
    </div>
  );
}

export default Education;
