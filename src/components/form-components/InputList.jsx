function ListItem({ name, remove }) {
  return (
    <>
      <h1>{name}</h1>
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
            name={entry[0]}
            remove={() => removeItem(entry[0])}
          />
        );
      })}
      <button onClick={handleAdd}>Add {listType}</button>
    </>
  );
}

export default InputList;
