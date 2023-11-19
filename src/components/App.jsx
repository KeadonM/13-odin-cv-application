import { v4 as uuidv4, v4 } from 'uuid';
import { useState, useRef } from 'react';

import {
  findComplement,
  incrementSaturation,
  incrementBrightness,
} from './utils/colors.js';

import {
  dataObjectFactory,
  defaultData,
  initialData,
} from './utils/dataObjects.js';

import logo from '../assets/ResuCraftLogo.png';
import icon from '../assets/ResuCraft-icon.png';
import HeaderActions from './HeaderActions.jsx';
import Builder from './form-components/Builder.jsx';
import { Preview } from './resume-components/Preview.jsx';
import Footer from './Footer';

function App() {
  const previewRef = useRef();
  const [activeId, setActiveId] = useState('');
  const [activeInput, setActiveInput] = useState('General');
  const [activeList, setActiveList] = useState('list');
  function changeActiveInput(input) {
    setActiveId('');
    setActiveList('list');

    if (input !== activeInput) setActiveInput(input);
    else setActiveInput('');
  }

  const state = {
    activeId: activeId,
    setActiveId: setActiveId,
    activeInput: activeInput,
    changeActiveInput: changeActiveInput,
    activeList: activeList,
    setActiveList: setActiveList,
  };

  const [resumeData, setResumeData] = useState(initialData);

  return (
    <>
      <header>
        <img src={logo} className="logo" />
        <img src={icon} className="icon" />
        <HeaderActions
          data={resumeData}
          loadDefaults={loadDefaults}
          previewRef={previewRef}
        />
      </header>

      <main>
        <div className="build-preview-container">
          <Builder
            resumeData={resumeData}
            state={state}
            updateData={updateData}
            updateColor={updateColor}
            uploadPicture={uploadPicture}
            addEntry={addEntry}
            removeEntry={removeEntry}
            uploadIcon={uploadIcon}
            removeIcon={removeIcon}
            updateMap={updateMap}
            updateBulletPoint={updateBulletPoint}
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
    setActiveInput('General');
    setResumeData(defaultData());
  }

  function updateData(e, type, id = false) {
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
      const element = dataCopy.info[type].map.get(id);

      if (e.target.value !== 'on') {
        element[e.target.name] = e.target.value;
      } else {
        element[e.target.name] = e.target.checked;
      }

      dataCopy.info[type].map.set(id, element);
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

  function uploadIcon(e, type, id) {
    console.log('uploading icon ' + type + ' ' + id);
    const dataCopy = { ...resumeData };

    const element = dataCopy.info[type].map.get(id);
    element.photoSrc = URL.createObjectURL(e.target.files[0]);

    dataCopy.info[type].map.set(id, element);

    e.target.value = null;
    setResumeData(dataCopy);
  }

  function removeIcon(type, id) {
    const dataCopy = { ...resumeData };

    const element = dataCopy.info[type].map.get(id);
    element.photoSrc = '';
    element.iconScale = '50';

    dataCopy.info[type].map.set(id, element);

    setResumeData(dataCopy);
  }

  function addEntry(type, parentId, isBulletPoint = false) {
    console.log('Adding a ' + type + ' entry');

    const id = uuidv4();
    const dataCopy = { ...resumeData };

    if (!isBulletPoint)
      dataCopy.info[type].map.set(id, dataObjectFactory()[type]);
    else
      dataCopy.info[type].map
        .get(parentId)
        .bulletPoints.set(id, dataObjectFactory().bulletPoint);

    setResumeData(dataCopy);

    return id;
  }

  function removeEntry(type, id, isBulletPoint = false, parentId) {
    const dataCopy = { ...resumeData };

    if (!isBulletPoint) dataCopy.info[type].map.delete(id);
    else dataCopy.info[type].map.get(parentId).bulletPoints.delete(id);

    setResumeData(dataCopy);
  }

  function updateMap(type, map, isBulletPoint = false, parentId) {
    const dataCopy = { ...resumeData };

    if (!isBulletPoint) dataCopy.info[type].map = map;
    else dataCopy.info[type].map.get(parentId).bulletPoints = map;

    setResumeData(dataCopy);
  }

  function updateBulletPoint(e, type, id, parentId) {
    const dataCopy = { ...resumeData };

    const element = dataCopy.info[type].map.get(parentId).bulletPoints.get(id);

    element[e.target.name] = e.target.value;

    setResumeData(dataCopy);
  }
}

export default App;
