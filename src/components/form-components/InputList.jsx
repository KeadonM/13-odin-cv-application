import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faTrash,
  faPlus,
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

function ListItem({ name, remove, edit, id, type, updateName }) {
  return (
    <li>
      <input
        type="text"
        name="name"
        onChange={(e) => updateName(e, type, id)}
        value={name !== '' ? name : 'Unnamed Entry'}
      />

      <button onClick={edit}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <button onClick={remove}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

function InputList({
  data,
  listType,
  toggle,
  addItem,
  removeItem,
  updateActiveId,
  updateName,
}) {
  function handleAdd(e) {
    toggle();
    const id = addItem(e);
    updateActiveId(id);
  }

  return (
    <>
      <ul className="input-list">
        {[...data.entries()].map((entry) => {
          return (
            <ListItem
              key={entry[0]}
              name={entry[1].name}
              remove={() => removeItem(entry[0])}
              edit={() => {
                toggle();
                updateActiveId(entry[0]);
              }}
              id={entry[0]}
              type={listType}
              updateName={updateName}
            />
          );
        })}
      </ul>
      {[...data.entries()].length === 0 && (
        <div className="no-entries">No entries found...</div>
      )}
      <button className="add-button" onClick={handleAdd}>
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;
        {listType === 'education' ? (
          <FontAwesomeIcon icon={faGraduationCap} />
        ) : (
          <FontAwesomeIcon icon={faBriefcase} />
        )}
      </button>
    </>
  );
}

export default InputList;
