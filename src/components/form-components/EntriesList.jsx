import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGrip,
  faPlus,
  faTrash,
  faPenToSquare,
  faGraduationCap,
  faBriefcase,
  faBook,
  faImage,
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
    removeEntry,
    updateActiveId,
    uploadSkillIcon,
    removeSkillIcon,
  } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style}>
      <div className="list-item-row">
        <FontAwesomeIcon
          icon={faGrip}
          className="grip-dots"
          {...attributes}
          {...listeners}
        />
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => updateData(e, listType, id)}
          maxLength={listType === 'skill' ? 15 : 48}
        />

        {listType === 'skill' ? (
          <label className="skill-icon-input">
            <FontAwesomeIcon icon={faImage} />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadSkillIcon(e, id)}
            />
          </label>
        ) : (
          <button onClick={handleEditButton}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        )}

        <button onClick={() => removeEntry(listType, id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>

      {data.photoSrc !== '' && data.photoSrc !== undefined && (
        <div className="list-item-row icon-scale-row">
          <label htmlFor={'icon-' + id}>Icon Scale</label>
          <input
            type="range"
            name="iconScale"
            min={1}
            max={99}
            value={data.iconScale}
            onChange={(e) => updateData(e, listType, id)}
          />
          <input
            className="icon-scale-num-input"
            id={'icon-' + id}
            type="number"
            name="iconScale"
            min={1}
            max={99}
            value={data.iconScale}
            onChange={(e) => updateData(e, listType, id)}
          />
          <button onClick={() => removeSkillIcon(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </li>
  );

  function handleEditButton() {
    updateActiveId(id);
  }
}

export default function EntriesList(props) {
  const { defaults, data, listType, uploadSkillIcon, removeSkillIcon } = props;
  const { addEntry, removeEntry, updateData, updateActiveId, handleDragEnd } =
    defaults;

  const icons = {
    experience: faBriefcase,
    education: faGraduationCap,
    skill: faBook,
  };

  function handleAdd() {
    const id = addEntry(listType);

    if (listType !== 'skill') {
      updateActiveId(id);
    }
  }

  return (
    // draggable context
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => handleDragEnd(event, listType, data)}>
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
              uploadSkillIcon={uploadSkillIcon}
              removeSkillIcon={removeSkillIcon}
            />
          ))}
        </SortableContext>
      </ul>

      {/* no entries found message */}
      {[...data.entries()].length === 0 && (
        <div className="no-entries">No entries found...</div>
      )}

      {/* add entry button */}
      <button className="add-button" onClick={handleAdd}>
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;
        <FontAwesomeIcon icon={icons[listType]} />
      </button>
    </DndContext>
  );
}
