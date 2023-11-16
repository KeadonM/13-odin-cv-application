import { v4 as uuidv4, v4 } from 'uuid';
import { useState, useRef } from 'react';

import {
  findComplement,
  incrementSaturation,
  incrementBrightness,
} from './utils/colors.js';

import { dataObjectFactory, defaultData } from './utils/dataObjects.js';

import logo from '../assets/ResuCraftLogo.png';
import icon from '../assets/ResuCraft-icon.png';
import HeaderActions from './HeaderActions.jsx';
import Builder from './Builder';
import { Preview } from './Preview';
import Footer from './Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faUser, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useReactToPrint } from 'react-to-print';

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
        previewRef: null,
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

  const previewRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => previewRef.current,
  //   copyStyles: true,
  // });

  return (
    <>
      <header>
        <img src={logo} className="logo" />
        <img src={icon} className="icon" />
        {/* <button onClick={handlePrint}>
          <FontAwesomeIcon icon={faPrint} />
        </button> */}
        <HeaderActions loadDefaults={loadDefaults} previewRef={previewRef} />
      </header>

      <main>
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
            updateMap={updateMap}
          />
          <Preview
            ref={previewRef}
            data={resumeData}
            settings={resumeData.info.settings}
          />
        </div>
      </main>

      <Footer />
    </>
  );

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

    if (e !== 'delete') {
      dataCopy.info.general.photoName = e.target.files[0].name;
      dataCopy.info.general.photoSrc = URL.createObjectURL(e.target.files[0]);
    } else {
      dataCopy.info.general.photoName = '';
      dataCopy.info.general.photoSrc = '';
    }

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
}

export default App;
