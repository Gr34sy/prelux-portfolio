import styles from "../styles/scss/pages/homepage.module.scss";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <div className={styles.homepage__header}>
        <h1 className={styles.homepage__header_h1}>O Mnie</h1>
      </div>

      <div className={styles.homepage__about}>
        Moja rola to tworzenie z pasją, szczególnie w obszarze grafiki
        komputerowej. Uwielbiam uśmiechy zadowolonych ludzi i inspiruje innych.
        Gotowy do współpracy i tworzenia dzieł, które poruszają.
      </div>
    </main>
  );
}
