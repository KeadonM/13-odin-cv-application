import '../css/infoForm.scss';

function InfoForm({ formType }) {
  return (
    <div className="info-form">
      <h3>{formType}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ipsam,
        quod culpa ab porro, et perspiciatis nesciunt repellendus voluptatem,
        labore officiis. Officia molestiae animi maxime!
      </p>
    </div>
  );
}

export default InfoForm;
