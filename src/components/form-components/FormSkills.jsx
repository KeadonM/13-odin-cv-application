function InputSkills({ data, updateData, addSkill, removeSkill }) {
  return (
    <form className="input-list">
      <ul>
        {[...data.entries()].map((entry) => {
          return (
            <li key={entry[0]} className="column-row">
              <input
                type="text"
                name="skill"
                value={entry[1].skill}
                onChange={(e) => updateData(e, 'skills', entry[0])}
              />
              <button onClick={() => removeSkill(entry[0])}>
                {' '}
                <i class="fa-solid fa-trash"></i>
              </button>
            </li>
          );
        })}
      </ul>

      {[...data.entries()].length === 0 && (
        <div className="no-entries">No entries found...</div>
      )}

      <button type="button" className="add-button" onClick={addSkill}>
        <i class="fa-solid fa-plus"></i> <i class="fa-solid fa-book"></i>
      </button>
    </form>
  );
}

export default InputSkills;
