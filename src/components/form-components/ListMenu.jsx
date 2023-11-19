import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChessBoard,
  faPenToSquare,
  faBook,
  faBrain,
  faChessBishop,
  faCircleLeft,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';

import EntriesList from './EntriesList';
import { useState } from 'react';

function ListItem({ data, updateData, listType, icons, setActiveList }) {
  return (
    <li>
      <div className="list-item-row">
        <FontAwesomeIcon className="list-item-icon" icon={icons[listType]} />

        <input
          className="name-input"
          type="text"
          name="sectionTitle"
          value={data.sectionTitle}
          onChange={(e) => updateData(e, listType)}
        />

        <button type="button" onClick={() => setActiveList(listType)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>

        <label className="switch switch-button">
          <input
            type="checkbox"
            checked={data.duoTone}
            name="duoTone"
            onChange={(e) => updateData(e, listType)}
          />
          <span className="slider round no-thumb">
            <FontAwesomeIcon
              icon={data.duoTone === true ? faChessBoard : faSquare}
            />
          </span>
        </label>
      </div>
    </li>
  );
}

export default function ListOfLists({
  defaults,
  activeList,
  setActiveList,
  data,
  uploadIcon,
  removeIcon,
}) {
  let component;

  if (activeList === 'list') {
    component = (
      <ul className="input-list list-of-lists">
        <ListItem
          data={data.skill}
          updateData={defaults.updateData}
          listType={'skill'}
          icons={defaults.icons}
          setActiveList={setActiveList}
        />
        <ListItem
          data={data.softSkill}
          updateData={defaults.updateData}
          listType={'softSkill'}
          icons={defaults.icons}
          setActiveList={setActiveList}
        />
        <ListItem
          data={data.interest}
          updateData={defaults.updateData}
          listType={'interest'}
          icons={defaults.icons}
          setActiveList={setActiveList}
        />
      </ul>
    );
  } else {
    component = (
      <EntriesList
        defaults={{ ...defaults }}
        data={data[activeList].map}
        listType={activeList}
        uploadIcon={uploadIcon}
        removeIcon={removeIcon}
        setActiveList={setActiveList}
      />
    );
  }

  return <>{component}</>;
}

// {
//   /* Skills Input */
// }
// <InputCard name={activeInput === 'Skills' ? 'active' : 'inactive'}>
//   <InputCardTitle
//     title="Skills"
//     faIcon={faBook}
//     active={activeInput === 'Skills'}
//     onSelection={() => changeActiveInput('Skills')}
//   />

//   {activeInput === 'Skills' && (
// <EntriesList
//   defaults={{ ...entriesListDefaults }}
//   data={resumeData.info.skill}
//   listType={'skill'}
//   uploadIcon={uploadIcon}
//   removeIcon={removeIcon}
// />
//   )}
// </InputCard>;

// {
//   /* SoftSkills Input */
// }
// <InputCard name={activeInput === 'SoftSkills' ? 'active' : 'inactive'}>
//   <InputCardTitle
//     title="Soft Skills"
//     faIcon={faBrain}
//     active={activeInput === 'SoftSkills'}
//     onSelection={() => changeActiveInput('SoftSkills')}
//   />

//   {activeInput === 'SoftSkills' && (
//     <EntriesList
//       defaults={{ ...entriesListDefaults }}
//       data={resumeData.info.interest}
//       listType={'interest'}
//       uploadIcon={uploadIcon}
//       removeIcon={removeIcon}
//     />
//   )}
// </InputCard>;

// {
//   /* Interests Input */
// }
// <InputCard name={activeInput === 'Interests' ? 'active' : 'inactive'}>
//   <InputCardTitle
//     title="Interests"
//     faIcon={faChessBishop}
//     active={activeInput === 'Interests'}
//     onSelection={() => changeActiveInput('Interests')}
//   />

//   {activeInput === 'Interests' && (
//     <EntriesList
//       defaults={{ ...entriesListDefaults }}
//       data={resumeData.info.interest}
//       listType={'interest'}
//       uploadIcon={uploadIcon}
//       removeIcon={removeIcon}
//     />
//   )}
// </InputCard>;
