function InputEducation({ updateData }) {
  return (
    <form className="education-form">
      <div className="form-row">
        <label>
          School:
          <input type="text" name="school" onChange={updateData} />
        </label>
        <label>
          Location:
          <input type="text" name="location" onChange={updateData} />
        </label>
      </div>

      <label>
        Degree/Program:
        <input type="text" name="program" onChange={updateData} />
      </label>

      <div className="form-row">
        <label>
          Start Date:
          <input type="date" name="ed_start" onChange={updateData} />
        </label>
        <label>
          End Date:
          <input type="date" name="ed_end" onChange={updateData} />
        </label>
      </div>

      <label>
        Additional Info:
        <textarea name="additional" onChange={updateData} />
      </label>
    </form>
  );
}

export default InputEducation;
