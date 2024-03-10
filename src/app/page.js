import Image from "next/image";
import styles from "../styles/scss/pages/homepage.module.scss";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <div className={styles.homepage__header}>
        <h1 className={styles.homepage__header_h1}>O Mnie </h1>
      </div>

      <div className={styles.homepage__about}>
        Me
      </div>
    </main>
  );
}
