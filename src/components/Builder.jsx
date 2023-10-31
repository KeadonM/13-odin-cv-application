import { useState } from 'react';

import InputList from './form-components/InputList.jsx';

import General from './form-components/FormGeneral.jsx';
import Experience from './form-components/FormExperience.jsx';
import Education from './form-components/FormEducation.jsx';
import Skills from './form-components/FormSkills.jsx';

function Settings({ updateData }) {
  function handleUpdate(e) {
    updateData(e, 'settings', false);
  }

  return (
    <>
      <button>layout</button>
      <button>layout</button>
      <button>layout</button>
      <input type="color" name="color" onChange={handleUpdate} />
    </>
  );
}

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
  uploadPicture,
  addExperience,
  removeExperience,
  addSchool,
  removeEducation,
  addSkill,
  removeSkill,
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

      <Settings updateData={updateData} />

      <InputCard onSelection={() => changeActiveInput(0)}>
        <h3 className={activeInput === 0 ? 'active' : ''}>General</h3>
        {activeInput === 0 && (
          <General
            updateData={updateData}
            uploadPicture={uploadPicture}
            data={resumeData.info.general}
          />
        )}
      </InputCard>

      <InputCard onSelection={() => changeActiveInput(1)}>
        <h3 className={activeInput === 1 ? 'active' : ''}>Experience</h3>
        {activeInput === 1 &&
          (newExperienceToggle ? (
            <Experience
              updateData={updateData}
              toggle={toggleNewExperience}
              data={resumeData.info.experience.get(activeId)}
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
        <h3 className={activeInput === 2 ? 'active' : ''}>Education</h3>
        {activeInput === 2 &&
          (newEducationToggle ? (
            <Education
              updateData={updateData}
              toggle={toggleNewEducation}
              data={resumeData.info.education.get(activeId)}
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
        <h3 className={activeInput === 3 ? 'active' : ''}>Skills</h3>
        {activeInput === 3 && (
          <Skills
            data={resumeData.info.skills}
            updateData={updateData}
            addSkill={addSkill}
            removeSkill={removeSkill}
          />
        )}
      </InputCard>
    </section>
  );
}

export default Builder;
