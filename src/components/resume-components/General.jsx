function General({ data, settings }) {
  return (
    <>
      <div
        className="resume-section person"
        style={{ backgroundColor: settings.color }}>
        <div className="data">
          <img src={data.photoSrc} />

          <div className="name-title">
            <div className="preview-title-1">{data.name}</div>

            <div className="preview-title-2">Title</div>
          </div>
        </div>
      </div>

      <div className="resume-section about">
        <div className="blurb preview-body-1">{data.blurb}</div>

        <div className="contact preview-body-2">
          {data.phone !== '' ? (
            <>
              <i class="fa-solid fa-phone"></i>&nbsp;
              {data.phone}
              <hr />
            </>
          ) : (
            ''
          )}

          {data.email !== '' ? (
            <>
              <i class="fa-solid fa-envelope"></i>&nbsp;
              {data.email}
              <hr />
            </>
          ) : (
            ''
          )}

          {data.website !== '' ? (
            <>
              <i class="fa-solid fa-globe"></i>&nbsp;
              {data.website}
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}

export default General;
