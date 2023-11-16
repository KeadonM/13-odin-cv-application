import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faUser, faDownload } from '@fortawesome/free-solid-svg-icons';

import ReactToPrint from 'react-to-print';

export default function HeaderActions({ data, loadDefaults, previewRef }) {
  return (
    <div className="header-actions">
      {/* <button onClick={console.log(data)}>Data</button> */}

      {/* <button onClick={handleDownload}>
        <FontAwesomeIcon icon={faDownload} />
      </button> */}

      <ReactToPrint
        trigger={() => {
          return (
            <button>
              <span>Print &nbsp;</span>
              <FontAwesomeIcon icon={faPrint} />
            </button>
          );
        }}
        content={() => previewRef.current}
        documentTitle="Resume"
      />

      <button onClick={loadDefaults}>
        <span>Load &nbsp;</span> <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  );
}
