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
      <div className="person grid-block resume-section">
        <div
          className="data"
          style={{
            '--clr': settings.colors.primaryColor,
          }}>
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

      <div className="aside grid-block">
        <div
          className="sections-container"
          style={{
            '--clr': settings.colors.lightColor,
            '--clr-bg': settings.colors.primaryColorDesat,
            '--clr-before': settings.colors.secondaryColor,
          }}>
          <div className="blurb resume-section">
            {dataGeneral.blurbTitle !== '' && (
              <h2 className="aside-section-title preview-title-2 ">
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

            <p className="preview-body-3 text-area statement">
              {dataGeneral.blurb}
            </p>
          </div>

          <div className="contact resume-section">
            {dataContact.sectionTitle !== '' && (
              <h2 className="aside-section-title preview-title-2">
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
                      className="contact-icon preview-secondary-clr-400 "
                      icon={faPhone}
                      style={{
                        '--clr': settings.colors.secondaryColorDark,
                        display: settings.icons === true ? 'inline' : 'none',
                      }}
                    />
                    &nbsp;
                    <a className="link" href={`tel:${dataContact.phone}`}>
                      <span className="contact-info">{dataContact.phone}</span>
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                </>
              ) : (
                ''
              )}

              {dataContact.email !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="contact-icon preview-secondary-clr-400 "
                      icon={faEnvelope}
                      style={{
                        '--clr': settings.colors.secondaryColorDark,
                        display: settings.icons === true ? 'inline' : 'none',
                      }}
                    />
                    &nbsp;
                    <a className="link" href={`mailto:${dataContact.email}`}>
                      <span className="contact-info">{dataContact.email}</span>
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                </>
              ) : (
                ''
              )}

              {dataContact.website !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="contact-icon preview-secondary-clr-400 "
                      icon={faGlobe}
                      style={{
                        '--clr': settings.colors.secondaryColorDark,
                        display: settings.icons === true ? 'inline' : 'none',
                      }}
                    />
                    &nbsp;
                    <a
                      className="link"
                      href={ensureHttpProtocol(dataContact.website)}
                      target="_blank">
                      <span className="contact-info">
                        {dataContact.website}
                      </span>
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                </>
              ) : (
                ''
              )}

              {dataContact.linkedIn !== '' ? (
                <>
                  <div className="preview-row">
                    <FontAwesomeIcon
                      className="contact-icon preview-secondary-clr-400 "
                      icon={faLinkedin}
                      style={{
                        '--clr': settings.colors.secondaryColorDark,
                        display: settings.icons === true ? 'inline' : 'none',
                      }}
                    />
                    &nbsp;
                    <a
                      className="link"
                      href={ensureLinkedInUrl(dataContact.linkedIn)}
                      target="_blank">
                      <span className="contact-info">
                        {dataContact.linkedIn}
                      </span>
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
      </div>
    </>
  );
}

export default General;
