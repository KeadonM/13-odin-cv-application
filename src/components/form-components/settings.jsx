import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrint,
  faTrademark,
  faUser,
  faDownload,
  faLink,
  faLinkSlash,
} from '@fortawesome/free-solid-svg-icons';
import ReactToPrint from 'react-to-print';

export default function Settings({
  updateData,
  updateColor,
  loadDefaults,
  data,
}) {
  function handleUpdate(e) {
    updateData(e, 'settings', false);
  }

  return (
    <>
      <div className="settings-input-container">
        <div className="toggles settings-row">
          <div className="input-label">
            <span>
              <FontAwesomeIcon icon={faTrademark} />
            </span>

            <label className="switch">
              <input
                type="checkbox"
                checked={data.trademark}
                name="trademark"
                onChange={handleUpdate}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="input-label">
            Icons
            <label className="switch">
              <input
                type="checkbox"
                checked={data.icons}
                name="icons"
                onChange={handleUpdate}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="input-label">
            Theme
            <label className="switch">
              <input
                type="checkbox"
                checked={data.theme}
                name="theme"
                onChange={handleUpdate}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="colors settings-column">
          <label className="input-label contrast-slider">
            <input
              type="range"
              min={0.2}
              max={1}
              step={0.01}
              value={data.colors.contrastFactor}
              onChange={(e) => updateColor(undefined, 'none', e.target.value)}
            />
          </label>
          <div className="settings-row">
            <div className="input-label">
              <label
                id="color-selector"
                style={{ backgroundColor: data.colors.primaryColor }}>
                <input
                  className="visually-hidden"
                  type="color"
                  name="color"
                  value={data.colors.primaryColor}
                  onChange={(e) => updateColor(e.target.value, 'primary')}
                />
              </label>
            </div>

            <label className="switch link-button ">
              <input
                type="checkbox"
                checked={data.linkedColors}
                name="linkedColors"
                onChange={handleUpdate}
              />
              <span className="slider round no-thumb">
                <FontAwesomeIcon
                  icon={data.linkedColors === true ? faLink : faLinkSlash}
                />
              </span>
            </label>

            <div className="input-label">
              <label
                id="color-selector"
                style={{ backgroundColor: data.colors.secondaryColor }}>
                <input
                  className="visually-hidden"
                  type="color"
                  name="color"
                  value={data.colors.secondaryColor}
                  onChange={(e) => updateColor(e.target.value, 'secondary')}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
