import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faUser,
  faAddressBook,
  faChessBishop,
  faLink,
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

          <p className="preview-body-3 text-area">{dataGeneral.blurb}</p>
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
                  <a href={`tel:${dataContact.phone}`}>
                    <span>{dataContact.phone}</span>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
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
                  <a href={`mailto:${dataContact.email}`}>
                    <span>{dataContact.email}</span>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
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
                  <a
                    href={ensureLinkedInUrl(dataContact.linkedIn)}
                    target="_blank">
                    <span>{dataContact.linkedIn}</span>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
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
                  <a
                    href={ensureHttpProtocol(dataContact.website)}
                    target="_blank">
                    <span>{dataContact.website}</span>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
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
          <a
            href="https://github.com/keadonm"
            className="watermark preview-body-3 italic ">
            Created with ResuCraft™
          </a>
        )}
      </div>
    </>
  );
}

export default General;

function ensureHttpProtocol(link) {
  link = link.toLowerCase();

  const httpRegex = /^(http:\/\/|https:\/\/)/;

  if (!httpRegex.test(link)) {
    return 'http://' + link;
  }

  return link;
}

function ensureLinkedInUrl(input) {
  input = input.toLowerCase();

  // Check if the input contains "linkedin.com/in/"
  if (!input.includes('linkedin.com/in/')) {
    // If it doesn't, check if the input contains "linkedin.com/"
    if (input.includes('linkedin.com/')) {
      // If it does, add "in/" after "linkedin.com/"
      input = input.replace('linkedin.com/', 'linkedin.com/in/');
    } else {
      // If it doesn't contain "linkedin.com/", prepend "https://www.linkedin.com/in/"
      return 'https://www.linkedin.com/in/' + input;
    }
  }

  return ensureHttpProtocol(input);
}
