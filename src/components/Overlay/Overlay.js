import React from "react";

import styles from "./overlay.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Overlay = ({ image, hide }) => {
  function handleHide() {
    if (typeof hide === "function") {
      hide();
    }
  }

  return (
    <>
      {image && (
        <div className={styles.overlay}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.xMark}
            onClick={handleHide}
          />
          <div
            className={`${styles.container} ${
              image.height > image.width
                ? styles["container-vertical"]
                : styles["container-horizontal"]
            }`}
          >
            <Image
              src={image.src}
              alt="Image"
              fill
              style={{
                objectFit: image.height >= image.width ? "contain" : "cover",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
