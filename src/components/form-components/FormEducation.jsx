import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function InputEducation(props) {
  const { defaults, id, data } = props;
  const { updateData, removeEntry, updateActiveId } = defaults;

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

  return (
    <form className="education-form form">
      <div className="form-row">
        <label className="form-input-label">
          School
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleUpdate}
          />
        </label>
        <label className="form-input-label">
          Location
          <input
            type="text"
            name="location"
            value={data.location}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <div className="form-row date">
        <label className="form-input-label">
          Start Date
          <input
            type="month"
            name="ed_start"
            value={data.ed_start}
            onChange={handleUpdate}
          />
        </label>
        <label className="form-input-label">
          End Date
          <input
            type="month"
            name="ed_end"
            value={data.ed_end}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <label className="form-input-label">
        Degree/Program
        <input
          type="text"
          name="program"
          value={data.program}
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

export default InputEducation;
