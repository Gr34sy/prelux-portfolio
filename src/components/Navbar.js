//styles
import styles from "../styles/scss/components/navbar.module.scss";

//images
import logo from "../assets/images/logo.png";

//components
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar__logo}>
        <Image src={logo} width={60} height={60} alt="Prelux logo" />
        <p>Jerzy Legierski</p>
      </Link>

      <ul className={styles.navbar__list}>
        <li>
          <Link href="/portfolio" className={styles.navbar__list_link}>Portfolio</Link>
        </li>

        <li>
          <Link href="/contact" className={styles.navbar__list_link}>Contact</Link>
        </li>

        <li className={styles.navbar__list_icons}>
          <Link href="/" className={styles.navbar__list_icon}></Link>
          <Link href="/" className={styles.navbar__list_icon}></Link>
          <Link href="/" className={styles.navbar__list_icon}></Link>
        </li>
      </ul>
    </nav>
  );
}
