function Education({ data, settings }) {
  let date;

  if (data.ed_start !== '') {
    date = (
      <div className="preview-primary-clr-400 preview-body-4 bold italic date">
        <div>{`${data.ed_start.slice(5)}/${data.ed_start.slice(0, 4)}`}</div>

        <div>
          {data.ed_end !== ''
            ? `${data.ed_end.slice(5)}/${data.ed_end.slice(0, 4)}`
            : 'Present'}
        </div>
      </div>
    );
  }

  return (
    <div
      className="entry preview-row"
      style={{
        '--clr': settings.colors.primaryColorDesatDark,
      }}>
      <div className="entry-info">
        <div className="preview-row">
          <div className="title-subtitle-container">
            <div
              className="preview-secondary-clr-400 preview-body-1 title bold"
              style={{
                '--clr': settings.colors.secondaryColorDark,
              }}>
              {data.name}
            </div>

            <div className="preview-primary-clr-400 preview-body-2 subtitle bold italic">
              {data.program}
            </div>
          </div>

          {date}
        </div>

        <p className="preview-body-4">{data.addition}</p>
      </div>
    </div>
  );
}

export default Education;
