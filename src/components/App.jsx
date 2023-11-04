import { v4 as uuidv4, v4 } from 'uuid';
import { useState } from 'react';

import Builder from './Builder';
import Preview from './Preview';
import Footer from './Footer';

import logo from '../assets/ResuCraftLogo.png';
import defaultPhoto from '../assets/defaultPhoto.jpg';

function experienceObject() {
  return {
    name: '',
    position: '',
    exp_start: '',
    exp_end: '',
    responsibility: '',
  };
}

function educationObject() {
  return {
    name: '',
    location: '',
    ed_start: '',
    ed_end: '',
    program: '',
    addition: '',
  };
}

function skillObject() {
  return {
    skill: '',
  };
}

function defaultData() {
  return {
    info: {
      settings: {
        color: '#95d8ff',
      },

      general: {
        name: 'Keadon Mitchell',
        title: 'Full Stack Developer',
        phone: '+1 (111) 111-1111',
        email: 'Mitchell.Keadon@outlook.com',
        website: 'Github.com/KeadonM',
        photoName: '',
        photoSrc: defaultPhoto,
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },

      experience: new Map([
        [
          uuidv4,
          {
            name: 'Westeel',
            position: 'Load Inspector',
            exp_start: '2018-08',
            exp_end: '2020-01',
            responsibility:
              '-Load inspection -Load inspection -Load inspection -Load inspection',
          },
        ],
      ]),

      education: new Map([
        [
          uuidv4(),
          {
            name: 'University of Winnipeg',
            location: 'Winnipeg, MB, Canada',
            ed_start: '2019-09',
            ed_end: '2020-06',
            program: 'Computer Science',
            addition: 'Philosophy, Political Science, Psychology',
          },
        ],
      ]),

      skills: new Map([
        [
          uuidv4(),
          {
            skill: 'HTML',
          },
        ],
        [
          uuidv4(),
          {
            skill: 'CSS',
          },
        ],
        [
          uuidv4(),
          {
            skill: 'JS',
          },
        ],
      ]),
    },
  };
}

function App() {
  const [resumeData, setResumeData] = useState({
    info: {
      settings: {
        color: '#95d8ff',
      },

      general: {
        name: '',
        phone: '',
        email: '',
        website: '',
        photoName: '',
        photoSrc: '',
        blurb: '',
      },

      experience: new Map([]),

      education: new Map([]),

      skills: new Map([]),
    },
  });

  function loadDefaults() {
    setResumeData(defaultData());
  }

  function uploadPicture(e) {
    const dataCopy = { ...resumeData };

    dataCopy.info.general.photoName = e.target.files[0].name;
    dataCopy.info.general.photoSrc = URL.createObjectURL(e.target.files[0]);

    setResumeData(dataCopy);
  }

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

  function addNewSkill(e) {
    console.log(`add new skill`);

    const id = uuidv4();
    const dataCopy = { ...resumeData };

    dataCopy.info.skills.set(id, skillObject());
    setResumeData(dataCopy);

    return id;
  }

  function removeSkill(id) {
    console.log(`removing Education ${id}`);

    const dataCopy = { ...resumeData };

    dataCopy.info.skills.delete(id);

    setResumeData(dataCopy);
  }

  return (
    <>
      <main>
        <img src={logo} className="logo" />
        <div className="build-preview-container">
          <Builder
            resumeData={resumeData}
            updateData={updateData}
            uploadPicture={uploadPicture}
            addExperience={addNewExperience}
            removeExperience={removeExperience}
            addSchool={addNewSchool}
            removeEducation={removeEducation}
            addSkill={addNewSkill}
            removeSkill={removeSkill}
            loadDefaults={loadDefaults}
          />
          <Preview data={resumeData} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
