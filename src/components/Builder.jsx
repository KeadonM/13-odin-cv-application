import '../css/inputPanels.scss';
import { useState } from 'react';

import General from './form-components/FormGeneral.jsx';
import Experience from './form-components/FormExperience.jsx';
import Education from './form-components/FormEducation.jsx';
import Skills from './form-components/FormSkills.jsx';
import InputList from './form-components/InputList.jsx';

function Settings({ updateData }) {
  function handleUpdate(e) {
    updateData(e, 'settings', false);
  }

  return (
    <InputCard name="settings">
      <h2 className="input-title">
        <i class="fa-solid fa-gear"></i>&nbsp; Settings
      </h2>
      <button>layout</button>
      <button>layout</button>
      <button>layout</button>
      <input type="color" name="color" onChange={handleUpdate} />
    </InputCard>
  );
}

function InputCard({ children, onSelection, name = '' }) {
  return (
    <button className={'input-card ' + name} onClick={onSelection}>
      {children}
    </button>
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
      <InputCard
        name={activeInput === 0 ? 'active' : 'inactive'}
        onSelection={() => changeActiveInput(0)}>
        <h2
          className={activeInput === 0 ? 'active input-title' : 'input-title'}>
          <i class="fa-solid fa-user"></i>&nbsp; General
          <i class="fa-solid fa-angle-down"></i>
        </h2>
        {activeInput === 0 && (
          <General
            updateData={updateData}
            uploadPicture={uploadPicture}
            data={resumeData.info.general}
          />
        )}
      </InputCard>

      <InputCard
        name={activeInput === 1 ? 'active' : 'inactive'}
        onSelection={() => changeActiveInput(1)}>
        <h2
          className={activeInput === 1 ? 'active input-title' : 'input-title'}>
          <i class="fa-solid fa-briefcase"></i>&nbsp; Experience
          <i class="fa-solid fa-angle-down"></i>
        </h2>
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

      <InputCard
        name={activeInput === 2 ? 'active' : 'inactive'}
        onSelection={() => changeActiveInput(2)}>
        <h2
          className={activeInput === 2 ? 'active input-title' : 'input-title'}>
          <i class="fa-solid fa-graduation-cap"></i>
          &nbsp; Education
          <i class="fa-solid fa-angle-down"></i>
        </h2>
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

      <InputCard
        name={activeInput === 3 ? 'active' : 'inactive'}
        onSelection={() => changeActiveInput(3)}>
        <h2
          className={activeInput === 3 ? 'active input-title' : 'input-title'}>
          <i class="fa-solid fa-book"></i>
          &nbsp; Skills
          <i class="fa-solid fa-angle-down"></i>
        </h2>
        {activeInput === 3 && (
          <Skills
            data={resumeData.info.skills}
            updateData={updateData}
            addSkill={addSkill}
            removeSkill={removeSkill}
          />
        )}
      </InputCard>

      <Settings updateData={updateData} />
    </section>
  );
}

export default Builder;
