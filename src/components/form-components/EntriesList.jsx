import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGrip,
  faPlus,
  faTrash,
  faPenToSquare,
  faImage,
  faEye,
  faEyeSlash,
  faCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableListItem(props) {
  const {
    id,
    data,
    listType,
    updateData,
    updateBulletPoint,
    removeEntry,
    updateActiveId,
    uploadIcon,
    removeIcon,
    isBulletPoint,
    parentId,
  } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handleUpdate(e) {
    if (!isBulletPoint) updateData(e, listType, id);
    else updateBulletPoint(e, listType, id, parentId);
  }

  return (
    <li ref={setNodeRef} style={style}>
      <div className="list-item-row">
        <FontAwesomeIcon
          icon={faGrip}
          className="grip-dots list-item-icon"
          {...attributes}
          {...listeners}
        />
        <input
          className="name-input"
          type="text"
          name="name"
          value={data.name}
          onChange={handleUpdate}
        />

        {listType === 'skill' ||
        listType === 'softSkill' ||
        listType === 'interest' ? (
          data.photoSrc === '' ? (
            <label className="skill-icon-input">
              <FontAwesomeIcon icon={faImage} />
              <input
                className="visually-hidden"
                type="file"
                accept="image/*"
                onChange={(e) => uploadIcon(e, listType, id)}
              />
            </label>
          ) : (
            <label className="switch switch-button">
              <input
                type="checkbox"
                checked={data.nameVisible}
                name="nameVisible"
                onChange={(e) => updateData(e, listType, id)}
              />
              <span className="slider round no-thumb">
                <FontAwesomeIcon
                  icon={data.nameVisible === true ? faEye : faEyeSlash}
                />
              </span>
            </label>
          )
        ) : (
          isBulletPoint === false && (
            <button onClick={handleEditButton}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => removeEntry(listType, id, isBulletPoint, parentId)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>

      {data.photoSrc !== '' && data.photoSrc !== undefined && (
        <div className="list-item-row icon-scale-row">
          <FontAwesomeIcon icon={faGrip} className="grip-dots" />

          <input
            type="range"
            name="iconScale"
            min={10}
            max={99}
            value={data.iconScale}
            onChange={(e) => updateData(e, listType, id)}
          />

          <div className="scale-title-container">
            <div className="list-item-row">
              <input
                className="icon-scale-num-input"
                id={'icon-' + id}
                type="number"
                name="iconScale"
                min={10}
                max={99}
                value={data.iconScale}
                onChange={(e) => updateData(e, listType, id)}
              />
              <button onClick={() => removeIcon(listType, id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );

  function handleEditButton() {
    updateActiveId(id);
  }
}

export default function EntriesList(props) {
  const {
    defaults,
    data,
    listType,
    uploadIcon,
    removeIcon,
    isBulletPoint = false,
    parentId,
    setActiveList,
  } = props;
  const {
    icons,
    settings,
    addEntry,
    removeEntry,
    updateData,
    updateBulletPoint,
    updateActiveId,
    handleDragEnd,
  } = defaults;

  function handleAdd() {
    const id = addEntry(listType);

    if (listType !== 'skill') {
      updateActiveId(id);
    }
  }

  const columnsToggle = (() => {
    if (listType === 'experience' || listType === 'education') {
      return (
        <div className="input-label">
          Columns
          <label className="switch">
            <input
              type="checkbox"
              checked={settings[listType + 'Columns']}
              name={listType + 'Columns'}
              onChange={(e) => updateData(e, 'settings', false)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      );
    }
  })();

  const backButton = (() => {
    if (
      listType === 'skill' ||
      listType === 'softSkill' ||
      listType === 'interest'
    ) {
      return (
        <button onClick={() => setActiveList('list')}>
          <FontAwesomeIcon icon={faCircleLeft} />
        </button>
      );
    }
  })();

  return (
    // draggable context
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) =>
        handleDragEnd(event, listType, data, isBulletPoint, parentId)
      }>
      {/* sortable unordered list */}
      <ul className="input-list">
        <SortableContext
          items={[...data.keys()]}
          strategy={verticalListSortingStrategy}>
          {/* sortable list item */}
          {[...data.entries()].map((entry) => (
            <SortableListItem
              handle={true}
              key={entry[0]}
              id={entry[0]}
              data={entry[1]}
              listType={listType}
              updateData={updateData}
              removeEntry={removeEntry}
              updateActiveId={updateActiveId}
              uploadIcon={uploadIcon}
              removeIcon={removeIcon}
              isBulletPoint={isBulletPoint}
              parentId={parentId}
              updateBulletPoint={updateBulletPoint}
            />
          ))}
        </SortableContext>
      </ul>

      {/* no entries found message */}
      {[...data.entries()].length === 0 && (
        <div className="no-entries">No entries found...</div>
      )}

      {isBulletPoint === false && (
        <div className="columns-add-container">
          {columnsToggle}
          {backButton}
          {/* add entry button */}
          <button className="add-button" onClick={handleAdd}>
            <FontAwesomeIcon icon={faPlus} />
            &nbsp;
            <FontAwesomeIcon icon={icons[listType]} />
          </button>
        </div>
      )}
    </DndContext>
  );
}
