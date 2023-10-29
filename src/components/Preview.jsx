import General from './resume-components/General.jsx';
import Education from './resume-components/Education.jsx';
import Experience from './resume-components/Experience.jsx';
import Skills from './resume-components/Skills.jsx';

import '../css/preview.scss';

function Preview({ data }) {
  return (
    <section aria-labelledby="preview-title" className="preview">
      <h2 id="preview-title">Preview</h2>
      <div id="resume-preview">
        <General data={data.info.general} />

        {[...data.info.experience.entries()].map((entry) => {
          return <Experience key={entry[0]} data={entry[1]} />;
        })}

        {[...data.info.education.entries()].map((entry) => {
          return <Education key={entry[0]} data={entry[1]} />;
        })}

        <Skills data={data.info.skills} />
      </div>
    </section>
  );
}

export default Preview;
