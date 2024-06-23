import React from 'react'

import styles from './gallery-item.module.scss';
import Image from 'next/image';


const GalleryItem = ({image, size}) => {
  return (
    <div className={`${styles.item} ${styles[`s-${size}`]}`}>
      <Image src={image} alt="Art" fill/>
      <div className={styles['top-left']}/>
      <div className={styles['top-right']}/>
      <div className={styles['bottom-right']}/>
      <div className={styles['bottom-left']}/>
    </div>
  )
}

export default GalleryItem
