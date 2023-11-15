import { v4 as uuidv4, v4 } from 'uuid';
import { useState } from 'react';

import {
  findComplement,
  incrementSaturation,
  incrementBrightness,
} from './utils/colors.js';

import Builder from './Builder';
import Preview from './Preview';
import Footer from './Footer';

import logo from '../assets/ResuCraftLogo.png';
import defaultPhoto from '../assets/defaultPhoto.jpg';

function dataObjectFactory() {
  return {
    experience: {
      name: '',
      position: '',
      exp_start: '',
      exp_end: '',
      responsibility: '',
    },
    education: {
      name: '',
      location: '',
      ed_start: '',
      ed_end: '',
      program: '',
      addition: '',
    },
    skill: {
      name: '',
      photoSrc: '',
      iconScale: '50',
    },
    interest: {
      name: '',
      photoSrc: '',
      iconScale: '50',
    },
  };
}

function defaultData() {
  return {
    info: {
      settings: {
        colors: {
          primaryColor: '#95d8ff',
          secondaryColor: '#ffb36b',

          primaryColorDesat: '#667f99',
          primaryColorDesatDark: '#42658a',

          secondaryColorDark: '#f5993d',

          lightColor: '#fffcfa',
          darkColor: '#000000',
          complementScale: 0.5,
          contrastFactor: 0.5,
        },

        theme: true,
        icons: true,
        trademark: true,
        experienceColumns: true,
        educationColumns: true,
        linkedColors: true,
      },

      general: {
        name: 'Keadon Mitchell',
        title: 'Full Stack Developer',
        blurbTitle: 'About Me',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        photoSrc: defaultPhoto,
      },

      contact: {
        sectionTitle: 'Contact Me',
        phone: '+1 (111) 111-1111',
        email: 'Mitchell.Keadon@outlook.com',
        linkedIn: 'KeadonM',
        website: 'Github.com/KeadonM',
      },

      experience: new Map([
        [
          uuidv4(),
          {
            name: 'ResuCraft',
            position: 'Developer - Personal',
            exp_start: '2023-10',
            exp_end: '',
            responsibility:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Conspicuous Ink',
            position: 'Full Stack - Freelance',
            exp_start: '2023-03',
            exp_end: '2023-04',
            responsibility:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur doloremque nostrum culpa nemo consequuntur.',
          },
        ],
        [
          uuidv4(),
          {
            name: 'AGI Westeel',
            position: 'Load Inspector',
            exp_start: '2018-08',
            exp_end: '2020-01',
            responsibility:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur doloremque nostrum culpa nemo consequuntur.',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Duck Farm',
            position: 'Developer - Personal',
            exp_start: '2018-08',
            exp_end: '2020-01',
            responsibility:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
          },
        ],
      ]),

      education: new Map([
        [
          uuidv4(),
          {
            name: 'The Odin Project',
            location: '',
            ed_start: '2022-08',
            ed_end: '2023-10',
            program: 'JavaScript Curriculum',
            addition:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
          },
        ],
        [
          uuidv4(),
          {
            name: 'University of Winnipeg',
            location: 'Winnipeg, MB, Canada',
            ed_start: '2019-09',
            ed_end: '2020-06',
            program: 'Computer Science',
            addition:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
          },
        ],
      ]),

      skill: new Map([
        [
          uuidv4(),
          {
            name: 'HTML',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'CSS',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'JS',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'SCSS',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'TS',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'REACT',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'GIT',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'VITE',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'NPM',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'VERCEL',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'FIGMA',
            photoSrc: '',
            iconScale: 50,
          },
        ],
      ]),

      interest: new Map([
        [
          uuidv4(),
          {
            name: 'Poker',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Bowling',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Counter Strike',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Cooking',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Photography',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Travel',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Philosophy',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Bouldering',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Open Source',
            photoSrc: '',
            iconScale: '50',
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
        colors: {
          primaryColor: '#95d8ff',
          secondaryColor: '#ffb36b',

          primaryColorDesat: '#667f99',
          primaryColorDesatDark: '#42658a',

          secondaryColorDark: '#f5993d',

          lightColor: '#fffcfa',
          darkColor: '#000000',

          complementScale: 0.5,
          contrastFactor: 0.5,
        },
        theme: true,
        icons: true,
        trademark: true,
        experienceColumns: true,
        educationColumns: true,
        linkedColors: true,
      },

      general: {
        name: '',
        title: '',
        blurbTitle: '',
        blurb: '',
        photoSrc: '',
      },

      contact: {
        sectionTitle: '',
        phone: '',
        email: '',
        linkedIn: '',
        website: '',
      },

      experience: new Map([]),

      education: new Map([]),

      skill: new Map([]),

      interest: new Map([]),
    },
  });

  function loadDefaults() {
    setResumeData(defaultData());
  }

  function updateData(e, type, id) {
    console.log(
      'Updating: ' +
        e.target.name +
        ' in ' +
        type +
        ' to ' +
        e.target.value +
        ' at id: ' +
        id
    );

    const dataCopy = { ...resumeData };

    if (id !== false) {
      const element = dataCopy.info[type].get(id);

      element[e.target.name] = e.target.value;

      dataCopy.info[type].set(id, element);
    } else {
      if (e.target.value !== 'on') {
        dataCopy.info[type][e.target.name] = e.target.value;
      } else {
        dataCopy.info[type][e.target.name] = e.target.checked;
      }
    }

    setResumeData(dataCopy);
  }

  function updateColor(
    color = resumeData.info.settings.colors.primaryColor,
    colorType = 'primary',
    contrastFactor = resumeData.info.settings.colors.contrastFactor,
    complementScale = resumeData.info.settings.colors.complementScale
  ) {
    const dataCopy = { ...resumeData };

    let primaryColor = resumeData.info.settings.colors.primaryColor;
    let secondaryColor = resumeData.info.settings.colors.secondaryColor;

    if (resumeData.info.settings.linkedColors) {
      if (colorType === 'primary') {
        primaryColor = color;
        secondaryColor = findComplement(color);
      } else if (colorType === 'secondary') {
        primaryColor = findComplement(color);
        secondaryColor = color;
      }
    } else if (colorType !== 'none') {
      if (colorType === 'primary') primaryColor = color;
      else secondaryColor = color;
    }

    const primaryColorDesat = incrementBrightness(
      incrementSaturation(primaryColor, -contrastFactor * 0.33),
      -contrastFactor * 0.33
    );

    const primaryColorDesatDark = incrementBrightness(
      incrementSaturation(primaryColorDesat, contrastFactor * 0.1),
      -contrastFactor * 0.1
    );

    const secondaryColorDark = incrementBrightness(
      secondaryColor,
      -contrastFactor * 0.25
    );

    const lightColor = incrementBrightness(
      primaryColor,
      Math.min(0.5, contrastFactor * 0.66)
    );

    const darkColor = incrementBrightness(
      primaryColorDesat,
      -contrastFactor * 1.5
    );

    const colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,

      primaryColorDesat: primaryColorDesat,
      primaryColorDesatDark: primaryColorDesatDark,

      secondaryColorDark: secondaryColorDark,

      lightColor: lightColor,
      darkColor: darkColor,

      complementScale: complementScale,
      contrastFactor: contrastFactor,
    };

    dataCopy.info.settings.colors = colors;

    setResumeData(dataCopy);
  }

  function uploadPicture(e) {
    const dataCopy = { ...resumeData };

    dataCopy.info.general.photoName = e.target.files[0].name;
    dataCopy.info.general.photoSrc = URL.createObjectURL(e.target.files[0]);

    setResumeData(dataCopy);
  }

  function addEntry(type) {
    console.log('Adding a ' + type + ' entry');

    const id = uuidv4();
    const dataCopy = { ...resumeData };

    dataCopy.info[type].set(id, dataObjectFactory()[type]);
    setResumeData(dataCopy);

    return id;
  }

  function removeEntry(type, id) {
    const dataCopy = { ...resumeData };

    dataCopy.info[type].delete(id);

    setResumeData(dataCopy);
  }

  function uploadIcon(e, type, id) {
    console.log('uploading icon ' + type + ' ' + id);
    const dataCopy = { ...resumeData };

    const element = dataCopy.info[type].get(id);
    element.photoSrc = URL.createObjectURL(e.target.files[0]);

    dataCopy.info[type].set(id, element);

    e.target.value = null;
    setResumeData(dataCopy);
  }

  function removeIcon(type, id) {
    const dataCopy = { ...resumeData };

    const element = dataCopy.info[type].get(id);
    element.photoSrc = '';
    element.iconScale = '50';

    dataCopy.info[type].set(id, element);

    setResumeData(dataCopy);
  }

  function updateMap(type, map) {
    const dataCopy = { ...resumeData };

    dataCopy.info[type] = map;

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
            updateColor={updateColor}
            uploadPicture={uploadPicture}
            addEntry={addEntry}
            removeEntry={removeEntry}
            uploadIcon={uploadIcon}
            removeIcon={removeIcon}
            loadDefaults={loadDefaults}
            updateMap={updateMap}
          />
          <Preview data={resumeData} settings={resumeData.info.settings} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
