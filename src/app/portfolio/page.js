import Gallery from "@/components/Gallery/Gallery";
import GalleryItem from "@/components/GalleryItem/GalleryItem";

// images
import sutryk from '../../assets/images/sutryk.jpg';

export default function Portfolio(){
    return (
        <main>
           <Gallery>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={sutryk} size={1}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={sutryk} size={1}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={sutryk} size={1}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={sutryk} size={1}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={sutryk} size={1}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={sutryk} size={1}/>
                <GalleryItem image={sutryk} size={2}/>
                <GalleryItem image={sutryk} size={1}/>
           </Gallery>
        </main>
    )
}