import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBriefcase,
  faGraduationCap,
  faL,
} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState } from 'react';

import General from './General.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import ListEntry from './ListEntry.jsx';
import Trademark from './Trademark.jsx';
import Interests from './Interests.jsx';

import '../../css/preview.scss';

import { forwardRef } from 'react';
import SoftSkills from './SoftSkills.jsx';

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

          <div className="experience grid-block resume-section main">
            {[...data.info.experience.map.entries()].length !== 0 && (
              <h2
                className="entry-title preview-title-2 bold preview-primary-clr-400"
                style={{
                  '--clr': settings.colors.primaryColorDesatDark,
                }}>
                <span
                  style={{
                    display: settings.icons === true ? 'inline' : 'none',
                  }}>
                  <FontAwesomeIcon icon={faBriefcase} />
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
              {[...data.info.experience.map.entries()].map((entry) => {
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

          <div className="education grid-block resume-section main">
            {[...data.info.education.map.entries()].length !== 0 && (
              <h2
                className="entry-title preview-title-2 bold preview-primary-clr-400"
                style={{
                  '--clr': settings.colors.primaryColorDesatDark,
                }}>
                <span
                  style={{
                    display: settings.icons === true ? 'inline' : 'none',
                  }}>
                  <FontAwesomeIcon icon={faGraduationCap} />
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
              {[...data.info.education.map.entries()].map((entry) => {
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

          <div className="skills grid-block resume-section main">
            {[...data.info.skill.map.entries()].length !== 0 && (
              <h2
                className="entry-title preview-title-2 bold preview-primary-clr-400"
                style={{
                  '--clr': settings.colors.primaryColorDesatDark,
                }}>
                <span
                  style={{
                    display: settings.icons === true ? 'inline' : 'none',
                  }}>
                  <FontAwesomeIcon icon={faBook} />
                </span>
                {data.info.skill.sectionTitle}
              </h2>
            )}

            <ul
              className={
                data.info.skill.duoTone === true
                  ? 'entry-container list-container duo-tone '
                  : 'entry-container list-container'
              }>
              {[...data.info.skill.map.entries()].map((entry) => {
                return (
                  <ListEntry
                    key={entry[0]}
                    data={entry[1]}
                    clr={settings.colors.secondaryColor}
                    clrBgAlt={settings.colors.primaryColorDesat}
                    clrShadow={settings.colors.secondaryColorDark}
                    clrShadowAlt={settings.colors.primaryColorDesatDark}
                    type="skill"
                    settings={settings}
                  />
                );
              })}
            </ul>
          </div>

          {settings.theme === false && (
            <>
              <SoftSkills data={data.info.softSkill} settings={settings} />
              <Interests data={data.info.interest} settings={settings} />
              <Trademark settings={settings} />
            </>
          )}
        </div>
      </div>
    </section>
  );
});
