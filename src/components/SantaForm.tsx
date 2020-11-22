import styles from "../../styles/SantaForm.module.css";
import User from "../models/User";
import SantaFormRow from "./SantaFormRow";

type SantaFormProps = {
  setUserProp: setUserPropType;
  users: User[];
  removeRow: (index: number) => void;
  addRow: () => void;
};

export default function SantaForm({
  setUserProp,
  users,
  removeRow,
  addRow,
}: SantaFormProps) {
  return (
    <>
      <div className={styles.SantaForm}>
        {/* Header row */}
        <div className={styles.row}>
          <div className={styles.col}></div>
          <div className={styles.col}>
            <h2 className={styles.exclude}>Name</h2>
          </div>
          <div className={styles.col}>
            <h2 className={styles.exclude}>Email</h2>
          </div>
          <div className={styles.col}>
            <h2 className={styles.exclude}>Does not match with</h2>
          </div>
        </div>

        {/* Input rows */}
        {users.map((user, index) => (
          <SantaFormRow
            key={`santaformrow-${index}`}
            user={user}
            index={index}
            excludeOptions={users.filter((u) => u != user && u.Name)}
            setUserProp={setUserProp}
            removeSelf={removeRow}
            canRemove={users.length === 1}
          />
        ))}
      </div>
      <div className={styles.addRow}>
        <div onClick={() => addRow()}>
          <button>+</button>
        </div>
      </div>
    </>
  );
}
