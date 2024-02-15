import Image from "next/image";

function FeaturedLogos() {
  const displayHeight = 32;
  // all images have the same height, but verying widths
  const imgHeight = 80;
  const imageData = [
    { index: 1, name: "techcrunch", width: 562 },
    { index: 2, name: "business-insider", width: 252 },
    { index: 3, name: "the-new-york-times", width: 609 },
    { index: 4, name: "forbes", width: 306 },
    { index: 5, name: "usa-today", width: 428 },
  ];
  return (
    <ul className="flex justify-around">
      {imageData.map((img) => {
        return (
          <li key={img.index}>
            <Image
              src={`/img/logos/${img.name}.png`}
              alt={`${img.name} logo`}
              height={displayHeight}
              width={(displayHeight * img.width) / imgHeight}
              className="opacity-50 brightness-0"
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FeaturedLogos;

// .logos img {
//   height: 3.2rem;
//   filter: brightness(0);
//   opacity: 50%;
// }
