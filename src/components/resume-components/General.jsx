import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

function General({ data, settings }) {
  return (
    <>
      <div
        className="resume-section person"
        style={{ backgroundColor: settings.color }}>
        <div className="data">
          <img src={data.photoSrc} />

          <div className="name-title">
            <div className="preview-title-1 bold primary-text-clr ">
              {data.name}
            </div>

            <div className="preview-title-2 ">{data.title}</div>
          </div>
        </div>
      </div>

      <div className="resume-section about">
        <div className="blurb preview-body-1">{data.blurb}</div>

        <div className="contact preview-body-2">
          {data.phone !== '' ? (
            <>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;
              {data.phone}
              <hr />
            </>
          ) : (
            ''
          )}

          {data.email !== '' ? (
            <>
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp;
              {data.email}
              <hr />
            </>
          ) : (
            ''
          )}

          {data.website !== '' ? (
            <>
              <FontAwesomeIcon icon={faGlobe} />
              &nbsp;
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
