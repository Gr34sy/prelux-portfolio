"use client";
import styles from "./gallery.module.scss";
// hooks
import { useState } from "react";
// images
import sutryk from "../../assets/images/sutryk.jpg";
import rybka from "../../assets/images/rybka.jpg";
import polanski from "../../assets/images/polanski.png";
// components 
import GalleryItem from "@/components/GalleryItem/GalleryItem";
import Overlay from "@/components/Overlay/Overlay";

const Gallery = () => {
  const [overlayImages, setOverlayImages] = useState([]);

  function setOverlay(images){
      setOverlayImages([...images]);
  }


  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>My artworks</h1>
      <div className={styles.grid}>
        <GalleryItem image={sutryk} size={2} action={setOverlay} />
        <GalleryItem image={rybka} size={1} action={setOverlay} />
        <GalleryItem image={polanski} size={2} action={setOverlay} />
        <GalleryItem image={sutryk} size={1} action={setOverlay} />
        <GalleryItem image={polanski} size={2} action={setOverlay} />
        <GalleryItem image={rybka} size={1} action={setOverlay} />
        <GalleryItem image={polanski} size={1} action={setOverlay} />
        <GalleryItem image={rybka} size={1} action={setOverlay} />
        <GalleryItem image={sutryk} size={2} action={setOverlay} />
        <GalleryItem image={rybka} size={1} action={setOverlay} />
        <GalleryItem image={sutryk} size={2} action={setOverlay} />
        <GalleryItem image={sutryk} size={2} action={setOverlay} />
        <GalleryItem image={polanski} size={2} action={setOverlay} />
        <GalleryItem image={sutryk} size={2} action={setOverlay} />
        <GalleryItem image={rybka} size={1} action={setOverlay} />
      </div>
      <Overlay images={overlayImages}/>
    </div>
  );
};

export default Gallery;
