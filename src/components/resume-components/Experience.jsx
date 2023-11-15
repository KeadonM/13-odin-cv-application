function Experience({ data, settings }) {
  let date;

  if (data.exp_start !== '') {
    date = (
      <div className="preview-primary-clr-400 preview-body-4 bold italic date">
        <div>{`${data.exp_start.slice(5)}/${data.exp_start.slice(0, 4)}`}</div>

        <div>
          {data.exp_end !== ''
            ? `${data.exp_end.slice(5)}/${data.exp_end.slice(0, 4)}`
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
              className=" preview-secondary-clr-400 preview-body-1 title bold"
              style={{
                '--clr': settings.colors.secondaryColorDark,
              }}>
              {data.position}
            </div>

            <div className="preview-primary-clr-400 preview-body-2 subtitle bold italic">
              {data.name}
            </div>
          </div>

          {date}
        </div>

        <p className="preview-body-4">{data.responsibility}</p>
      </div>
    </div>
  );
}

export default Experience;
