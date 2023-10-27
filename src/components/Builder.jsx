import { useState } from 'react';

import FormInput from './form-components/FormInput.jsx';
import FormControls from './form-components/FormControls.jsx';

import '../css/inputCard.scss';
function InputCard({ children, onSelection }) {
  return (
    <div className="input-card" onClick={onSelection}>
      {children}
    </div>
  );
}

function Builder({ updateData }) {
  const [activeInput, setActiveInput] = useState(0);

  function changeActiveInput(input) {
    setActiveInput(input);
  }

  return (
    <section aria-labelledby="builder-title" className="builder">
      <h2 id="builder-title">Builder</h2>

      <InputCard onSelection={() => changeActiveInput(0)}>
        <FormInput
          formType="General"
          activeInput={activeInput}
          updateData={updateData}
        />
      </InputCard>

      <InputCard onSelection={() => changeActiveInput(1)}>
        <FormInput
          formType="Education"
          activeInput={activeInput}
          updateData={updateData}
        />
      </InputCard>

      <InputCard onSelection={() => changeActiveInput(2)}>
        <FormInput
          formType="Experience"
          activeInput={activeInput}
          updateData={updateData}
        />
      </InputCard>

      <InputCard onSelection={() => changeActiveInput(3)}>
        <FormInput
          formType="Skills"
          activeInput={activeInput}
          updateData={updateData}
        />
      </InputCard>

      <FormControls />
    </section>
  );
}

export default Builder;
