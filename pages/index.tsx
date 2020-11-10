import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import SantaForm from "./components/SantaForm";

export default function Home() {
  return (
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
        <SantaForm />
      </main>
    </div>
  );
}
