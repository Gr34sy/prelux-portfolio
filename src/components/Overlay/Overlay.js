import React from "react";

import styles from "./overlay.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Overlay = ({ images, hide }) => {
  console.log(images[0]);

  function handleHide() {
    if (typeof hide === "function") {
      hide();
    }
  }

  return (
    <>
      {images != false && (
        <div className={styles.overlay}>
          <div
            className={`${styles.container} ${images[0].height > images[0].width ? styles["container-vertical"] : styles["container-horizontal"]}`}
          >
            <FontAwesomeIcon icon={faXmark} className={styles.xMark} onClick={handleHide}/>
            <Image src={images[0]} alt="Image" fill />
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
