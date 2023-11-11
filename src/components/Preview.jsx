import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

import General from './resume-components/General.jsx';
import Education from './resume-components/Education.jsx';
import Experience from './resume-components/Experience.jsx';
import Skills from './resume-components/Skills.jsx';

import '../css/preview.scss';

function Preview({ data }) {
  return (
    <section aria-labelledby="preview-title" className="preview">
      <div id="resume-preview">
        <General data={data.info} settings={data.info.settings} />

        <div className="resume-section experience">
          {[...data.info.experience.entries()].length !== 0 && (
            <h2 className="preview-title-2 bold preview-primary-clr-400 ">
              <FontAwesomeIcon icon={faBriefcase} /> - Experience
            </h2>
          )}
          <div className="entry-container">
            {[...data.info.experience.entries()].map((entry) => {
              return <Experience key={entry[0]} data={entry[1]} />;
            })}
          </div>
        </div>

        <div className="resume-section education">
          {[...data.info.education.entries()].length !== 0 && (
            <h2 className="preview-title-2 bold preview-primary-clr-400 ">
              <FontAwesomeIcon icon={faGraduationCap} /> - Education
            </h2>
          )}
          <div className="entry-container">
            {[...data.info.education.entries()].map((entry) => {
              return <Education key={entry[0]} data={entry[1]} />;
            })}
          </div>
        </div>

        <div className="resume-section skills">
          {[...data.info.skill.entries()].length !== 0 && (
            <h2 className="preview-title-2 bold preview-primary-clr-400 ">
              <FontAwesomeIcon icon={faBook} /> - Skills
            </h2>
          )}
          <div className="entry-container">
            {[...data.info.skill.entries()].map((entry) => {
              return <Skills key={entry[0]} data={entry[1]} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;
