function InputGeneral({ updateData }) {
  function handleUpdate(e) {
    updateData(e, 'general', false);
  }

  return (
    <form className="general-form">
      <div className="form-row">
        <label>
          Name:
          <input type="text" name="name" onChange={handleUpdate} />
        </label>

        <label>
          Phone:
          <input type="tel" name="phone" onChange={handleUpdate} />
        </label>
      </div>

      <div className="form-row">
        <label>
          Email:
          <input type="email" name="email" onChange={handleUpdate} />
        </label>

        <label>
          Website:
          <input type="url" name="website" onChange={handleUpdate} />
        </label>
      </div>

      <label>
        Photo:
        <input type="file" />
      </label>

      <label>
        Blurb:
        <textarea name="blurb" onChange={handleUpdate} />
      </label>
    </form>
  );
}

export default InputGeneral;
