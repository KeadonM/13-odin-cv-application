function General({ data }) {
  return (
    <div className="resume-section resume-general">
      <h2>General</h2>

      <div>Name:{data.name}</div>

      <div>Phone:{data.phone}</div>

      <div>Email:{data.email}</div>

      <div>Website:{data.website}</div>

      <div>Blurb:{data.blurb}</div>

      <img />
    </div>
  );
}

export default General;
