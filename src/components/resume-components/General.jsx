import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faUser,
  faAddressBook,
  faChessBishop,
} from '@fortawesome/free-solid-svg-icons';

import ListEntry from './ListEntry.jsx';

function General({ data, settings }) {
  const dataGeneral = data.general;
  const dataContact = data.contact;
  const dataInterest = data.interest;

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
              {dataGeneral.blurbTitle}
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
              {dataContact.sectionTitle}
            </h2>

            <div className="preview-body-4">
              {dataContact.phone !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="preview-info-icon preview-secondary-clr-400 "
                      icon={faPhone}
                    />
                    &nbsp;
                    <div>{dataContact.phone}</div>
                  </div>
                  <hr />
                </>
              ) : (
                ''
              )}

              {dataContact.email !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="preview-info-icon preview-secondary-clr-400 "
                      icon={faEnvelope}
                    />
                    &nbsp;
                    <div>{dataContact.email}</div>
                  </div>
                  <hr />
                </>
              ) : (
                ''
              )}

              {dataContact.linkedIn !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="preview-info-icon preview-secondary-clr-400 "
                      icon={faLinkedin}
                    />
                    &nbsp;
                    <div>{dataContact.linkedIn}</div>
                  </div>
                  <hr />
                </>
              ) : (
                ''
              )}

              {dataContact.website !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="preview-info-icon preview-secondary-clr-400 "
                      icon={faGlobe}
                    />
                    &nbsp;
                    <div>{dataContact.website}</div>
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
                return (
                  <ListEntry key={entry[0]} data={entry[1]} type="interest" />
                );
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
