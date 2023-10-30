function InputExperience({ updateData, toggle, data, id }) {
  function handleSubmit(e) {
    toggle(e);
  }

  function handleUpdate(e) {
    updateData(e, 'experience', id);
  }

  return (
    <form className="experience-form">
      <label>
        Employer/Project:
        <input
          type="text"
          name="employer"
          value={data.employer}
          onChange={handleUpdate}
        />
      </label>
      <label>
        Responsibilities:
        <textarea
          type="text"
          name="responsibility"
          value={data.responsibility}
          onChange={handleUpdate}
        />
      </label>

      <div className="form-row">
        <label>
          Start Date:
          <input
            type="date"
            name="exp_start"
            value={data.exp_start}
            onChange={handleUpdate}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="exp_end"
            value={data.exp_end}
            onChange={handleUpdate}
          />
        </label>
      </div>
      <button type="button" onClick={toggle}>
        Cancel
      </button>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default InputExperience;
