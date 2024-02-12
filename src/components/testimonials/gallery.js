import GalleryItem from "./gallery-item";

function Gallery() {
  const galleryIndexes = Array.from({ length: 12 }, (v, k) => k + 1);
  return (
    <div className="gallery grid grid-cols-3 gap-x-4 gap-y-4 p-4">
      {galleryIndexes.map((index) => {
        return <GalleryItem key={index} index={index} />;
      })}
    </div>
  );
}

export default Gallery;

// .gallery {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1.6rem;
//   padding: 1.6rem;
// }
