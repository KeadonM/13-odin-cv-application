import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

import ListEntry from './ListEntry.jsx';

export default function SoftSkills({ data, settings }) {
  return (
    <div className="soft-skills resume-section">
      {[...data.map.entries()].length > 0 && (
        <h2 className="aside-section-title preview-title-2">
          <span
            className="preview-general-icon preview-secondary-clr-400 "
            style={{
              '--clr': settings.colors.secondaryColorDark,
              display: settings.icons === true ? 'inline' : 'none',
            }}>
            <FontAwesomeIcon icon={faBrain} />
          </span>
          {data.sectionTitle}
        </h2>
      )}

      <ul
        className={
          data.duoTone === true
            ? 'list-container preview-body-4 duo-tone'
            : 'list-container preview-body-4'
        }>
        {[...data.map.entries()].map((entry) => {
          return (
            <ListEntry
              key={entry[0]}
              data={entry[1]}
              clr={settings.colors.secondaryColorDark}
              clrBgAlt={settings.colors.primaryColorDesatDark}
              clrShadow={'rgba(0, 0, 0, 0.3)'}
              clrShadowAlt={'rgba(0, 0, 0, 0.3)'}
              type="softSkill"
              settings={settings}
            />
          );
        })}
      </ul>
    </div>
  );
}
