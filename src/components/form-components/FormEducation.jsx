import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCheck,
  faPlus,
  faList,
  faCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import EntriesList from './EntriesList';

function InputEducation(props) {
  const { defaults, id, data } = props;
  const {
    updateData,
    addEntry,
    removeEntry,
    updateActiveId,
    entriesListDefaults,
  } = defaults;

  function handleSubmit() {
    updateActiveId('');
  }

  function handleDelete() {
    updateActiveId('');
    removeEntry('education', id);
  }

  function handleUpdate(e) {
    updateData(e, 'education', id);
  }

  function handleAddBulletPoint() {
    addEntry('education', id, true);
  }

  return (
    <form className="education-form form">
      <div className="form-row">
        <label className="form-input-label">
          Institute
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleUpdate}
          />
        </label>
        <label className="form-input-label">
          Program
          <input
            type="text"
            name="program"
            value={data.program}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <div className="form-row date">
        <label className="form-input-label">
          Start Date
          <input
            type="text"
            name="ed_start"
            value={data.ed_start}
            onChange={handleUpdate}
          />
        </label>

        <label className="form-input-label">
          End Date
          <input
            type="text"
            name="ed_end"
            value={data.ed_end}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <label className="form-input-label">
        Link
        <input
          type="text"
          name="link"
          value={data.link}
          onChange={handleUpdate}
        />
      </label>

      <label className="form-input-label">
        Additional Info
        <textarea
          name="addition"
          value={data.addition}
          onChange={handleUpdate}
        />
      </label>

      {[...data.bulletPoints.entries()].length > 0 && (
        <EntriesList
          defaults={{ ...entriesListDefaults }}
          data={data.bulletPoints}
          listType={'education'}
          isBulletPoint={true}
          parentId={id}
        />
      )}

      <div className="form-row">
        <button type="button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faCircleLeft} />
        </button>
        <button type="button" onClick={handleAddBulletPoint}>
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;
          <FontAwesomeIcon icon={faList} />
        </button>
        <button type="button" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </form>
  );
}

export default InputEducation;
