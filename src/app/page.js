import Image from "next/image";
import styles from "../styles/scss/pages/homepage.module.scss";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <div className="homepage__header">
        O mnie
      </div>

      <div className="homepage__about-me">
        Me
      </div>
    </main>
  );
}
