import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faUser,
  faAddressBook,
  faChessBishop,
} from '@fortawesome/free-solid-svg-icons';

import Skills from './Skills';

function General({ data, settings }) {
  const dataGeneral = data.general;
  const dataInterest = data.interest;

  console.log(dataInterest);

  return (
    <>
      <div
        className="resume-section person"
        style={{ backgroundColor: settings.color }}>
        <div className="data">
          <img src={dataGeneral.photoSrc} />

          <div className="name-title">
            <div className="preview-title-1 title bold preview-primary-clr-400">
              {dataGeneral.name}
            </div>

            <div className="preview-title-3 subtitle bold italic preview-tertiary-clr-400">
              {dataGeneral.title}
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section about preview-tertiary-clr-400">
        <div className="resume-section-data">
          <div className="blurb">
            <h2 className="general-section-title preview-title-2 ">
              <FontAwesomeIcon
                className="preview-general-icon preview-secondary-clr-400 "
                icon={faUser}
              />
              About Me
            </h2>

            <div className="preview-body-3">
              {' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {dataGeneral.blurb}
            </div>
          </div>

          <div className="contact">
            <h2 className="general-section-title preview-title-2">
              <FontAwesomeIcon
                className="preview-general-icon preview-secondary-clr-400 "
                icon={faAddressBook}
              />
              Contact Me
            </h2>

            <div className="preview-body-4">
              {dataGeneral.phone !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="preview-info-icon preview-secondary-clr-400 "
                      icon={faPhone}
                    />
                    &nbsp;
                    <div>{dataGeneral.phone}</div>
                  </div>
                  <hr />
                </>
              ) : (
                ''
              )}

              {dataGeneral.email !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="preview-info-icon preview-secondary-clr-400 "
                      icon={faEnvelope}
                    />
                    &nbsp;
                    <div>{dataGeneral.email}</div>
                  </div>
                  <hr />
                </>
              ) : (
                ''
              )}

              {dataGeneral.website !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="preview-info-icon preview-secondary-clr-400 "
                      icon={faGlobe}
                    />
                    &nbsp;
                    <div>{dataGeneral.website}</div>
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
          </div>

          <div className="interests">
            <h2 className="general-section-title preview-title-2">
              <FontAwesomeIcon
                className="preview-general-icon preview-secondary-clr-400 "
                icon={faChessBishop}
              />
              Interests
            </h2>

            <ul className="preview-body-4">
              {[...dataInterest.entries()].map((entry) => {
                return <li key={entry[0]}>{entry[1].name}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="watermark preview-body-3 italic ">
          Created with ResuCraft
        </div>
      </div>
    </>
  );
}

export default General;
