import { v4 as uuidv4, v4 } from 'uuid';
import { useState } from 'react';

import Builder from './Builder';
import Preview from './Preview';
import Footer from './Footer';

function experienceObject() {
  return {
    employer: '',
    exp_start: '',
    exp_end: '',
    responsibility: '',
  };
}

function educationObject() {
  return {
    school: '',
    location: '',
    ed_start: '',
    ed_end: '',
    program: '',
    addition: '',
  };
}

function App() {
  const [resumeData, setResumeData] = useState({
    info: {
      general: {
        name: '',
        phone: '',
        email: '',
        website: '',
        blurb: '',
      },

      experience: new Map([]),

      education: new Map([]),
    },
  });

  function updateData(e, type, id) {
    console.log(
      `change state of ${e.target.name} in id ${id} to value ${e.target.value}`
    );

    const dataCopy = { ...resumeData };

    if (id !== false) {
      const element = dataCopy.info[type].get(id);

      element[e.target.name] = e.target.value;

      dataCopy.info[type].set(id, element);
    } else {
      dataCopy.info[type][e.target.name] = e.target.value;
    }

    setResumeData(dataCopy);
  }

  function addNewExperience(e) {
    console.log(`add new experience`);

    const id = uuidv4();
    const dataCopy = { ...resumeData };

    dataCopy.info.experience.set(id, experienceObject());
    setResumeData(dataCopy);

    return id;
  }

  function removeExperience(id) {
    console.log(`removing experience ${id}`);

    const dataCopy = { ...resumeData };

    dataCopy.info.experience.delete(id);

    setResumeData(dataCopy);
  }

  function addNewSchool(e) {
    console.log(`add new school`);

    const id = uuidv4();
    const dataCopy = { ...resumeData };

    dataCopy.info.education.set(id, educationObject());
    setResumeData(dataCopy);

    return id;
  }

  function removeEducation(id) {
    console.log(`removing Education ${id}`);

    const dataCopy = { ...resumeData };

    dataCopy.info.education.delete(id);

    setResumeData(dataCopy);
  }

  return (
    <>
      <main>
        <h1>Resume Builder</h1>
        <div className="build-preview-container">
          <Builder
            resumeData={resumeData}
            updateData={updateData}
            addExperience={addNewExperience}
            removeExperience={removeExperience}
            addSchool={addNewSchool}
            removeEducation={removeEducation}
          />
          <Preview data={resumeData} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
