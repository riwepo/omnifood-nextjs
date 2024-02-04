import Image from "next/image";

function FeaturedLogos() {
  return (
    <div className="flex">
      <Image
        // 562 x 80
        src="/img/logos/techcrunch.png"
        alt="Techcrunch logo"
        height="32"
        width="224"
        className="opacity-50 brightness-0"
      />
    </div>
  );
  s;
}

export default FeaturedLogos;

// .logos img {
//   height: 3.2rem;
//   filter: brightness(0);
//   opacity: 50%;
// }
