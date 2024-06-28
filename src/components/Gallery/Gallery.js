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

  function showOverlay(images){
    setOverlayImages([...images]);
  }
  function hideOverlay(){
    setOverlayImages([]);
  }



  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>My artworks</h1>
      <div className={styles.grid}>
        <GalleryItem image={sutryk} size={2} action={showOverlay} />
        <GalleryItem image={rybka} size={1} action={showOverlay} />
        <GalleryItem image={polanski} size={2} action={showOverlay} />
        <GalleryItem image={sutryk} size={1} action={showOverlay} />
        <GalleryItem image={polanski} size={2} action={showOverlay} />
        <GalleryItem image={rybka} size={1} action={showOverlay} />
        <GalleryItem image={polanski} size={1} action={showOverlay} />
        <GalleryItem image={rybka} size={1} action={showOverlay} />
        <GalleryItem image={sutryk} size={2} action={showOverlay} />
        <GalleryItem image={rybka} size={1} action={showOverlay} />
        <GalleryItem image={sutryk} size={2} action={showOverlay} />
        <GalleryItem image={sutryk} size={2} action={showOverlay} />
        <GalleryItem image={polanski} size={2} action={showOverlay} />
        <GalleryItem image={sutryk} size={2} action={showOverlay} />
        <GalleryItem image={rybka} size={1} action={showOverlay} />
      </div>
      <Overlay images={overlayImages} hide={hideOverlay}/>
    </div>
  );
};

export default Gallery;
