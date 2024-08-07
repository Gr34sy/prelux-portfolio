"use client";

//styles
import styles from "./navbar.module.scss";

//images
import logo from "../../assets/images/logo.png";

//components
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../SocialLinks/SocialLinks";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar__logo}>
        <Image src={logo} width={60} height={60} alt="Prelux logo" />
        <p>Jerzy Legierski</p>
      </Link>

      <ul className={styles.navbar__list}>
        <li>
          <Link href="/artworks" className={styles.navbar__list_link}>
            Artworks
          </Link>
        </li>

        <li>
          <Link href="/contact" className={styles.navbar__list_link}>
            Contact
          </Link>
        </li>

        <SocialLinks />
      </ul>
    </nav>
  );
}
