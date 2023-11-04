function Education({ data }) {
  return (
    <div className="entry">
      <div className="preview-body-1 bold">{data.name}</div>

      <div className="preview-body-2 preview-row">
        <div>{`${data.ed_start.slice(5)}/${data.ed_start.slice(0, 4)}`}</div>
        &nbsp;&#8211;&nbsp;
        <div>
          {data.ed_start !== ''
            ? `${data.ed_end.slice(5)}/${data.ed_end.slice(0, 4)}`
            : 'Present'}
        </div>
      </div>

      <div className="preview-body-2">{data.location}</div>

      <div className="preview-body-2">{data.program}</div>

      <div className="preview-body-2">Additional Info:{data.additional}</div>
    </div>
  );
}

export default Education;
