import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faImage } from '@fortawesome/free-solid-svg-icons';

function InputGeneral({ updateData, uploadPicture, data }) {
  function handleUpdate(e) {
    updateData(e, 'general', false);
  }

  return (
    <form className="general-form form">
      <div className="form-row">
        <label className="form-input-label">
          Name
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleUpdate}
          />
        </label>

        <label className="form-input-label">
          Title
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-input-label">
          Phone
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleUpdate}
          />
        </label>

        <label className="form-input-label">
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleUpdate}
          />
        </label>
      </div>

      <label className="form-input-label">
        Website
        <input
          type="url"
          name="website"
          value={data.website}
          onChange={handleUpdate}
        />
      </label>

      <label className="form-input-label">
        Blurb
        <textarea name="blurb" value={data.blurb} onChange={handleUpdate} />
      </label>

      <label id="file">
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;
        <FontAwesomeIcon icon={faImage} />
        <input type="file" accept="image/*" onChange={uploadPicture} />
      </label>
    </form>
  );
}

export default InputGeneral;
