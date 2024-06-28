import React from 'react'

import styles from './social-links.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faArtstation } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <ul className={styles.list}>
        <li>
          <a href="https://www.instagram.com/prelux.art/"  target="_blank">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
          </a>
          </li>
          <li>
          <a href="https://www.youtube.com/@prelux8186"  target="_blank">
            <FontAwesomeIcon icon={faYoutube} className={styles.icon}/>
          </a>
          </li>

          <li>
          <a href="https://www.artstation.com/prelux" target="_blank">
            <FontAwesomeIcon icon={faArtstation} className={styles.icon}/>
          </a>
        </li>
    </ul>
  )
}

export default SocialLinks
