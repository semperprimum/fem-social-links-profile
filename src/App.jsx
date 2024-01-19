import { Attribution, Container, Header, SocialsList } from "./components";
import styles from "./App.module.scss";
import data from "./data.json";
import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState(data.person);
  return (
    <>
      <main className={styles.wrapper}>
        <Container>
          <Header person={person} />
          <SocialsList
            socials={person.socials}
            setPerson={setPerson}
            person={person}
          />
        </Container>
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}
