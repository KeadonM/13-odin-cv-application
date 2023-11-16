import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBriefcase,
  faGraduationCap,
  faL,
} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState } from 'react';

import General from './resume-components/General.jsx';
import Education from './resume-components/Education.jsx';
import Experience from './resume-components/Experience.jsx';
import ListEntry from './resume-components/ListEntry.jsx';

import '../css/preview.scss';

import { forwardRef } from 'react';

export const Preview = forwardRef((props, ref) => {
  const { data, settings } = props;

  // const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight);
  });

  return (
    <section className="preview no-print">
      {Math.floor((width / height) * 100) < 77 && (
        <div id="size-warning">
          Your resume may need to be printed on multiple pages!
        </div>
      )}
      <div className="preview-shadow">
        <div
          id="resume-preview"
          ref={ref}
          style={{
            '--clr-bg': settings.colors.lightColor,
          }}
          className={settings.theme === true ? 'theme' : 'no-theme'}>
          <General data={data.info} settings={settings} />

          <div className="resume-section experience">
            {[...data.info.experience.entries()].length !== 0 && (
              <h2
                className="preview-title-2 bold preview-primary-clr-400"
                style={{
                  '--clr': settings.colors.primaryColorDesatDark,
                }}>
                <span
                  style={{
                    display: settings.icons === true ? 'inline' : 'none',
                  }}>
                  <FontAwesomeIcon icon={faBriefcase} /> -&nbsp;
                </span>
                Experience
              </h2>
            )}
            <div
              className={
                settings.experienceColumns === true
                  ? 'entry-container'
                  : 'entry-container single-column'
              }>
              {[...data.info.experience.entries()].map((entry) => {
                return (
                  <Experience
                    key={entry[0]}
                    data={entry[1]}
                    settings={settings}
                  />
                );
              })}
            </div>
          </div>

          <div className="resume-section education">
            {[...data.info.education.entries()].length !== 0 && (
              <h2
                className="preview-title-2 bold preview-primary-clr-400"
                style={{
                  '--clr': settings.colors.primaryColorDesatDark,
                }}>
                <span
                  style={{
                    display: settings.icons === true ? 'inline' : 'none',
                  }}>
                  <FontAwesomeIcon icon={faGraduationCap} /> -&nbsp;
                </span>
                Education
              </h2>
            )}
            <div
              className={
                settings.educationColumns === true
                  ? 'entry-container'
                  : 'entry-container single-column'
              }>
              {[...data.info.education.entries()].map((entry) => {
                return (
                  <Education
                    key={entry[0]}
                    data={entry[1]}
                    settings={settings}
                  />
                );
              })}
            </div>
          </div>

          <div className="resume-section skills">
            {[...data.info.skill.entries()].length !== 0 && (
              <h2
                className="preview-title-2 bold preview-primary-clr-400"
                style={{
                  '--clr': settings.colors.primaryColorDesatDark,
                }}>
                <span
                  style={{
                    display: settings.icons === true ? 'inline' : 'none',
                  }}>
                  <FontAwesomeIcon icon={faBook} /> -&nbsp;
                </span>
                Skills
              </h2>
            )}

            <ul className="entry-container">
              {[...data.info.skill.entries()].map((entry) => {
                return (
                  <ListEntry
                    key={entry[0]}
                    data={entry[1]}
                    clr={settings.colors.secondaryColor}
                    clrShadow={settings.colors.secondaryColorDark}
                    type="skill"
                    settings={settings}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});
