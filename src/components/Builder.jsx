import '../css/inputPanels.scss';
import { useState } from 'react';

import { arrayMove } from '@dnd-kit/sortable';

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
import EntriesList from './form-components/EntriesList';

function InputCardTitle(props) {
  const { onSelection, faIcon, title } = props;

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
    <h2 className="input-title" onClick={onSelection} onKeyDown={onKeyDown}>
      <FontAwesomeIcon icon={faIcon} />
      <p>&nbsp; {title}</p>
      <FontAwesomeIcon icon={faAngleDown} />
    </h2>
  );
}

function InputCard({ children, name = '' }) {
  return (
    <section tabIndex="0" className={'input-card ' + name}>
      {children}
    </section>
  );
}

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

export default function Builder(props) {
  const {
    resumeData,
    updateData,
    uploadPicture,
    addEntry,
    removeEntry,
    uploadSkillIcon,
    loadDefaults,
    updateMap,
  } = props;

  const [activeInput, setActiveInput] = useState(0);
  const [activeId, setActiveId] = useState('');
  const [newExperienceToggle, setNewExperienceToggle] = useState(false);
  const [newEducationToggle, setNewEducationToggle] = useState(false);

  const formDefaults = {
    updateData: updateData,
    removeEntry: removeEntry,
    updateActiveId: updateActiveId,
  };

  const entriesListDefaults = {
    addEntry: addEntry,
    removeEntry: removeEntry,
    updateData: updateData,
    updateActiveId: updateActiveId,
    handleDragEnd: handleDragEnd,
  };

  return (
    <section aria-labelledby="builder-title" className="builder">
      {/* General Input */}
      <InputCard name={activeInput === 0 ? 'active' : 'inactive'}>
        <InputCardTitle
          title="General"
          faIcon={faUser}
          onSelection={() => changeActiveInput(0)}
        />

        {activeInput === 0 && (
          <General
            updateData={updateData}
            uploadPicture={uploadPicture}
            data={resumeData.info.general}
          />
        )}
      </InputCard>

      {/* Experience Input */}
      <InputCard name={activeInput === 1 ? 'active' : 'inactive'}>
        <InputCardTitle
          title="Experience"
          faIcon={faBriefcase}
          onSelection={() => changeActiveInput(1)}
        />

        {/* Conditionally render EntriesList or Experience Form */}
        {activeInput === 1 &&
          (activeId !== '' ? (
            <Experience
              defaults={formDefaults}
              data={resumeData.info.experience.get(activeId)}
              id={activeId}
            />
          ) : (
            <EntriesList
              defaults={{ ...entriesListDefaults }}
              data={resumeData.info.experience}
              listType={'experience'}
            />
          ))}
      </InputCard>

      {/* Education Input */}
      <InputCard name={activeInput === 2 ? 'active' : 'inactive'}>
        <InputCardTitle
          title="Education"
          faIcon={faGraduationCap}
          onSelection={() => changeActiveInput(2)}
        />

        {/* Conditionally render EntriesList or Education Form */}
        {activeInput === 2 &&
          (activeId !== '' ? (
            <Education
              defaults={formDefaults}
              data={resumeData.info.education.get(activeId)}
              id={activeId}
            />
          ) : (
            <EntriesList
              defaults={{ ...entriesListDefaults }}
              data={resumeData.info.education}
              listType={'education'}
            />
          ))}
      </InputCard>

      {/* Skills Input */}
      <InputCard name={activeInput === 3 ? 'active' : 'inactive'}>
        <InputCardTitle
          title="Skills"
          faIcon={faBook}
          onSelection={() => changeActiveInput(3)}
        />

        {activeInput === 3 && (
          <EntriesList
            defaults={{ ...entriesListDefaults }}
            data={resumeData.info.skill}
            listType={'skill'}
            uploadSkillIcon={uploadSkillIcon}
          />
        )}
      </InputCard>

      <Settings updateData={updateData} loadDefaults={loadDefaults} />
    </section>
  );

  function changeActiveInput(input) {
    setActiveId('');
    setActiveInput(input);
  }

  function updateActiveId(id) {
    setActiveId(id);
  }

  function handleDragEnd(event, type, data) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const idArray = [...data.keys()];
      const activeIndex = idArray.indexOf(active.id);
      const overIndex = idArray.indexOf(over.id);

      const newIdArray = arrayMove(idArray, activeIndex, overIndex);
      const dataMap = new Map([]);

      newIdArray.map((id) => {
        dataMap.set(id, data.get(id));
      });

      updateMap(type, dataMap);
    }
  }
}
