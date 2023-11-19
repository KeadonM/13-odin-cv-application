import '../../css/inputPanels.scss';
import '../../css/toggleSwitch.scss';
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
  faBrain,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';

import General from './FormGeneral.jsx';
import Contact from './FormContact.jsx';
import Experience from './FormExperience.jsx';
import Education from './FormEducation.jsx';
import ListMenu from './ListMenu.jsx';
import EntriesList from './EntriesList.jsx';
import Settings from './settings.jsx';

export default function Builder(props) {
  const {
    resumeData,
    state,
    updateData,
    updateBulletPoint,
    updateColor,
    uploadPicture,
    addEntry,
    removeEntry,
    uploadIcon,
    removeIcon,
    loadDefaults,
    updateMap,
  } = props;

  const {
    activeId,
    setActiveId,
    activeInput,
    changeActiveInput,
    activeList,
    setActiveList,
  } = state;

  const icons = {
    experience: faBriefcase,
    education: faGraduationCap,
    skill: faBook,
    softSkill: faBrain,
    interest: faChessBishop,
    list: faListUl,
  };

  const entriesListDefaults = {
    icons: icons,
    settings: resumeData.info.settings,
    addEntry: addEntry,
    removeEntry: removeEntry,
    updateData: updateData,
    updateBulletPoint: updateBulletPoint,
    updateActiveId: updateActiveId,
    handleDragEnd: handleDragEnd,
  };

  const formDefaults = {
    updateData: updateData,
    addEntry: addEntry,
    removeEntry: removeEntry,
    updateActiveId: updateActiveId,
    entriesListDefaults: entriesListDefaults,
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
              data={resumeData.info.experience.map.get(activeId)}
              id={activeId}
            />
          ) : (
            <div>
              <EntriesList
                defaults={{ ...entriesListDefaults }}
                data={resumeData.info.experience.map}
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
              data={resumeData.info.education.map.get(activeId)}
              id={activeId}
            />
          ) : (
            <div>
              <EntriesList
                defaults={{ ...entriesListDefaults }}
                data={resumeData.info.education.map}
                listType={'education'}
              />
            </div>
          ))}
      </InputCard>

      {/* Lists Menu*/}
      <InputCard name={activeInput === 'Lists' ? 'active' : 'inactive'}>
        <InputCardTitle
          title={
            activeList === 'list'
              ? 'Lists'
              : resumeData.info[activeList].sectionTitle
          }
          faIcon={icons[activeList]}
          active={activeInput === 'Lists'}
          onSelection={() => changeActiveInput('Lists')}
        />
        {activeInput === 'Lists' && (
          <ListMenu
            defaults={{ ...entriesListDefaults }}
            activeList={activeList}
            setActiveList={setActiveList}
            data={resumeData.info}
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

  function updateActiveId(id) {
    setActiveId(id);
  }

  function handleDragEnd(event, type, data, isBulletPoint, parentId) {
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

      updateMap(type, dataMap, isBulletPoint, parentId);
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
