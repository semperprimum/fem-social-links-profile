import styles from "./styles/Socials.module.scss";

export function SocialsItem({ social, provided }) {
  return (
    <a
      className={styles.link}
      href={social.link}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <li className={styles.item}>
        <p>{social.name}</p>
      </li>
    </a>
  );
}
