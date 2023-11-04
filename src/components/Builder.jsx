import '../css/inputPanels.scss';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faBook,
  faUser,
  faBriefcase,
  faGraduationCap,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

import General from './form-components/FormGeneral.jsx';
import Experience from './form-components/FormExperience.jsx';
import Education from './form-components/FormEducation.jsx';
import Skills from './form-components/FormSkills.jsx';
import InputList from './form-components/InputList.jsx';

function Settings({ updateData, loadDefaults }) {
  function handleUpdate(e) {
    updateData(e, 'settings', false);
  }

  return (
    <InputCard name="settings">
      <h2 className="input-title">
        <FontAwesomeIcon icon={faGear} />
        <p>&nbsp; Settings</p>
      </h2>

      <div className="settings-input-container">
        <button onClick={loadDefaults}>Default</button>
        <button>Layout</button>
        <button>Layout</button>
        <button>Layout</button>
        <input type="color" name="color" onChange={handleUpdate} />
      </div>
    </InputCard>
  );
}

function InputCard({ children, onSelection, name = '' }) {
  const onKeyDown = (e) => {
    const enterOrSpace =
      e.key === 'Enter' ||
      e.key === ' ' ||
      e.key === 'Spacebar' ||
      e.which === 13 ||
      e.which === 32;
    if (enterOrSpace) {
      e.preventDefault();
      onSelection(e);
    }
  };

  return (
    <section
      tabIndex="0"
      className={'input-card ' + name}
      onClick={onSelection}
      onKeyDown={onKeyDown}>
      {children}
    </section>
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
  loadDefaults,
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
          <FontAwesomeIcon icon={faUser} />
          <p>&nbsp; General</p>
          <FontAwesomeIcon icon={faAngleDown} />
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
          <FontAwesomeIcon icon={faBriefcase} />
          <p>&nbsp; Experience</p>
          <FontAwesomeIcon icon={faAngleDown} />
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
              listType={'experience'}
              toggle={toggleNewExperience}
              data={resumeData.info.experience}
              addItem={addExperience}
              removeItem={removeExperience}
              updateActiveId={updateActiveId}
              updateName={updateData}
            />
          ))}
      </InputCard>

      <InputCard
        name={activeInput === 2 ? 'active' : 'inactive'}
        onSelection={() => changeActiveInput(2)}>
        <h2
          className={activeInput === 2 ? 'active input-title' : 'input-title'}>
          <FontAwesomeIcon icon={faGraduationCap} />
          <p> &nbsp; Education</p>
          <FontAwesomeIcon icon={faAngleDown} />
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
              listType={'education'}
              toggle={toggleNewEducation}
              data={resumeData.info.education}
              addItem={addSchool}
              removeItem={removeEducation}
              updateActiveId={updateActiveId}
              updateName={updateData}
            />
          ))}
      </InputCard>

      <InputCard
        name={activeInput === 3 ? 'active' : 'inactive'}
        onSelection={() => changeActiveInput(3)}>
        <h2
          className={activeInput === 3 ? 'active input-title' : 'input-title'}>
          <FontAwesomeIcon icon={faBook} />
          <p>&nbsp; Skills</p>
          <FontAwesomeIcon icon={faAngleDown} />
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

      <Settings updateData={updateData} loadDefaults={loadDefaults} />
    </section>
  );
}

export default Builder;
