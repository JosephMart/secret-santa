import styles from "../../styles/SantaForm.module.css";

export default function SantaForm() {
  return (
    <div className={styles.SantaForm}>
      {/* Header row */}
      <div className={styles.row}>
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
      <div className={styles.row}>
        <div className={styles.col}>
          <input className={styles.inputText} type="text" />
        </div>
        <div className={styles.col}>
          <input className={styles.inputText} type="text" />
        </div>
        <div className={styles.col + " " + styles.select}>
          <select name="pets" id="pet-select" multiple>
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
      </div>
    </div>
  );
}
