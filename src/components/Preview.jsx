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
        <General data={data.info} />
        <Experience data={data.info} />
        <Education data={data.info} />
        <Skills data={data.info} />
      </div>
    </section>
  );
}

export default Preview;
