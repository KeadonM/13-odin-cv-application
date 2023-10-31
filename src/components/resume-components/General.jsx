function General({ data, settings }) {
  return (
    <div
      className="resume-section resume-general"
      style={{ backgroundColor: settings.color }}>
      <h2>General</h2>

      <div>Name:{data.name}</div>

      <div>Phone:{data.phone}</div>

      <div>Email:{data.email}</div>

      <div>Website:{data.website}</div>

      <div>Blurb:{data.blurb}</div>

      <img src={data.photoSrc} />
    </div>
  );
}

export default General;
