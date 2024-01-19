import { useState } from "react";
import avatar from "../assets/images/avatar-jessica.jpeg";
import styles from "./styles/Header.module.scss";

export function Header({ person }) {
  return (
    <div className={styles.headerWrapper}>
      <img className={styles.image} src={avatar} alt={person.name} />
      <div>
        <h1 className={styles.name}>{person.name}</h1>
        <p className={styles.location}>{person.location}</p>
      </div>
      <p className={styles.bio}>"{person.bio}"</p>
    </div>
  );
}
