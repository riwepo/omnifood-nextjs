import Image from "next/image";

function GalleryItem({ index }) {
  const imgWidth = 800 * 1;
  const imgHeight = 800 * 1;
  const src = `/img/gallery/gallery-${index}.jpg`;
  const alt = "Photo of beautifully  arranged food";
  return (
    <figure className="gallery-item block overflow-hidden ">
      <Image
        width={imgHeight}
        height={imgWidth}
        className="gallery-img transition-all duration-300 hover:scale-[1.1]"
        alt={alt}
        src={src}
      />
    </figure>
  );
}

export default GalleryItem;

// .gallery-item {
//   overflow: hidden;
// }

// .gallery-item img {
//   display: block;
//   width: 100%;
//   transition: all 0.4s;
// }

// .gallery-item img:hover {
//   transform: scale(1.1);
// }
