function ListEntry({ data, type, clr, clrShadow, settings }) {
  return (
    <li
      className="entry preview-body-1 bold"
      style={{
        '--clr': settings.colors.lightColor,
        '--clr-bg': clr,
        '--clr-bg-alt': settings.colors.primaryColorDesatDark,
        '--clr-shadow': clrShadow,
      }}>
      {(data.nameVisible === true || settings.theme === false) && (
        <div className="list-entry-name">{data.name}</div>
      )}

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
