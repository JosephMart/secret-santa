import Head from "next/head";
import Image from "next/image";
import {
  Flex,
  View,
  Provider,
  defaultTheme,
  Button,
  Picker,
  Section,
  Item,
} from "@adobe/react-spectrum";

import styles from "../styles/Home.module.css";
import SantaForm from "./components/SantaForm";

let sections = [
  {
    name: "Animals",
    children: [{ name: "Aardvark" }, { name: "Kangaroo" }, { name: "Snake" }],
  },
  {
    name: "People",
    children: [{ name: "Danni" }, { name: "Devon" }, { name: "Ross" }],
  },
];

export default function Home() {
  console.log(defaultTheme);
  console.log(styles.container);
  return (
    // <Provider theme={defaultTheme} colorScheme="dark">
    <div className={styles.container}>
      <Head>
        <title>Secret Santa Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/santa-hat.svg"
          alt="Picture of the author"
          width={400}
          height={400}
        />

        <h1 className={styles.input}>&#0040;Secret Santa Generator&#0041;</h1>
        <button className={styles.submitButton}>Generate</button>
      </header>

      <main>
        <Picker label="Items" items={sections}>
          {(section) => (
            <Section
              key={section.name}
              items={section.children}
              title={section.name}
            >
              {(item) => <Item key={item.name}>{item.name}</Item>}
            </Section>
          )}
        </Picker>
        <SantaForm />
      </main>
    </div>
    // </Provider>
  );
}
