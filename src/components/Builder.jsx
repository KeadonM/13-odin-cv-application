import { useState } from 'react';

import FormControls from './form-components/FormControls.jsx';
import InputList from './form-components/InputList.jsx';

import General from './form-components/FormGeneral.jsx';
import Experience from './form-components/FormExperience.jsx';
import Education from './form-components/FormEducation.jsx';
import Skills from './form-components/FormSkills.jsx';

import '../css/inputCard.scss';
function InputCard({ children, onSelection }) {
  return (
    <div className="input-card" onClick={onSelection}>
      {children}
    </div>
  );
}

function Builder({
  resumeData,
  updateData,
  addExperience,
  removeExperience,
  addSchool,
  removeEducation,
}) {
  const [activeInput, setActiveInput] = useState(0);
  const [activeId, setActiveId] = useState('');
  const [newExperienceToggle, setNewExperienceToggle] = useState(false);
  const [newEducationToggle, setNewEducationToggle] = useState(false);

  function changeActiveInput(input) {
    setActiveInput(input);
  }

  function updateActiveId(id) {
    setActiveId(id);
  }

  function toggleNewExperience() {
    setNewExperienceToggle(!newExperienceToggle);
  }

  function toggleNewEducation() {
    setNewEducationToggle(!newEducationToggle);
  }

  return (
    <section aria-labelledby="builder-title" className="builder">
      <h2 id="builder-title">Builder</h2>

      <InputCard onSelection={() => changeActiveInput(0)}>
        <h3>General</h3>
        {activeInput === 0 && <General updateData={updateData} />}
      </InputCard>

      <InputCard onSelection={() => changeActiveInput(1)}>
        <h3>Experience</h3>
        {activeInput === 1 &&
          (newExperienceToggle ? (
            <Experience
              updateData={updateData}
              toggle={toggleNewExperience}
              id={activeId}
            />
          ) : (
            <InputList
              listType={'Experience'}
              toggle={toggleNewExperience}
              data={resumeData.info.experience}
              addItem={addExperience}
              removeItem={removeExperience}
              updateActiveId={updateActiveId}
            />
          ))}
      </InputCard>

      <InputCard onSelection={() => changeActiveInput(2)}>
        <h3>Education</h3>
        {activeInput === 2 &&
          (newEducationToggle ? (
            <Education
              updateData={updateData}
              toggle={toggleNewEducation}
              id={activeId}
            />
          ) : (
            <InputList
              listType={'Education'}
              toggle={toggleNewEducation}
              data={resumeData.info.education}
              addItem={addSchool}
              removeItem={removeEducation}
              updateActiveId={updateActiveId}
            />
          ))}
      </InputCard>

      <InputCard onSelection={() => changeActiveInput(3)}>
        <h3>Skills</h3>
        {activeInput === 3 && <Skills updateData={updateData} />}
      </InputCard>

      <FormControls />
    </section>
  );
}

export default Builder;
