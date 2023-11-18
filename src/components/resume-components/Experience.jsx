import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ensureHttpProtocol } from '../utils/linkFormatting.js';

function Experience({ data, settings }) {
  let date;

  if (data.exp_start !== '') {
    date = (
      <div className="preview-primary-clr-400 preview-body-4 bold italic date">
        <div>{data.exp_start}</div>

        <div>{data.exp_end}</div>
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
            href={ensureHttpProtocol(data.link)}
            target="_blank"
            className="title-subtitle-container">
            <div
              className=" preview-secondary-clr-400 preview-body-1 title bold"
              style={{
                '--clr': settings.colors.secondaryColorDark,
              }}>
              {data.position}
            </div>

            <div className="preview-primary-clr-400 preview-body-2 subtitle bold italic">
              {data.name}&nbsp;
              {data.link !== '' && <FontAwesomeIcon icon={faLink} />}
            </div>
          </a>

          {date}
        </div>

        <p className="preview-body-4 text-area">{data.responsibility}</p>

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

export default Experience;
