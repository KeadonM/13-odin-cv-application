import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ensureHttpProtocol } from '../utils/linkFormatting.js';

function Education({ data, settings }) {
  let date;

  if (data.ed_start !== '') {
    const start = {
      month: data.ed_start.slice(5, 7),
      year: data.ed_start.slice(0, 4),
    };

    const end = {
      month: data.ed_end.slice(5, 7),
      year: data.ed_end.slice(0, 4),
    };

    date = (
      <div className="preview-primary-clr-400 preview-body-4 bold italic date">
        <div>
          {data.yearOnly === false && `${start.month}/`}
          {`${start.year}`}
        </div>
        {start.year !== end.year && (
          <div>
            {end.year !== ''
              ? data.yearOnly === false
                ? `${end.month}/${end.year}`
                : `${end.year}`
              : 'Present'}
          </div>
        )}
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
          <a
            href={data.link !== '' && ensureHttpProtocol(data.link)}
            target="_blank"
            className="title-subtitle-container">
            <div
              className="preview-secondary-clr-400 preview-body-1 title bold"
              style={{
                '--clr': settings.colors.secondaryColorDark,
              }}>
              {data.name}
            </div>

            <div className="preview-primary-clr-400 preview-body-2 subtitle bold italic">
              {data.program}&nbsp;
              {data.link !== '' && <FontAwesomeIcon icon={faLink} />}
            </div>
          </a>

          {date}
        </div>

        <p className="addition preview-body-4 text-area">{data.addition}</p>

        <ul
          className="bulletpoints-list preview-body-4 text-area"
          style={{
            '--clr': settings.colors.secondaryColorDark,
          }}>
          {[...data.bulletPoints.entries()].map((entry) => (
            <li className="bulletpoint-entry" key={entry[0]}>
              {entry[1].name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Education;
