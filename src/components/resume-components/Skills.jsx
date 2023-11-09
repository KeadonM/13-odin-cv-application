function Skills({ data }) {
  return (
    <div className="entry preview-body-1 bold">
      <div>{data.name}</div>
      {data.photoSrc !== '' && (
        <img className="skill-icon" src={data.photoSrc} alt="" />
      )}
    </div>
  );
}

export default Skills;
