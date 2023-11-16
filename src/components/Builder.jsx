import '../css/inputPanels.scss';
import '../css/toggleSwitch.scss';
import { useState } from 'react';

import { arrayMove } from '@dnd-kit/sortable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faBook,
  faUser,
  faAddressBook,
  faBriefcase,
  faGraduationCap,
  faChessBishop,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

import General from './form-components/FormGeneral.jsx';
import Contact from './form-components/FormContact.jsx';
import Experience from './form-components/FormExperience.jsx';
import Education from './form-components/FormEducation.jsx';
import EntriesList from './form-components/EntriesList';
import Settings from './form-components/settings.jsx';

export default function Builder(props) {
  const {
    resumeData,
    updateData,
    updateColor,
    uploadPicture,
    addEntry,
    removeEntry,
    uploadIcon,
    removeIcon,
    loadDefaults,
    updateMap,
  } = props;

  const [activeInput, setActiveInput] = useState('General');
  const [activeId, setActiveId] = useState('');

  const formDefaults = {
    updateData: updateData,
    removeEntry: removeEntry,
    updateActiveId: updateActiveId,
  };

  const entriesListDefaults = {
    settings: resumeData.info.settings,
    addEntry: addEntry,
    removeEntry: removeEntry,
    updateData: updateData,
    updateActiveId: updateActiveId,
    handleDragEnd: handleDragEnd,
  };

  return (
    <section className="builder">
      {/* General Input */}
      <InputCard name={activeInput === 'General' ? 'active' : 'inactive'}>
        <InputCardTitle
          title="General"
          faIcon={faUser}
          active={activeInput === 'General'}
          onSelection={() => changeActiveInput('General')}
        />

        {activeInput === 'General' && (
          <General
            updateData={updateData}
            uploadPicture={uploadPicture}
            data={resumeData.info.general}
          />
        )}
      </InputCard>

      {/* Contact Input */}
      <InputCard name={activeInput === 'Contact' ? 'active' : 'inactive'}>
        <InputCardTitle
          title="Contact"
          faIcon={faAddressBook}
          active={activeInput === 'Contact'}
          onSelection={() => changeActiveInput('Contact')}
        />

        {activeInput === 'Contact' && (
          <Contact
            updateData={updateData}
            uploadPicture={uploadPicture}
            data={resumeData.info.contact}
          />
        )}
      </InputCard>

      {/* Experience Input */}
      <InputCard name={activeInput === 'Experience' ? 'active' : 'inactive'}>
        <InputCardTitle
          title="Experience"
          faIcon={faBriefcase}
          active={activeInput === 'Experience'}
          onSelection={() => changeActiveInput('Experience')}
        />

        {/* Conditionally render EntriesList or Experience Form */}
        {activeInput === 'Experience' &&
          (activeId !== '' ? (
            <Experience
              defaults={formDefaults}
              data={resumeData.info.experience.get(activeId)}
              id={activeId}
            />
          ) : (
            <div>
              <EntriesList
                defaults={{ ...entriesListDefaults }}
                data={resumeData.info.experience}
                listType={'experience'}
              />
            </div>
          ))}
      </InputCard>

      {/* Education Input */}
      <InputCard name={activeInput === 'Education' ? 'active' : 'inactive'}>
        <InputCardTitle
          title="Education"
          faIcon={faGraduationCap}
          active={activeInput === 'Education'}
          onSelection={() => changeActiveInput('Education')}
        />

        {/* Conditionally render EntriesList or Education Form */}
        {activeInput === 'Education' &&
          (activeId !== '' ? (
            <Education
              defaults={formDefaults}
              data={resumeData.info.education.get(activeId)}
              id={activeId}
            />
          ) : (
            <div>
              <EntriesList
                defaults={{ ...entriesListDefaults }}
                data={resumeData.info.education}
                listType={'education'}
              />
            </div>
          ))}
      </InputCard>

      {/* Skills Input */}
      <InputCard name={activeInput === 'Skills' ? 'active' : 'inactive'}>
        <InputCardTitle
          title="Skills"
          faIcon={faBook}
          active={activeInput === 'Skills'}
          onSelection={() => changeActiveInput('Skills')}
        />

        {activeInput === 'Skills' && (
          <EntriesList
            defaults={{ ...entriesListDefaults }}
            data={resumeData.info.skill}
            listType={'skill'}
            uploadIcon={uploadIcon}
            removeIcon={removeIcon}
          />
        )}
      </InputCard>

      {/* Interests Input */}
      <InputCard name={activeInput === 'Interests' ? 'active' : 'inactive'}>
        <InputCardTitle
          title="Interests"
          faIcon={faChessBishop}
          active={activeInput === 'Interests'}
          onSelection={() => changeActiveInput('Interests')}
        />

        {activeInput === 'Interests' && (
          <EntriesList
            defaults={{ ...entriesListDefaults }}
            data={resumeData.info.interest}
            listType={'interest'}
            uploadIcon={uploadIcon}
            removeIcon={removeIcon}
          />
        )}
      </InputCard>

      <InputCard name="settings">
        <h2 className="input-title">
          <FontAwesomeIcon icon={faGear} />
          <p>&nbsp; Settings</p>
        </h2>
        <Settings
          updateData={updateData}
          updateColor={updateColor}
          loadDefaults={loadDefaults}
          data={resumeData.info.settings}
        />
      </InputCard>
    </section>
  );

  function changeActiveInput(input) {
    setActiveId('');

    if (input !== activeInput) setActiveInput(input);
    else setActiveInput('');
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

function InputCardTitle(props) {
  const { onSelection, faIcon, active = false, title } = props;

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
    <h2
      tabIndex="0"
      className="input-title"
      onClick={onSelection}
      onKeyDown={onKeyDown}>
      <FontAwesomeIcon icon={faIcon} bounce={active} />
      <p>&nbsp; {title}</p>
      <FontAwesomeIcon icon={faAngleDown} />
    </h2>
  );
}

function InputCard({ children, name = '' }) {
  return <section className={'input-card ' + name}>{children}</section>;
}
