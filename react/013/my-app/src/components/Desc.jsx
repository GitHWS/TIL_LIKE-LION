import styles from "./desc.module.css";
import { Feature1, Feature2, Feature3 } from "./Feature";

export default function Desc() {
  return (
    <section className={styles.desc}>
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </section>
  );
}
