import styles from "../../styles/SantaForm.module.css";
import User from "../models/User";

type SantaFormRowProps = {
  setUserProp: setUserPropType;
  user: User;
  index: number;
  excludeOptions: User[];
  canRemove: boolean;
  removeSelf: (index: number) => void;
};

export default function SantaFormRow({
  setUserProp,
  user,
  index,
  excludeOptions,
  canRemove,
  removeSelf,
}: SantaFormRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <button onClick={(e) => removeSelf(index)} disabled={canRemove}>
          X
        </button>
      </div>
      <div className={styles.col}>
        <input
          className={styles.inputText}
          type="text"
          value={user.Name}
          onChange={(e) => {
            setUserProp(index, "Name", e.target.value);
          }}
        />
      </div>
      <div className={styles.col}>
        <input
          className={styles.inputText}
          type="text"
          value={user.Email}
          onChange={(e) => {
            setUserProp(index, "Email", e.target.value);
          }}
        />
      </div>
      <div className={styles.col + " " + styles.select}>
        <select
          name="excludeList"
          className={styles.excludeList}
          value={user.ExcludeList.map((u) => u.ID)}
          multiple
          onChange={(e) =>
            setUserProp(
              index,
              "ExcludeList",
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {excludeOptions.map((u) => (
            <option key={`${user.ID}exclude${u.ID}`} value={u.ID}>
              {u.Name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
