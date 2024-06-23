import React from 'react';

import styles from './overlay.module.scss';

const Overlay = ({images}) => {
  return (
    <div className={images != false ? `${styles.overlay} ${styles.active}` : `${styles.overlay}` }>
      <div>

      </div>
    </div>
  )
}

export default Overlay
