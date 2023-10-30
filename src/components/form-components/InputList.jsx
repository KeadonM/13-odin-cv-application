function ListItem({ id, remove, edit }) {
  return (
    <>
      <h1>{id}</h1>
      <button onClick={edit}> edit</button>
      <button onClick={remove}> delete</button>
    </>
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
      {[...data.entries()].map((entry) => {
        return (
          <ListItem
            key={entry[0]}
            id={entry[0]}
            remove={() => removeItem(entry[0])}
            edit={() => {
              toggle();
              updateActiveId(entry[0]);
            }}
          />
        );
      })}
      <button onClick={handleAdd}>Add {listType}</button>
    </>
  );
}

export default InputList;
