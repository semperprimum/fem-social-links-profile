import styles from "./styles/Socials.module.scss";

export function SocialsItem({ social }) {
  return (
    <a href={social.link}>
      <li className={styles.item}>{social.name}</li>
    </a>
  );
}
