function ListItem({ name, remove, edit }) {
  return (
    <li>
      <h3>{name !== '' ? name : 'Unnamed Entry'}</h3>
      <div className="button-container">
        <button onClick={edit}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={remove}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

function InputList({
  data,
  listType,
  toggle,
  addItem,
  removeItem,
  updateActiveId,
}) {
  function handleAdd(e) {
    toggle();
    const id = addItem(e);
    updateActiveId(id);
  }

  return (
    <>
      <ul className="input-list">
        {[...data.entries()].map((entry) => {
          return (
            <ListItem
              key={entry[0]}
              name={entry[1].name}
              remove={() => removeItem(entry[0])}
              edit={() => {
                toggle();
                updateActiveId(entry[0]);
              }}
            />
          );
        })}
      </ul>
      {[...data.entries()].length === 0 && (
        <div className="no-entries">No entries found...</div>
      )}
      <button className="add-button" onClick={handleAdd}>
        <i class="fa-solid fa-plus"></i>{' '}
        {listType === 'Education' ? (
          <i class="fa-solid fa-graduation-cap"></i>
        ) : (
          <i class="fa-solid fa-briefcase"></i>
        )}
      </button>
    </>
  );
}

export default InputList;
