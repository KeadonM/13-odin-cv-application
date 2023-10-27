import InfoForm from './InfoForm.jsx';

function Builder() {
  return (
    <section aria-labelledby="builder-title" className="builder">
      <h2 id="builder-title">Builder</h2>
      <InfoForm formType="General Info" />
      <InfoForm formType="Education" />
      <InfoForm formType="Experience" />
    </section>
  );
}

export default Builder;
