import Gallery from "@/components/Gallery/Gallery";
import GalleryItem from "@/components/GalleryItem/GalleryItem";

// images
import sutryk from '../../assets/images/sutryk.jpg';
import rybka from  '../../assets/images/rybka.jpg';
import polanski from '../../assets/images/polanski.png';

export default function Portfolio(){
    return (
        <main>
           <Gallery>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={rybka} size={1}/>
                <GalleryItem image={polanski} size={2}/>
                <GalleryItem image={sutryk} size={1}/>
                <GalleryItem image={polanski} size={2}/>
                <GalleryItem image={rybka} size={1}/>
                <GalleryItem image={polanski} size={1}/>
                <GalleryItem image={rybka} size={1}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={rybka} size={1}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={polanski} size={2}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={rybka} size={1}/>
           </Gallery>
        </main>
    )
}