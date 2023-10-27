function InputExperience() {
  return (
    <form className="experience-form">
      <label>
        Employer/Project:
        <input type="text" name="employer" onChange={updateData} />
      </label>
      <label>
        Responsibilities:
        <textarea type="text" name="responsibility" onChange={updateData} />
      </label>

      <div className="form-row">
        <label>
          Start Date:
          <input type="date" name="exp_start" onChange={updateData} />
        </label>
        <label>
          End Date:
          <input type="date" name="exp_end" onChange={updateData} />
        </label>
      </div>
    </form>
  );
}

export default InputExperience;
