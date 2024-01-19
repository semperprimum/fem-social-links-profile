import { SocialsItem } from "./SocialsItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from "./styles/Socials.module.scss";

export function SocialsList({ socials, person, setPerson }) {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...socials];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const _person = { ...person };
    _person.socials = items;

    setPerson(_person);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="socials">
        {(provided) => (
          <ul
            className={styles.list}
            role="list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {socials.map((social, index) => (
              <Draggable key={social.id} draggableId={social.id} index={index}>
                {(provided) => (
                  <SocialsItem provided={provided} social={social} />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
