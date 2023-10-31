function InputEducation({ updateData, toggle, data, id }) {
  function handleSubmit(e) {
    toggle(e);
  }

  function handleUpdate(e) {
    updateData(e, 'education', id);
  }

  return (
    <form className="education-form form">
      <div className="form-row">
        <label>
          School
          <input
            type="text"
            name="name"
            value={data.school}
            onChange={handleUpdate}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            value={data.location}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <label>
        Degree/Program
        <input
          type="text"
          name="program"
          value={data.program}
          onChange={handleUpdate}
        />
      </label>

      <div className="form-row">
        <label>
          Start Date
          <input
            type="date"
            name="ed_start"
            value={data.ed_start}
            onChange={handleUpdate}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            name="ed_end"
            value={data.ed_end}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <label>
        Additional Info
        <textarea
          name="additional"
          value={data.additional}
          onChange={handleUpdate}
        />
      </label>

      <div className="form-row">
        <button type="button" onClick={toggle}>
          Cancel
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default InputEducation;
