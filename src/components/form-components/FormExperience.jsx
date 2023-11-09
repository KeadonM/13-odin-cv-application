import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function InputExperience(props) {
  const { defaults, id, data } = props;
  const { updateData, removeEntry, updateActiveId } = defaults;

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
            type="month"
            name="exp_start"
            value={data.exp_start}
            onChange={handleUpdate}
          />
        </label>
        <label className="form-input-label">
          End Date
          <input
            type="month"
            name="exp_end"
            value={data.exp_end}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <label className="form-input-label">
        Responsibilities
        <textarea
          type="text"
          name="responsibility"
          value={data.responsibility}
          onChange={handleUpdate}
        />
      </label>

      <div className="form-row">
        <button type="button" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button type="button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </form>
  );
}

export default InputExperience;
