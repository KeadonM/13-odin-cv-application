import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faUser,
  faAddressBook,
  faLink,
} from '@fortawesome/free-solid-svg-icons';

import {
  ensureHttpProtocol,
  ensureLinkedInUrl,
} from '../utils/linkFormatting.js';

import Trademark from './Trademark.jsx';
import Interests from './Interests.jsx';
import SoftSkills from './SoftSkills.jsx';

function General({ data, settings }) {
  const dataGeneral = data.general;
  const dataContact = data.contact;

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
              <span
                className="preview-general-icon preview-secondary-clr-400 "
                style={{
                  '--clr': settings.colors.secondaryColorDark,
                  display: settings.icons === true ? 'inline' : 'none',
                }}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              {dataGeneral.blurbTitle}
            </h2>
          )}

          <p className="preview-body-3 text-area">{dataGeneral.blurb}</p>
        </div>

        <div className="contact resume-section">
          {dataContact.sectionTitle !== '' && (
            <h2 className="general-section-title preview-title-2">
              <span
                className="preview-general-icon preview-secondary-clr-400 "
                style={{
                  '--clr': settings.colors.secondaryColorDark,
                  display: settings.icons === true ? 'inline' : 'none',
                }}>
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
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
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        {settings.theme === true && (
          <>
            <SoftSkills data={data.softSkill} settings={settings} />
            <Interests data={data.interest} settings={settings} />
            <Trademark settings={settings} />
          </>
        )}
      </div>
    </>
  );
}

export default General;
