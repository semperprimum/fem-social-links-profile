import { SocialsItem } from "./SocialsItem";
import styles from "./styles/Socials.module.scss";

export function SocialsList({ socials }) {
  return (
    <ul className={styles.list} role="list">
      {socials.map((social) => (
        <SocialsItem key={social.name} social={social} />
      ))}
    </ul>
  );
}
