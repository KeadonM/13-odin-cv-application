function ListEntry({ data, type }) {
  return (
    <li className="entry preview-body-1 bold">
      <div>{data.name}</div>
      {data.photoSrc !== '' && (
        <img
          className={'list-entry-icon ' + type + '-icon'}
          src={data.photoSrc}
          alt=""
          style={{ height: data.iconScale * 2 + '%' }}
        />
      )}
    </li>
  );
}

export default ListEntry;
