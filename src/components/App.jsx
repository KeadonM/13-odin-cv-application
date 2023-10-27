import { useState } from 'react';
import Builder from './Builder';
import Preview from './Preview';
import Footer from './Footer';

function App() {
  return (
    <>
      <main>
        <h1>Resume Builder</h1>
        <div className="build-preview-container">
          <Builder />
          <Preview />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
