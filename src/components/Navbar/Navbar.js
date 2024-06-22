"use client";

//styles
import styles from './navbar.module.scss';

//images
import logo from "../../assets/images/logo.png";
import { faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

//components
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar__logo}>
        <Image src={logo} width={60} height={60} alt="Prelux logo" />
        <p>Jerzy Legierski</p>
      </Link>

      <ul className={styles.navbar__list}>
        <li>
          <Link href="/portfolio" className={styles.navbar__list_link}>
            Portfolio
          </Link>
        </li>

        <li>
          <Link href="/contact" className={styles.navbar__list_link}>
            Contact
          </Link>
        </li>


        <li className={styles.navbar__list_icons}>
          <a href="https://www.instagram.com/prelux.art/" className={styles.navbar__list_icon} target="_blank">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>

          <a href="https://www.youtube.com/@prelux8186" className={styles.navbar__list_icon} target="_blank">
            <FontAwesomeIcon icon={faYoutube}/>
          </a>

          <a href="https://www.artstation.com/prelux" className={styles.navbar__list_icon} target="_blank">
            <FontAwesomeIcon icon={faArtstation}/>
          </a>
        </li>
      </ul>
    </nav>
  );
}
