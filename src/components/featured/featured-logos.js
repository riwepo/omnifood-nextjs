import Image from "next/image";

function FeaturedLogos() {
  const logoHeight = 32;
  const techCrunchRatio = 562 / 80;
  const businessInsiderRatio = 252 / 80;
  const techCrunchWidth = logoHeight * techCrunchRatio;
  const businessInsiderWidth = logoHeight * businessInsiderRatio;
  return (
    <div className="flex justify-around">
      <Image
        src="/img/logos/techcrunch.png"
        alt="Techcrunch logo"
        height={logoHeight}
        width={techCrunchWidth}
        className="opacity-50 brightness-0"
      />
      <Image
        src="/img/logos/business-insider.png"
        alt="Business Insider logo"
        height={logoHeight}
        width={businessInsiderWidth}
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
