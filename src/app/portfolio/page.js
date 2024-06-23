'use client';
// components
import Gallery from "@/components/Gallery/Gallery";
import GalleryItem from "@/components/GalleryItem/GalleryItem";
import Overlay from "@/components/Overlay/Overlay";

// hooks
import { useState } from "react";

// images
import sutryk from '../../assets/images/sutryk.jpg';
import rybka from  '../../assets/images/rybka.jpg';
import polanski from '../../assets/images/polanski.png';

export default function Portfolio(){
    const [overlayImages, setOverlayImages] = useState([]);

    function setOverlay(images){
        setOverlayImages(images);
    }

    return (
        <main>
           <Gallery>
                <GalleryItem image={sutryk} size={2} action={setOverlay}/>
                <GalleryItem image={rybka} size={1} action={setOverlay}/>
                <GalleryItem image={polanski} size={2} action={setOverlay}/>
                <GalleryItem image={sutryk} size={1} action={setOverlay}/>
                <GalleryItem image={polanski} size={2} action={setOverlay}/>
                <GalleryItem image={rybka} size={1} action={setOverlay}/>
                <GalleryItem image={polanski} size={1} action={setOverlay}/>
                <GalleryItem image={rybka} size={1} action={setOverlay}/>
                <GalleryItem image={sutryk} size={2} action={setOverlay}/>
                <GalleryItem image={rybka} size={1} action={setOverlay}/>
                <GalleryItem image={sutryk} size={2} action={setOverlay}/>
                <GalleryItem image={sutryk} size={2} action={setOverlay}/>
                <GalleryItem image={polanski} size={2} action={setOverlay}/>
                <GalleryItem image={sutryk} size={2} action={setOverlay}/>
                <GalleryItem image={rybka} size={1} action={setOverlay}/>
           </Gallery>

           <Overlay images={overlayImages}/>
        </main>
    )
}