function ListEntry({
  data,
  type,
  clr,
  clrBgAlt,
  clrShadow,
  clrShadowAlt,
  settings,
}) {
  return (
    <li
      className="list-entry preview-body-1 bold"
      style={{
        '--clr': settings.colors.lightColor,
        '--clr-bg': clr,
        '--clr-bg-alt': clrBgAlt,
        '--clr-shadow': clrShadow,
        '--clr-shadow-alt': clrShadowAlt,
      }}>
      {(data.nameVisible === true || settings.theme === false) &&
        data.name !== '' && <div className="list-entry-name">{data.name}</div>}

      {data.photoSrc !== '' && (
        <img
          className={'list-icon '}
          src={data.photoSrc}
          alt=""
          style={{ height: data.iconScale * 2 + '%' }}
        />
      )}
    </li>
  );
}

export default ListEntry;
