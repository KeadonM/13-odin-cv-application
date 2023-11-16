import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faUser, faDownload } from '@fortawesome/free-solid-svg-icons';
import ReactToPrint from 'react-to-print';

export default function HeaderActions({ loadDefaults, previewRef }) {
  return (
    <div className="header-actions">
      <button>
        <FontAwesomeIcon icon={faDownload} />
      </button>

      <ReactToPrint
        trigger={() => {
          return (
            <button>
              <FontAwesomeIcon icon={faPrint} />
            </button>
          );
        }}
        content={() => previewRef.current}
        documentTitle="Resume"
      />

      <button onClick={loadDefaults}>
        <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  );
}
