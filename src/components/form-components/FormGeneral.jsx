function InputGeneral({ updateData, uploadPicture, data }) {
  function handleUpdate(e) {
    updateData(e, 'general', false);
  }

  return (
    <form className="general-form form">
      <div className="form-row">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleUpdate}
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleUpdate}
          />
        </label>

        <label>
          Website
          <input
            type="url"
            name="website"
            value={data.website}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <label>
        Blurb
        <textarea name="blurb" value={data.blurb} onChange={handleUpdate} />
      </label>

      <label id="file">
        <i class="fa-solid fa-plus"></i>&nbsp;<i class="fa-solid fa-image"></i>
        <input type="file" accept="image/*" onChange={uploadPicture} />
      </label>
    </form>
  );
}

export default InputGeneral;
