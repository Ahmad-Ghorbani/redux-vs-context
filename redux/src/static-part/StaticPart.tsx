import styles from "./StaticPart.module.css";

function StaticPart() {
  return <h1 className={styles.header}>This section would not be updated</h1>;
}

export default StaticPart;
