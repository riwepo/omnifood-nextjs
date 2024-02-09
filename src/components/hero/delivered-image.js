import Image from "next/image";

function DeliveredImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="border-whites-100 -mr-4 rounded-full border-2 last:mr-0"
    ></Image>
  );
}

export default DeliveredImage;
