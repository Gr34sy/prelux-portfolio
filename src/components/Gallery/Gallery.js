"use client";
import styles from "./gallery.module.scss";
// hooks
import { useState } from "react";
// images
import jeden from "../../assets/artworks/1.png";
import dwaRokJerzy from "../../assets/artworks/2rokJerzy.png";
import trzyRefki from "../../assets/artworks/3refki.png";
import czteryTrojki from "../../assets/artworks/3333.png";
import bagnoType from "../../assets/artworks/bagnoType.png";
import choinka from "../../assets/artworks/choinka.png";
import creepy from "../../assets/artworks/creepy.png";
import ddfd from "../../assets/artworks/ddfd.png";
import enviro from "../../assets/artworks/enviro.png";
import final from "../../assets/artworks/final.png";
import interior from "../../assets/artworks/interior.png";
import jadziaFinal from "../../assets/artworks/jadziaFinal.png";
import kozaczek from "../../assets/artworks/kozaczek.png";
import lesGo from "../../assets/artworks/lesGo.png";
import leszy from "../../assets/artworks/leszy.png";
import nutKing from "../../assets/artworks/nutKing.png";
import okej from "../../assets/artworks/okej.png";
import postacMikroorganizmy from "../../assets/artworks/postacMikroorganizmy.png";
import potwor2 from "../../assets/artworks/potwor2.png";
import ptak from "../../assets/artworks/ptak.png";
import robotykonn from "../../assets/artworks/robotykonn.png";
import samaLama from "../../assets/artworks/samaLama.png";
import soGood from "../../assets/artworks/soGood.png";
import spadam from "../../assets/artworks/spadam.png";
import splashart1 from "../../assets/artworks/splashart1.png";
import szamann from "../../assets/artworks/szamann.png";
import szukers from "../../assets/artworks/szukers.png";
import nacukrowany from "../../assets/artworks/nacukrowany.png";
import zvz from "../../assets/artworks/zvz.png";
import zycie from "../../assets/artworks/zycie.png";

// components
import GalleryItem from "@/components/GalleryItem/GalleryItem";
import Overlay from "@/components/Overlay/Overlay";

const Gallery = () => {
  const [overlayImages, setOverlayImages] = useState([]);

  function showOverlay(images) {
    setOverlayImages([...images]);
  }
  function hideOverlay() {
    setOverlayImages([]);
  }

  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>My artworks</h1>
      <div className={styles.grid}>
        <GalleryItem image={jeden} size={1} action={showOverlay} />
        <GalleryItem image={dwaRokJerzy} size={1} action={showOverlay} />
        <GalleryItem image={trzyRefki} size={1} action={showOverlay} />
        <GalleryItem image={czteryTrojki} size={2} action={showOverlay} />

        <GalleryItem image={creepy} size={1} action={showOverlay} />
        <GalleryItem image={ddfd} size={1} action={showOverlay} />
        <GalleryItem image={enviro} size={2} action={showOverlay} />
        <GalleryItem image={final} size={2} action={showOverlay} />

        <GalleryItem image={interior} size={2} action={showOverlay} />
        <GalleryItem image={jadziaFinal} size={1} action={showOverlay} />
        <GalleryItem image={kozaczek} size={2} action={showOverlay} />
        <GalleryItem image={lesGo} size={1} action={showOverlay} />

        <GalleryItem image={leszy} size={1} action={showOverlay} />
        <GalleryItem image={nutKing} size={2} action={showOverlay} />
        <GalleryItem image={okej} size={1} action={showOverlay} />
        <GalleryItem
          image={postacMikroorganizmy}
          size={1}
          action={showOverlay}
        />

        <GalleryItem image={potwor2} size={2} action={showOverlay} />
        <GalleryItem image={ptak} size={1} action={showOverlay} />
        <GalleryItem image={robotykonn} size={1} action={showOverlay} />
        <GalleryItem image={samaLama} size={1} action={showOverlay} />

        <GalleryItem image={soGood} size={1} action={showOverlay} />
        <GalleryItem image={spadam} size={1} action={showOverlay} />
        <GalleryItem image={splashart1} size={2} action={showOverlay} />
        <GalleryItem image={szamann} size={1} action={showOverlay} />

        <GalleryItem image={szukers} size={2} action={showOverlay} />
        <GalleryItem image={nacukrowany} size={2} action={showOverlay} />
        <GalleryItem image={zvz} size={1} action={showOverlay} />
        <GalleryItem image={zycie} size={1} action={showOverlay} />

        <GalleryItem image={bagnoType} size={1} action={showOverlay} />
        <GalleryItem image={choinka} size={1} action={showOverlay} />
      </div>
      <Overlay images={overlayImages} hide={hideOverlay} />
    </div>
  );
};

export default Gallery;
