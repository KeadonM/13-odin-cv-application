import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCheck,
  faPlus,
  faList,
  faCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

import EntriesList from './EntriesList';

function InputExperience(props) {
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
    removeEntry('experience', id);
  }

  function handleUpdate(e) {
    updateData(e, 'experience', id);
  }
  function handleAddBulletPoint() {
    addEntry('experience', id, true);
  }

  return (
    <form className="experience-form form">
      <div className="form-row">
        <label className="form-input-label">
          Employer
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleUpdate}
          />
        </label>
        <label className="form-input-label">
          Position
          <input
            type="text"
            name="position"
            value={data.position}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <div className="form-row date">
        <label className="form-input-label">
          Start Date
          <input
            type="text"
            name="exp_start"
            value={data.exp_start}
            onChange={handleUpdate}
          />
        </label>

        <label className="form-input-label">
          End Date
          <input
            type="text"
            name="exp_end"
            value={data.exp_end}
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
        Responsibilities
        <textarea
          type="text"
          name="responsibility"
          value={data.responsibility}
          onChange={handleUpdate}
        />
      </label>

      {[...data.bulletPoints.entries()].length > 0 && (
        <EntriesList
          defaults={{ ...entriesListDefaults }}
          data={data.bulletPoints}
          listType={'experience'}
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

export default InputExperience;
