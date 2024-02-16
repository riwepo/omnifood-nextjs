import Image from "next/image";

import img1 from "@/public/img/gallery/gallery-1.jpg";
import img2 from "@/public/img/gallery/gallery-2.jpg";
import img3 from "@/public/img/gallery/gallery-3.jpg";
import img4 from "@/public/img/gallery/gallery-4.jpg";
import img5 from "@/public/img/gallery/gallery-5.jpg";
import img6 from "@/public/img/gallery/gallery-6.jpg";
import img7 from "@/public/img/gallery/gallery-7.jpg";
import img8 from "@/public/img/gallery/gallery-8.jpg";
import img9 from "@/public/img/gallery/gallery-9.jpg";
import img10 from "@/public/img/gallery/gallery-10.jpg";
import img11 from "@/public/img/gallery/gallery-11.jpg";
import img12 from "@/public/img/gallery/gallery-12.jpg";

const galleryData = [
  { key: 1, img: img1 },
  { key: 2, img: img2 },
  { key: 3, img: img3 },
  { key: 4, img: img4 },
  { key: 5, img: img5 },
  { key: 6, img: img6 },
  { key: 7, img: img7 },
  { key: 8, img: img8 },
  { key: 9, img: img9 },
  { key: 10, img: img10 },
  { key: 11, img: img11 },
  { key: 12, img: img12 },
];

function Gallery() {
  const alt = "Photo of beautifully arranged food";
  return (
    <div className="gallery grid grid-cols-4 gap-x-4 gap-y-4 p-4 md:grid-cols-6 xl:grid-cols-2 2xl:grid-cols-3">
      {galleryData.map((item) => {
        return (
          <figure
            key={item.key}
            className="gallery-item block overflow-hidden "
          >
            <Image
              className="gallery-img w-full transition-all duration-300 hover:scale-[1.1]"
              alt={alt}
              src={item.img}
            />
          </figure>
        );
      })}
    </div>
  );
}

export default Gallery;
