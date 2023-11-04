function Experience({ data }) {
  return (
    <div className="entry">
      <div className="preview-body-1 bold">{data.position}</div>

      <div className="preview-body-2 preview-row">
        <div>{`${data.exp_start.slice(5)}/${data.exp_start.slice(0, 4)}`}</div>
        &nbsp;&#8211;&nbsp;
        <div>
          {data.exp_end !== ''
            ? `${data.exp_end.slice(5)}/${data.exp_end.slice(0, 4)}`
            : 'Present'}
        </div>
      </div>
      <div className="preview-body-2">{data.name}</div>

      <div className="preview-body-2">{data.responsibility}</div>
    </div>
  );
}

export default Experience;
