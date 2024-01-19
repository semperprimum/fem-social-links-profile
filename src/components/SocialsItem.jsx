import styles from "./styles/Socials.module.scss";
import BarsIcon from "../assets/images/bars-solid.svg?react";

export function SocialsItem({ social, provided }) {
  return (
    <a
      role="listitem"
      className={styles.item}
      href={social.link}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      {social.name}
      <BarsIcon aria-hidden="true" className={styles.icon} />
    </a>
  );
}
