import React from "react";

import styles from "./overlay.module.scss";
import Image from "next/image";

const Overlay = ({ images }) => {
  return (
    <>
      {images != false && (
        <div className={styles.overlay}>
          <div className={styles.container}>
            <Image src={images[0]} alt="Image" fill/>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
