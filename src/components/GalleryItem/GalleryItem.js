import React from 'react'

import styles from './gallery-item.module.scss';
import Image from 'next/image';


const GalleryItem = ({image, images, size, action}) => {

  function handleClick(){
    if(typeof action === 'function'){
      action([image]);
    }
  }

  return (
    <div className={`${styles.item} ${styles[`s-${size}`]}`} onClick={handleClick}>
      <Image src={image} alt="Art" fill/>
      <div className={styles['top-left']}/>
      <div className={styles['top-right']}/>
      <div className={styles['bottom-right']}/>
      <div className={styles['bottom-left']}/>
    </div>
  )
}

export default GalleryItem
