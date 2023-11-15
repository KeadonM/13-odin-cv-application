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

      <label className="form-input-label">
        Blurb Title
        <input
          type="text"
          name="blurbTitle"
          value={data.blurbTitle}
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
        <input
          className="visually-hidden"
          type="file"
          accept="image/*"
          onChange={uploadPicture}
        />
      </label>
    </form>
  );
}

export default InputGeneral;
