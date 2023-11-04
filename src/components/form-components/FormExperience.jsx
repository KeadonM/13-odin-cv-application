import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

function InputExperience({ updateData, toggle, data, id }) {
  function handleSubmit(e) {
    toggle(e);
  }

  function handleUpdate(e) {
    updateData(e, 'experience', id);
  }

  return (
    <form className="experience-form form">
      <div className="form-row">
        <label>
          Employer
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleUpdate}
          />
        </label>
        <label>
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
        <label>
          Start Date
          <input
            type="month"
            name="exp_start"
            value={data.exp_start}
            onChange={handleUpdate}
          />
        </label>
        <label>
          End Date
          <input
            type="month"
            name="exp_end"
            value={data.exp_end}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <label>
        Responsibilities
        <textarea
          type="text"
          name="responsibility"
          value={data.responsibility}
          onChange={handleUpdate}
        />
      </label>

      <div className="form-row">
        <button type="button" onClick={toggle}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button type="button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </form>
  );
}

export default InputExperience;
