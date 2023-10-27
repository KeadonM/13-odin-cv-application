import General from './FormGeneral.jsx';
import Education from './FormEducation.jsx';
import Experience from './FormExperience.jsx';
import Skills from './FormSkills.jsx';

function InfoForm({ formType, activeInput, updateData }) {
  return (
    <>
      <h3>{formType}</h3>
      {formType === 'General' && activeInput === 0 && (
        <General updateData={updateData} />
      )}
      {formType === 'Education' && activeInput === 1 && (
        <Education updateData={updateData} />
      )}
      {formType === 'Experience' && activeInput === 2 && (
        <Experience updateData={updateData} />
      )}
      {formType === 'Skills' && activeInput === 3 && (
        <Skills updateData={updateData} />
      )}
    </>
  );
}

export default InfoForm;
