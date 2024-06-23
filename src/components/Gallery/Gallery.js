import React from 'react'

import styles from './gallery.module.scss';

const Gallery = ({children}) => {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>My artworks</h1>
      <div className={styles.grid}>
        {children}
      </div>
    </div>
  )
}

export default Gallery
