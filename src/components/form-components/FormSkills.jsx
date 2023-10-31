function InputSkills({ data, updateData, addSkill, removeSkill }) {
  return (
    <form className="skills-form form">
      {[...data.entries()].map((entry) => {
        return (
          <label key={entry[0]}>
            Skill:
            <input
              type="text"
              name="skill"
              value={entry[1].skill}
              onChange={(e) => updateData(e, 'skills', entry[0])}
            />
            <button onClick={() => removeSkill(entry[0])}>remove</button>
          </label>
        );
      })}

      <button type="button" className="add-button" onClick={addSkill}>
        Add Skill
      </button>
    </form>
  );
}

export default InputSkills;
