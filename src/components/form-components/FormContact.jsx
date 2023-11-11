import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faImage } from '@fortawesome/free-solid-svg-icons';

function InputContact({ updateData, uploadPicture, data }) {
  function handleUpdate(e) {
    updateData(e, 'general', false);
  }

  return (
    <form className="general-form form">
      <label className="form-input-label">
        Section Title
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleUpdate}
        />
      </label>

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

      <div className="form-row">
        <label className="form-input-label">
          LinkedIn
          <input
            type="url"
            name="website"
            value={data.linkedin}
            onChange={handleUpdate}
          />
        </label>

        <label className="form-input-label">
          Website
          <input
            type="url"
            name="website"
            value={data.website}
            onChange={handleUpdate}
          />
        </label>
      </div>
    </form>
  );
}

export default InputContact;
