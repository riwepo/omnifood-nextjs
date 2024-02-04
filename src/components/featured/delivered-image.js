import Image from "next/image";

function DeliveredImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="-mr-4 rounded-full border-2 border-off-white last:mr-0"
    ></Image>
  );
}

export default DeliveredImage;
