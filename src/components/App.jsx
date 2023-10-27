import { useState } from 'react';
import Builder from './Builder';
import Preview from './Preview';
import Footer from './Footer';

function App() {
  const [resumeData, setResumeData] = useState({
    info: {
      //general
      name: '',
      phone: '',
      email: '',
      website: '',
      blurb: '',

      //experience
      employer: '',
      emp_start: '',
      emp_end: '',
      responsibility: '',

      //school
      school: '',
      location: '',
      ed_start: '',
      ed_end: '',
      program: '',
      addition: '',
    },
  });

  function updateData(e) {
    console.log(`change state: ${e.target.value}`);

    const dataCopy = { ...resumeData };

    dataCopy.info[e.target.name] = e.target.value;

    setResumeData(dataCopy);
  }

  return (
    <>
      <main>
        <h1>Resume Builder</h1>
        <div className="build-preview-container">
          <Builder updateData={updateData} />
          <Preview data={resumeData} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
