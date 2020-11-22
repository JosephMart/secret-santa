import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import SantaForm from "../src/components/SantaForm";
import User from "../src/models/User";
import { serializeUsers } from "../src/controllers/Serialization";

export default function Home() {
  const [users, setUser] = useState<User[]>([new User()]);
  const setUserProp: setUserPropType = (
    index: number,
    prop: string,
    value: string | string[]
  ) => {
    setUser((prevState: User[]) => {
      const nextState = [...prevState];
      switch (prop) {
        case "Name":
          nextState[index].Name = value as string;
          break;
        case "Email":
          nextState[index].Email = value as string;
          break;
        case "ExcludeList":
          nextState[index].ExcludeList = (value as string[]).map((ID) =>
            nextState.find((user) => user.ID == ID)
          );
      }
      return nextState;
    });
  };

  const addRow = () =>
    setUser((prevState: User[]) => [...prevState, new User()]);
  const removeRow = (index: number) =>
    setUser((prevState: User[]) =>
      [...prevState].filter((_, i) => i !== index)
    );
  const onSubmit = async () => {
    const rawResponse = await fetch("api/generate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: serializeUsers(users),
    });
    const content: GenerateResult = await rawResponse.json();

    console.log(content);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Secret Santa Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/santa-hat.svg"
          alt="Santa clause hat."
          width={400}
          height={400}
        />

        <h1 className={styles.input}>&#0040;Secret Santa Generator&#0041;</h1>
        <button onClick={onSubmit} className={styles.submitButton}>
          Generate
        </button>
      </header>

      <main>
        <SantaForm
          addRow={addRow}
          removeRow={removeRow}
          setUserProp={setUserProp}
          users={users}
        />
      </main>
    </div>
  );
}
