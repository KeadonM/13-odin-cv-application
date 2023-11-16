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
        style={{
          '--clr': settings.colors.primaryColor,
        }}>
        <div className="data">
          {dataGeneral.photoSrc !== '' && (
            <img
              style={{
                '--clr': settings.colors.secondaryColor,
              }}
              src={dataGeneral.photoSrc}
            />
          )}

          <div className="name-title">
            <div
              className="preview-title-1 title bold preview-primary-clr-400"
              style={{
                '--clr': settings.colors.primaryColorDesatDark,
              }}>
              {dataGeneral.name}
            </div>

            <div
              className="preview-title-3 subtitle bold italic preview-tertiary-clr-400"
              style={{
                '--clr': settings.colors.lightColor,
              }}>
              {dataGeneral.title}
            </div>
          </div>
        </div>
      </div>

      <div
        className="about preview-tertiary-clr-400"
        style={{
          '--clr': settings.colors.lightColor,
          '--clr-bg': settings.colors.primaryColorDesat,
          '--clr-before': settings.colors.secondaryColor,
        }}>
        <div className="blurb resume-section">
          {dataGeneral.blurbTitle !== '' && (
            <h2 className="general-section-title preview-title-2 ">
              <FontAwesomeIcon
                className="preview-general-icon preview-secondary-clr-400 "
                icon={faUser}
                style={{
                  '--clr': settings.colors.secondaryColorDark,
                  display: settings.icons === true ? 'inline' : 'none',
                }}
              />
              {dataGeneral.blurbTitle}
            </h2>
          )}

          <div className="preview-body-3">
            {' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {dataGeneral.blurb}
          </div>
        </div>

        <div className="contact resume-section">
          {dataContact.sectionTitle !== '' && (
            <h2 className="general-section-title preview-title-2">
              <FontAwesomeIcon
                className="preview-general-icon preview-secondary-clr-400 "
                icon={faAddressBook}
                style={{
                  '--clr': settings.colors.secondaryColorDark,
                  display: settings.icons === true ? 'inline' : 'none',
                }}
              />
              {dataContact.sectionTitle}
            </h2>
          )}

          <div className="preview-body-4 contact-info">
            {dataContact.phone !== '' ? (
              <>
                <div className="preview-row">
                  <FontAwesomeIcon
                    className="preview-info-icon preview-secondary-clr-400 "
                    icon={faPhone}
                    style={{
                      '--clr': settings.colors.secondaryColorDark,
                      display: settings.icons === true ? 'inline' : 'none',
                    }}
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
                    style={{
                      '--clr': settings.colors.secondaryColorDark,
                      display: settings.icons === true ? 'inline' : 'none',
                    }}
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
                    style={{
                      '--clr': settings.colors.secondaryColorDark,
                      display: settings.icons === true ? 'inline' : 'none',
                    }}
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
                    style={{
                      '--clr': settings.colors.secondaryColorDark,
                      display: settings.icons === true ? 'inline' : 'none',
                    }}
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

        <div className="interests resume-section">
          {[...dataInterest.entries()].length > 0 && (
            <h2 className="general-section-title preview-title-2">
              <FontAwesomeIcon
                className="preview-general-icon preview-secondary-clr-400 "
                icon={faChessBishop}
                style={{
                  '--clr': settings.colors.secondaryColorDark,
                  display: settings.icons === true ? 'inline' : 'none',
                }}
              />
              Interests
            </h2>
          )}

          <ul className="preview-body-4">
            {[...dataInterest.entries()].map((entry) => {
              return (
                <ListEntry
                  key={entry[0]}
                  data={entry[1]}
                  clr={settings.colors.secondaryColorDark}
                  clrShadow={settings.colors.secondaryColorDark}
                  type="interest"
                  settings={settings}
                />
              );
            })}
          </ul>
        </div>

        {settings.trademark === true && (
          <div className="watermark preview-body-3 italic ">
            Created with ResuCraft™
          </div>
        )}
      </div>
    </>
  );
}

export default General;
