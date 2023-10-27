function InputGeneral({ updateData }) {
  return (
    <form className="general-form">
      <div className="form-row">
        <label>
          Name:
          <input type="text" name="name" onChange={updateData} />
        </label>

        <label>
          Phone:
          <input type="tel" name="phone" onChange={updateData} />
        </label>
      </div>

      <div className="form-row">
        <label>
          Email:
          <input type="email" name="email" onChange={updateData} />
        </label>

        <label>
          Website:
          <input type="url" name="website" onChange={updateData} />
        </label>
      </div>

      <label>
        Photo:
        <input type="file" />
      </label>

      <label>
        Blurb:
        <textarea name="blurb" onChange={updateData} />
      </label>
    </form>
  );
}

export default InputGeneral;
